import SplitText from "../Fancy Components/SplitText";
import logo from '../assets/imgs/logo.png'

import React from "react";

export const Home = () => {
  return (
    <div className="flex max-w-6xl w-[90%] mx-auto gap-10 flex-row items-center mt-30 mb-100">
      <div className="hero--content w-[70%]">
        <div className="title w-full flex flex-col">
          <SplitText
            text="Welcome to the"
            className="text-4xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
          <SplitText
            text="Dev club"
            className="text-6xl font-semibold text-center text-blue-400 w-full mb-5"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>
        <div className="content w-full">
          <SplitText
            text="Biz React yordamida veb-ilovalarni o'rganadigan va yaratadigan ishtiyoqli talabalar guruhimiz. Bizning maqsadimiz bir-birimizga dasturchilar sifatida o'sishiga yordam berish, bilim almashish va birgalikda ajoyib loyihalarni yaratishdir. Klubimizda biz siga boshlang'ich bilimarni beramiz. Masalan: HTML/CSS, JS, React
          "
            className="text-2xl font-semibold text-left"
            duration={0.5}
            delay={10}
            textAlign="left"
          />
        </div>
      </div>
      <div className="hero--img">
        <img src={logo} />
      </div>
    </div>
  );
};
