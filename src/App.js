import { useEffect, useState } from "react";
import "./App.css";
import Capture from "./components/Capture";

function App() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [text1, setText1] = useState("Text1");
  const [text2, setText2] = useState("Text2");
  const onFileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onTextInputChangeTop = (event) => {
    setText1(event.target.value);
  };
  const onTextInputChangeBottom = (event) => {
    setText2(event.target.value);
  };

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
  return (
    <div className="App">
      <header className="App-header">
        {preview && (
          <Capture img={preview} textTop={text1} textBottom={text2} />
        )}
        <input type={"file"} onChange={onFileInputChange} />
        <input type={"text"} onChange={onTextInputChangeTop} />
        <input type={"text2"} onChange={onTextInputChangeBottom} />
      </header>
    </div>
  );
}

export default App;
