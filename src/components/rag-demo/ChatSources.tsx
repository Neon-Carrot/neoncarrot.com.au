import { COLORS } from "../../constants";
import type { Source } from "./types";
import { getFilePath, getReadableFilePath } from "./utils";

type Props = {
  onSourceSelect: (source: Source) => void;
  sources: Source[];
};

function ChatSources({ onSourceSelect, sources }: Props) {
  if (!sources.length) {
    return null;
  }

  const uniqueSources = sources.reduce<Source[]>((acc, source) => {
    const alreadyExists = acc.some(
      (s) => s.filename === source.filename && s.page === source.page
    );
    if (!alreadyExists) {
      acc.push(source);
    }
    return acc;
  }, []);

  return (
    <>
      <p>Sources:</p>
      <ol>
        {uniqueSources.map((source, i) => (
          <li key={`${source.filename}${i}`}>
            <span>
              {getReadableFilePath(source.filename)}, Page {source.page + 1}
            </span>
            <br />
            <div>
              <span>{source.score * 100}% match</span>
              <br />
              <button
                className="button-link"
                onClick={() => onSourceSelect(source)}
              >
                View in Source window ➞
              </button>
              <br />
              <a
                href={getFilePath(source.filename, source.page + 1)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in new tab
                <svg
                  style={{ marginLeft: ".25rem" }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Interface / External_Link">
                    <path
                      id="Vector"
                      d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                      stroke={COLORS.link}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ChatSources;
