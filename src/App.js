import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Homepage from "./pages/Home";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <h1 className="text-center my-4">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
