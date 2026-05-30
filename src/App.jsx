import { Route, Routes } from "react-router-dom";
import { CustomCursor } from "./components/CustomCursor.jsx";
import { DownloadModal } from "./components/DownloadModal.jsx";
import { DownloadModalProvider } from "./context/DownloadModalContext.jsx";
import { DocsPage } from "./pages/DocsPage.jsx";
import { HomePage } from "./pages/HomePage/index.jsx";

function App() {
  return (
    <DownloadModalProvider>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
      <DownloadModal />
    </DownloadModalProvider>
  );
}

export default App;
