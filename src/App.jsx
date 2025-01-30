import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="text-white h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Juan Barbat</h1>
      <p className="text-xl">Frontend Developer | Web Designer</p>
      <div className="mt-6">
        <a
          href="mailto:juan@webcoders.io"
          className="text-blue-400 hover:text-blue-300"
        >
          Contact me
        </a>
      </div>

      {/* Custom cursor */}
      <div
        className="cursor-light"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default App;
