import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../Components/Text";
import { exportComponentAsJPEG } from 'react-component-export-image';

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const addText = () => setCount(count + 1);

  return (
    <div className="container">
      <div className="meme-container" ref={memeRef}>
        <img src={params.get("url")} alt="Meme" />
        {Array(count).fill(0).map((_, index) => (
          <Text key={index} />
        ))}
      </div>

      <div className="button-group">
        <Button onClick={addText}>Add Text</Button>
        <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
          Download Meme
        </Button>
      </div>
    </div>
  );
};

export default EditPage;
