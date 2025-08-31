import React from 'react';

const UndoRedoControls = ({ onUndo, onRedo, onReset, canUndo, canRedo }) => (
  <div className="mt-2 flex gap-2">
    <button
      onClick={onUndo}
      disabled={!canUndo}
      className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 disabled:opacity-50"
    >
      Undo
    </button>

    <button
      onClick={onRedo}
      disabled={!canRedo}
      className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 disabled:opacity-50"
    >
      Redo
    </button>

    <button
      onClick={onReset}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Reset
    </button>
  </div>
);

export default UndoRedoControls;
