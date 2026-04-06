import React from "react";
export const Footer1 = () => {
  return (
    <div>
      <div className="flex flex-col  items-center justify-evenly bg-white text-gray-400 md:h-[560px] h-[472px] w-full p-2 md:w-full">
        <button className="h-7 w-[115px] bg-pink-300 rounded-2xl shadow-2xl text-black">
          Get in touch
        </button>
        <p className="text-gray-400 text-center w-full md:text-4xl ">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="flex text-2xl items-center gap-2 font-bold">
          <img src="message.png" alt="" />
          <p>Tom@pinecone.mn</p>
          <img src="dup.png" alt="" />
        </div>
        <div className="flex text-2xl items-center gap-2 font-bold">
          <img src="call.png" alt="" />
          <p>+976 99674978</p>
          <img src="dup.png" alt="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Yoy may also find me on these platforms!</p>
          <div className="flex gap-4 ">
            <img className="h-9 w-9" src="muur.png" alt="" />
            <img className="h-9 w-9" src="twitter.png" alt="" />
            <img className="h-9 w-9" src="figma.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-gray-200 gap-3 w-full p-2 md:w-full">
        <img src="cicon.png" alt="" />
        <p>2024 | Greetings with ❤️️ from Ulaanbaatar !</p>
      </div>
    </div>
  );
};

export default Footer1;
