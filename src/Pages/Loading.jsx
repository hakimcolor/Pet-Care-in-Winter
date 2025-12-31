import React from 'react';

const Loading = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#2B0A3D] via-[#6D0FAF] to-[#FF007F] text-white">
      <div className="absolute top-10 left-10 w-44 h-44 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-fuchsia-400/30 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-[shine_4s_infinite]"></div>

      <div className="relative w-44 h-44 md:w-60 md:h-60 mb-12">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-fuchsia-400/70 animate-spin"></div>
        <div className="absolute inset-6 rounded-full border-4 border-b-transparent border-pink-500/50 animate-[spin_3s_linear_infinite_reverse]"></div>
        <div className="absolute inset-10 rounded-full border border-white/30 blur-sm"></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-8 h-8 bg-pink-300 rounded-full shadow-[0_0_35px_10px_rgba(255,0,150,0.8)] animate-pulse"></div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-center animate-pulse">
        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]">
          LOADING
        </span>
        <span className="text-pink-400 drop-shadow-[0_0_25px_rgba(255,0,150,0.8)]">
          ...
        </span>
      </h1>

      <div className="relative mt-10 w-[80%] max-w-[500px] h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-fuchsia-400 to-red-400 animate-[slide_1.5s_linear_infinite] rounded-full"></div>
      </div>

      <div className="flex gap-3 mt-10">
        <div className="w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>

      <p className="mt-10 text-pink-200/80 text-lg md:text-xl tracking-wide animate-pulse text-center">
        Let the <span className="text-white font-semibold">magic</span> begin 💫
      </p>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes shine {
            0%,100% { opacity: 0.4; }
            50% { opacity: 0.9; }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
