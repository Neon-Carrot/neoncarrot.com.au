import type { Source } from "./types";
import { getFilePath } from "./utils";

type Props = {
  selectedSource: Source | null;
};

function SourceWindow({ selectedSource }: Props) {
  return (
    <>
      <h2 className="heading-6">Source</h2>
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
    </>
  );
}

export default SourceWindow;
