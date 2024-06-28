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
      <h2 className="heading-6">Chat history</h2>
      <div className="chat-history-container spv-8">
        <div className={`chat-history ${loading ? "loading" : ""}`}>
          <ChatMessage author="ai">
            Hi there! I am a helpful robot assistant who will try to answer
            questions you might have about your role and responsibilities as an
            aged care worker.
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
