import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Interface from "./pages/interface/Interface";

function App() {
  return (
    <Routes>
      <Route path="/interface" element={<Interface />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
