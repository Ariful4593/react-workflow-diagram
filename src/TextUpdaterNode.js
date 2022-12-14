import { useCallback } from "react";
import { Handle, Position } from "reactflow";

import "./text-updater-node.css";
const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  console.log("LIne 11 Hello world");

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Text: Enter Text</label>
        <input
          id="text"
          name="text"
          placeholder="Enter your text here"
          onChange={onChange}
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
      />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default TextUpdaterNode;
