import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable>
      <div className="text-box">
        {editMode ? (
          <textarea
            className="form-control"
            onBlur={() => setEditMode(false)} 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            rows={4} 
            style={{ resize: "none", width: "100%", fontSize:"16px"}} // Prevent resizing
          />
        ) : (
          <h className="meme-text" onDoubleClick={() => setEditMode(true)}>
            {val.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
