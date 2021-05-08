import React from "react";

export default function Button({type, color, name, width}) {
  return (
    <>
      <button
        type={type}
        className={`border border-${color}-500 bg-${color}-500 text-white rounded-md w-${width} py-2 transition duration-500 ease select-none hover:bg-${color}-600 focus:outline-none focus:shadow-outline`}
      >
        {name}
      </button>
    </>
  );
}
