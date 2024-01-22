import React, { useState } from "react";
import copy from "clipboard-copy";

const CopyToClipboardButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setIsCopied(true);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
