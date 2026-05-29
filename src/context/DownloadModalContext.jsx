import { createContext, useCallback, useContext, useState } from "react";

const DownloadModalContext = createContext(null);

export function DownloadModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <DownloadModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </DownloadModalContext.Provider>
  );
}

export function useDownloadModal() {
  const ctx = useContext(DownloadModalContext);
  if (!ctx) {
    throw new Error("useDownloadModal must be used within DownloadModalProvider");
  }
  return ctx;
}
