import { useState, type FormEventHandler } from "react";

import type { History, Response, Source } from "./types";
import ChatForm from "./ChatForm";
import ChatHistory from "./ChatHistory";
import SourceCard from "./SourceCard";

const apiBaseUrl = import.meta.env.DEV
  ? import.meta.env.PUBLIC_AZURE_FUNCTION_BASE_URL
  : "http://localhost:7071";

function RAGDemo() {
  const [question, setQuestion] = useState<string>("");
  const [sources, setSources] = useState<Source[]>([]);
  const [selectedSource, setSelectedSource] = useState<Source | null>(null);
  const [history, setHistory] = useState<History[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const clearResponse = () => {
    setError(null);
    setSources([]);
    setSelectedSource(null);
  };

  const clearAll = () => {
    clearResponse();
    setHistory([]);
    setQuestion("");
  };

  const addToHistory = (queryText: string, responseText: string) => {
    const newEntry = { human: queryText, ai: responseText };
    let newHistory = [...history, newEntry];

    if (newHistory.length > 10) {
      newHistory = newHistory.slice(-10);
    }

    setHistory(newHistory);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    clearResponse();

    try {
      setLoading(true);
      const response = await fetch(`${apiBaseUrl}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-functions-key": import.meta.env.PUBLIC_AZURE_FUNCTION_KEY,
        },
        body: JSON.stringify({
          query: question,
          history: history,
        }),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const { sources, query_text, response_text }: Response =
        await response.json();
      setQuestion("");
      addToHistory(query_text, response_text);
      if (sources.length > 0) {
        setSources(sources);
        setSelectedSource(sources[0]);
      }
    } catch (err) {
      if (typeof err === "string") {
        setError(err);
      } else if (err instanceof Error) {
        setError(`${err.name}: ${err.message}`);
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rag-demo">
      <div className="chat-section">
        <ChatHistory
          history={history}
          loading={loading}
          onSourceSelect={(source) => setSelectedSource(source)}
          sources={sources}
        />
        <ChatForm
          disabled={loading}
          error={error}
          onClear={clearAll}
          onQuestionChange={(e) => setQuestion(e.target.value)}
          onSubmit={handleSubmit}
          question={question}
        />
      </div>
      <div className="source-section">
        <SourceCard selectedSource={selectedSource} />
      </div>
    </div>
  );
}

export default RAGDemo;
