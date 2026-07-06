"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type PopupFormMode = "vendor" | "contact";

interface PopupFormContextValue {
  isOpen: boolean;
  mode: PopupFormMode;
  setMode: (mode: PopupFormMode) => void;
  openForm: (mode?: PopupFormMode) => void;
  closeForm: () => void;
}

const PopupFormContext = createContext<PopupFormContextValue | null>(null);

export function PopupFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<PopupFormMode>("vendor");

  const openForm = useCallback((nextMode: PopupFormMode = "vendor") => {
    setMode(nextMode);
    setIsOpen(true);
  }, []);

  const closeForm = useCallback(() => setIsOpen(false), []);

  return (
    <PopupFormContext.Provider value={{ isOpen, mode, setMode, openForm, closeForm }}>
      {children}
    </PopupFormContext.Provider>
  );
}

export function usePopupForm() {
  const ctx = useContext(PopupFormContext);
  if (!ctx) throw new Error("usePopupForm must be used within a PopupFormProvider");
  return ctx;
}
