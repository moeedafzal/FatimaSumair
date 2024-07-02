import React from "react";

const StickyNote = ({ content }) => {
  return (
    <div className="w-72 h-72 bg-[#FF9083] flex justify-center items-center text-left p-6 shadow-xl shadow-slate-400">
      <p className="font-poppins text-2xl font-semibold">{content}</p>
    </div>
  );
};

export default StickyNote;
