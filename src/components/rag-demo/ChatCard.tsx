import { COLORS } from "../../constants";
import ChatForm from "./ChatForm";
import ChatHistory from "./ChatHistory";
import type { History, Source } from "./types";

type Props = {
  error: string | null;
  history: History[];
  loading: boolean;
  onClear: () => void;
  onQuestionChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSourceSelect: (source: Source) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  question: string;
  sources: Source[];
};

function ChatCard({
  error,
  history,
  loading,
  onClear,
  onQuestionChange,
  onSourceSelect,
  onSubmit,
  question,
  sources,
}: Props) {
  return (
    <div className="card-container">
      <div className="card">
        <ChatHistory
          history={history}
          loading={loading}
          onSourceSelect={onSourceSelect}
          sources={sources}
        />
        <ChatForm
          disabled={loading}
          error={error}
          onClear={onClear}
          onQuestionChange={onQuestionChange}
          onSubmit={onSubmit}
          question={question}
        />
      </div>
      <div className="card-shadow" style={{ backgroundColor: COLORS.orange }} />
    </div>
  );
}

export default ChatCard;
