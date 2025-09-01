import { useState } from "react";
import UndoRedoControls from "./UndoRedoControls";
import useHistory from "./hooks/useHistory"; // ✅ import custom hook

function App() {
  const textHistory = useHistory("");   // for input text
  const resultHistory = useHistory(""); // for backend results
  const [tone, setTone] = useState("formal");

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const handleRewrite = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/rewrite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: textHistory.current, tone }),
      });

      const data = await res.json();
      resultHistory.update(data.output || JSON.stringify(data)); // ✅ track results
    } catch (err) {
      resultHistory.update("Error: Could not connect to backend");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Tone Picker</h1>

        {/* Text input with history */}
        <textarea
          value={textHistory.current}
          onChange={(e) => textHistory.update(e.target.value)}
          placeholder="Enter text here"
          className="w-full p-3 border rounded-lg mb-4"
        />

        <div className="flex items-center gap-2 mb-4">
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          >
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
            <option value="angry">Angry</option>
            <option value="excited">Excited</option>
            <option value="empathetic">Empathetic</option>
          </select>

          <button
            onClick={handleRewrite}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Change
          </button>
        </div>

        {/* Undo/Redo buttons */}
        <UndoRedoControls
          onUndo={textHistory.undo}
          onRedo={textHistory.redo}
          onReset={textHistory.reset}
          canUndo={textHistory.canUndo}
          canRedo={textHistory.canRedo}
        />

        <div className="p-3 border rounded-lg bg-gray-100">
          <strong>Result:</strong>
          <p>{resultHistory.current}</p>
        </div>
      </div>
    </div>
  );
}

export default App;