import { Fragment } from "react";

import { COLORS } from "../../constants";
import ChatSources from "./ChatSources";
import type { History, Source } from "./types";
import ChatMessage from "./ChatMessage";

type Props = {
  history: History[];
  loading: boolean;
  onSourceSelect: (source: Source) => void;
  sources: Source[];
};

function ChatHistory({ history, loading, onSourceSelect, sources }: Props) {
  return (
    <>
      <p className="spv-1">Chat history</p>
      <div className="chat-history-container spv-8">
        <div className={`chat-history ${loading ? "loading" : ""}`}>
          <ChatMessage author="ai">
            Hi there! I am a helpful robot assistant who will try to answer
            questions that aged care workers may have about their role and
            responsibilities. I have been supplied with a subset of documents
            from the{" "}
            <a
              href="https://www.agedcarequality.gov.au/resource-library?resources%5B0%5D=audience%3A8586&resources%5B1%5D=languages%3A371&resources%5B2%5D=type%3A251&resources%5B3%5D=type%3A261&resources%5B4%5D=type%3A7923"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Government's Aged Care Quality and Safety Commission
            </a>{" "}
            which I will do my best to reference in my responses.
          </ChatMessage>
          {history.map((entry, i) => (
            <Fragment key={`entry-${i}`}>
              <ChatMessage author="human">{entry.human}</ChatMessage>
              <ChatMessage author="ai">{entry.ai}</ChatMessage>
            </Fragment>
          ))}
          <ChatSources sources={sources} onSourceSelect={onSourceSelect} />
        </div>
        {loading ? (
          <svg
            className="spinner"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={COLORS.black}
          >
            <path
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
              className="spinner-path"
            />
          </svg>
        ) : null}
      </div>
    </>
  );
}

export default ChatHistory;
