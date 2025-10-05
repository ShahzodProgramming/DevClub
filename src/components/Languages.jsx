import React from "react";

export const Languages = ({ theme }) => {
  return (
    <div className="flex max-w-6xl w-[90%] mx-auto mt-50 mb-20">
      <div>
        <p className="text-3xl mb-5">Bizda sizga quyidagilarni o'rgatamiz:</p>
        <div className="flex w-full flex-col transition-all">
          <div
            className={`flex text-md w-full items-center ${
              theme == "dark" ? "hover:bg-blue-950" : "hover:bg-gray-200"
            } py-10 rounded transition-all duration-100`}
          >
            <div className="languages--img flex flex-col items-center w-[30%]">
              <i className="transition ri-html5-fill text-6xl text-orange-500"></i>
              <span className="text-sm font-bold">HTML</span>
            </div>
            <p className="w-2/3">
              <span className="font-bold">HyperText Markup Language</span>— bu
              har bir veb-saytning asosi. U orqali sahifalarning tuzilishini
              yaratamiz: matnlar, rasmlar, havolalar va tugmalar aynan HTML
              orqali joylashtiriladi. Biz HTML yordamida veb-sayt skeletini
              tuzishni o‘rganamiz.
            </p>
          </div>

          <div
            className={`flex text-md w-full items-center ${
              theme == "dark" ? "hover:bg-blue-950" : "hover:bg-gray-100"
            } py-10 rounded transition-all duration-100`}
          >
            <div className="languages--img flex flex-col items-center w-[30%]">
              <i className="transition ri-css3-fill text-[#2e53e6] text-6xl"></i>
              <span className="text-sm font-bold">CSS</span>
            </div>
            <p className="w-2/3">
              <span className="font-bold">Cascading Style Sheets</span> — bu
              veb-saytga go‘zallik beradi. Ranglar, shriftlar, orqa fonlar,
              o‘lchamlar — barchasi CSS orqali boshqariladi. Biz CSS yordamida
              professional dizayn yaratishni o‘rganamiz va saytlarga jon
              kiritamiz.
            </p>
          </div>

          <div
            className={`flex text-md w-full items-center ${
              theme == "dark" ? "hover:bg-blue-950" : "hover:bg-gray-100"
            } py-10 rounded transition-all duration-100`}
          >
            <div className="languages--img flex flex-col items-center w-[30%]">
              <i className="transition ri-tailwind-css-fill text-6xl text-[#3ec0f7]"></i>
              <span className="text-sm font-bold">Tailwind</span>
            </div>
            <p className="w-2/3">
              Tailwind CSS — bu zamonaviy va qulay CSS freymvork bo‘lib, u
              orqali saytingizni tez va tartibli tarzda bezatish mumkin. Unda
              har bir dizayn elementi uchun tayyor klasslar mavjud: ranglar,
              joylashuv, chetlar, animatsiyalar va boshqalar. Biz Tailwind
              yordamida tez, chiroyli va responsiv dizaynlar yaratishni
              o‘rganamiz — ya’ni saytlar har qanday ekranda mukammal ko‘rinadi.
            </p>
          </div>

          <div
            className={`flex text-md w-full items-center ${
              theme == "dark" ? "hover:bg-blue-950" : "hover:bg-gray-100"
            } py-10 rounded transition-all duration-100`}
          >
            <div className="languages--img flex flex-col items-center w-[30%]">
              <i className="transition ri-javascript-fill text-6xl text-yellow-300"></i>
              <span className="text-sm font-bold">JS</span>
            </div>
            <p className="w-2/3">
              JavaScript — bu veb-saytga jon bag‘ishlovchi dasturlash tili. U
              foydalanuvchi bilan o‘zaro aloqani yaratadi: menyular,
              animatsiyalar, tugma bosilganda harakatlar va yana ko‘p narsa. Biz
              JS yordamida interaktiv saytlar yasashni o‘rganamiz.
            </p>
          </div>

          <div
            className={`flex text-md w-full items-center ${
              theme == "dark" ? "hover:bg-blue-950" : "hover:bg-gray-100"
            } py-10 rounded transition-all duration-100`}
          >
            <div className="languages--img flex flex-col items-center w-[30%]">
              <i className="transition ri-reactjs-line text-6xl text-[#00d2f7]"></i>
              <span className="text-sm font-bold">React</span>
            </div>
            <p className="w-2/3">
              React — bu zamonaviy JavaScript kutubxonasi, u orqali biz tez,
              dinamik va kuchli veb-ilovalar yaratamiz. Klubda biz React
              yordamida komponentli fikrlashni va haqiqiy loyihalarni tuzishni
              o‘rganamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
