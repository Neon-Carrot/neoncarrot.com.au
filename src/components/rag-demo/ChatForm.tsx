import { useRef } from "react";

type Props = {
  disabled: boolean;
  error: string | null;
  onClear: () => void;
  onQuestionChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  question: string;
};

function ChatForm({
  disabled,
  error,
  onClear,
  onQuestionChange,
  onSubmit,
  question,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <>
      <form ref={formRef} onSubmit={onSubmit}>
        <div className="textarea">
          <label htmlFor="question">Ask a question</label>
          <textarea
            disabled={disabled}
            id="question"
            maxLength={500}
            name="question"
            onChange={onQuestionChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                formRef.current?.requestSubmit();
              }
            }}
            required
            rows={2}
            style={{ marginBottom: "1rem", resize: "none" }}
            value={question}
          />
        </div>
        <div className="buttons">
          <button
            className="button grey sph-6"
            disabled={disabled}
            onClick={onClear}
            type="button"
          >
            Reset
          </button>
          <input
            className="button red"
            disabled={disabled}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  );
}

export default ChatForm;
