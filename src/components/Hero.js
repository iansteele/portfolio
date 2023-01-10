import React from "react";
import "../App.css";

function Hero(props) {
  return (
    <div className="relative flex flex-col-reverse items-center justify-center flex-grow gap-6 px-6 py-24 mt-0 text-white min-h-[50vh] md:gap-10 md:flex-row rounded-xl ">
      <div className="flex flex-col w-full gap-4 max-w-prose">
        <p className="text-6xl font-bold tracking-tight md:text-7xl ">
          Hi, I'm Ian
        </p>
        <p className="text-2xl font-regular text-brand-secondary">
          A product designer & illustrator
        </p>
        <p className="text-lg md:font-regular">
          I am building a digital k-12 curriculum platform with the amazing
          folks at Imagine Learning Classroom
        </p>
      </div>
      {/* <div className="flex items-end -mx-6 bg-brand-secondary sm:mx-0">
        <img
          className="h-auto mx-auto w-76 md:w-full"
          src={process.env.PUBLIC_URL + "/img/ian-styled.png"}
          alt="A headshot photo of what I look like in person"
        />
      </div> */}
    </div>
  );
}

export default Hero;
