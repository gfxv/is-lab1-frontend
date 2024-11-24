import React from "react";

const ToggleManagerModal = ({ text, openModal }) => {
  return (
    <button
      onClick={openModal}
      className="rounded-md bg-blue-600 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {text}
    </button>
  );
};

export default ToggleManagerModal;
