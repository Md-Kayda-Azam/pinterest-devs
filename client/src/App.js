import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<home />} />
      </Routes>
    </>
  );
}

export default App;
