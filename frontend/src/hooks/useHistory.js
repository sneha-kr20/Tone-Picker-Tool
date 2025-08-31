import { useState } from 'react';

export default function useHistory(initialValue) {
  const [history, setHistory] = useState([initialValue]);
  const [index, setIndex] = useState(0);

  const current = history[index];

  const update = (newValue) => {
    const newHistory = history.slice(0, index + 1);
    newHistory.push(newValue);
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  const undo = () => index > 0 && setIndex(index - 1);
  const redo = () => index < history.length - 1 && setIndex(index + 1);
  const reset = () => {
    setHistory([history[0]]);
    setIndex(0);
  };

  return {
    current,
    update,
    undo,
    redo,
    reset,
    canUndo: index > 0,
    canRedo: index < history.length - 1,
  };
}