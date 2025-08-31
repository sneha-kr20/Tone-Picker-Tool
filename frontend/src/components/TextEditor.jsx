import React from 'react';

const TextEditor = ({ value, onChange }) => (
  <textarea
  className="w-full h-64 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 resize-none bg-white"
  value={value}
  onChange={(e) => onChange(e.target.value)}
  placeholder="Type or paste your text here..."
/>
);

export default TextEditor;