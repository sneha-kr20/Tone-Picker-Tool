import React from 'react';

const TonePicker = ({ onToneSelect }) => {
  const tones = [
    ['Formal & Direct', 'Neutral & Direct', 'Casual & Direct'],
    ['Formal & Neutral', 'Neutral', 'Casual & Neutral'],
    ['Formal & Diplomatic', 'Neutral & Diplomatic', 'Casual & Diplomatic'],
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
  {tones.flat().map((label, idx) => (
    <button
      key={idx}
    className="px-4 py-2 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-900 hover:scale-105 transition-transform"
      onClick={() => onToneSelect(label)}
    >
      {label}
    </button>
  ))}
</div>
</div>
  );
};

export default TonePicker;