import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h1 className="text-3xl my-4">Count: {count}</h1>

      {count > 15 ? (
        <p className="text-red-600 font-bold">High Score</p>
      ) : (
        <button
          className="bg-green-600 text-white mx-6 p-2 mt-3"
          onClick={() => setCount(count + 2)}
        >
          Increase
        </button>
      )}

      <button
        className="bg-green-400 text-white mx-6 p-2 mt-3"
        onClick={() => setCount(count - 1)}
      >
        Reduce
      </button>

      <button
        className="bg-yellow-300 text-black mx-6 p-2 mt-3"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
