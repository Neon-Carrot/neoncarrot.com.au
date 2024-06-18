import type { Source } from "./types";
import { getFilePath } from "./utils";
import { COLORS } from "../../constants";

type Props = {
  selectedSource: Source | null;
};

function SourceCard({ selectedSource }: Props) {
  return (
    <div className="card-container">
      <div className="card pdf-card">
        <p className="spv-1">Source:</p>
        {selectedSource ? (
          <iframe
            className="pdf-iframe"
            key={`${selectedSource.filename}-${selectedSource.page + 1}`}
            src={`${getFilePath(
              selectedSource.filename,
              selectedSource.page + 1
            )}`}
            title={selectedSource.filename}
          ></iframe>
        ) : (
          <p>No source selected.</p>
        )}
      </div>
      <div className="card-shadow" style={{ backgroundColor: COLORS.red }} />
    </div>
  );
}

export default SourceCard;
