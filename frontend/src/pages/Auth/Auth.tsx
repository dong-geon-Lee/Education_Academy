import React from "react";
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section>
      <header className="px-[9%]">
        <Link to="/">
          <img
            src="/assets/cube-logo-white.png"
            alt="cube_logo"
            className="w-[20rem] h-[10rem] object-cover cursor-pointer absolute top-[20%] z-[10]"
          />
        </Link>
        <Link
          to="/"
          className="text-[2rem] text-[#fff] absolute top-[50%] right-[5%] z-[10] cursor-pointer"
        >
          서비스 소개
        </Link>
      </header>

      <div className="bg-[#06f] text-white flex w-[100vw] h-[100vh] absolute top-[0%] left-[0%] p-[10%]">
        <div className="flex flex-col flex-[1.5] w-full h-full mr-[8%] min-h-[62rem] max-h-[64rem]">
          <div className="py-[10%] px-[4%]">
            <h1 className="text-[2rem]">오늘의 교육</h1> <br />
            <p className="text-[2.6rem] font-semibold">
              반가워요, 평생교육 서비스를 제공하는 <br /> 큐브입니다.
            </p>
          </div>
          <img
            src="/assets/signIn.png"
            alt="signIn"
            className="w-full h-full object-cover block min-h-[35rem] max-h-[40rem] pr-[25%]"
          />
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default Auth;
