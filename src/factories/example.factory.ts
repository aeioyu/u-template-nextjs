import { ReactNode } from "react";
import { atom, useRecoilState } from "recoil";

interface UseAssistantType {
  assistant: AssistantState;
  openAssistant: () => void;
  closeAssistant: () => void;
  stopAssistantAnimate: () => void;
  startAssistantAnimate: () => void;
  setAssistantMessage: (message: string | ReactNode) => void;
  setAssistantSuccess: (message: string) => void;
  resetAssistantState: () => void;
}

type AssistantState = {
  isOpen: boolean;
  message: string | ReactNode;
  responseText: string;
  isSuccess: boolean;
  isAnimate: boolean;
};

const defaultState = {
  isOpen: false,
  message: "",
  responseText: "",
  isSuccess: false,
  isAnimate: false,
};

const assistantAtom = atom<AssistantState>({
  key: "assistantAtom",
  default: defaultState,
});

export function useAssistant(): UseAssistantType {
  const [assistant, setAssistantState] = useRecoilState<AssistantState>(assistantAtom);

  const openAssistant = () => {
    setAssistantState((state) => ({
      ...state,
      isOpen: true,
    }));
  };

  const closeAssistant = () => {
    setAssistantState((state) => ({
      ...state,
      isOpen: false,
    }));
  };

  const stopAssistantAnimate = () => {
    setAssistantState((state) => ({
      ...state,
      isAnimate: false,
    }));
  };

  const startAssistantAnimate = () => {
    setAssistantState((state) => ({
      ...state,
      isAnimate: true,
    }));
  };

  const setAssistantMessage = (message: string | ReactNode) => {
    setAssistantState((state) => ({
      ...state,
      message: message,
    }));
  };

  const setAssistantSuccess = (message: string) => {
    setAssistantState((state) => ({
      ...state,
      responseText: message,
      isSuccess: true,
    }));
  };

  const resetAssistantState = () => {
    setAssistantState(defaultState);
  };

  return {
    assistant,
    openAssistant,
    closeAssistant,
    stopAssistantAnimate,
    startAssistantAnimate,
    setAssistantMessage,
    setAssistantSuccess,
    resetAssistantState,
  };
}
