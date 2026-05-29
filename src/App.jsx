import { Route, Routes } from "react-router-dom";
import { DocsPage } from "./pages/DocsPage.jsx";
import { HomePage } from "./pages/HomePage/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsPage />} />
    </Routes>
  );
}

export default App;
