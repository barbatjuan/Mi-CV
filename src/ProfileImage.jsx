import { useState } from "react";

const ProfileImage = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
    setTimeout(() => setShowText(false), 2000);
  };

  return (
    <div className="relative flex items-start">
      <div className="relative">
        {showText && (
          <span
            className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-sm font-bold animate-bounce"
            style={{
              backgroundColor: "#37ffe124",
              color: "#37ffe1",
            }}
          >
            Ouch! 😵
          </span>
        )}
        <img
          src="/src/foto-juan-barbatsquare-puntillism.jpg"
          alt="Foto de Juan Barbat"
          className="w-[150px] h-[150px] object-cover transition-all duration-500 hover:sepia hover:scale-90 hover:shadow-2xl hover:shadow-black active:animate-shake"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
