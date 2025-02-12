import React from "react";

const HeroSection02: React.FC = () => {
  return (
    <div className="mt-8">
      <h2 className="text-gray-600 font-semibold text-center text-2xl mb-7">
        Advertisement
      </h2>
      <div className="w-[90%] mx-auto bg-gray-800 h-44 rounded-xl">
        <img
          src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?semt=ais_hybrid"
          alt=""
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection02;
