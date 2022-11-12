import { Routes, Route } from "react-router-dom";
import Interface from "./pages/interface/Interface";

function App() {
  return (
    <Routes>
      <Route path="/interface" element={<Interface/>} />
    </Routes>
  );
}

export default App;
