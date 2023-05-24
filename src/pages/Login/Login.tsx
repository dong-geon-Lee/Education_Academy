import React, { useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col flex-[1.5] w-full min-h-[62rem] max-h-[64rem] bg-[#fff] rounded-3xl">
      <div className="w-full flex rounded-3xl overflow-hidden min-h-[5rem] h-full">
        <Link
          to="/auth/login"
          className="bg-[#fff] px-[2rem] py-[1.2rem] text-[#0078ff] text-[1.8rem] font-extrabold flex-1 text-center overflow-hidden"
        >
          로그인
        </Link>
        <Link
          to="/auth/register"
          className="bg-[#f4f4f4] px-[2rem] py-[1.2rem] text-[#000] text-[1.8rem] font-medium flex-1 text-center"
        >
          회원가입
        </Link>
      </div>
      <div className="text-[#000] w-full p-[3.6rem]">
        <div className="flex flex-col gap-[1rem] mb-[4.2rem]">
          <label className="text-[1.6rem] font-semibold block">이메일</label>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요"
            className="p-[1.2rem] text-[1.8rem]"
            prefix={
              <MailOutlined className="mr-[0.6rem] text-[2.2rem] fill-slate-500 text-[#ccc]" />
            }
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <label className="text-[1.6rem] font-semibold block">비밀번호</label>
          <Input.Password
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="p-[1.2rem] text-[1.8rem]"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            prefix={
              <LockOutlined className="mr-[0.6rem] text-[2.2rem] fill-slate-500 text-[#ccc]" />
            }
          />
        </div>
        <Button
          type="primary"
          className="block bg-[#4881f7] w-full h-[5.2rem] text-[2rem] font-bold mt-[6rem]"
        >
          로그인
        </Button>
        <div className="flex flex-col w-full justify-center">
          <p className="text-[#000] text-[1.6rem] text-center mt-[10%] mb-[6%]">
            다른 계정으로 로그인 하기
          </p>
          <div className="flex justify-center gap-[4.4rem] text-[#000] text-center">
            <div className="cursor-pointer">
              <img
                src="/assets/Kakao_logo.jpg"
                alt="Kakao_logo"
                className="w-[5.6rem] h-[5.6rem] rounded-lg mb-[0.6rem]"
              />
              <label className="text-[1.3rem] cursor-pointer">카카오</label>
            </div>
            <div className="cursor-pointer">
              <img
                src="/assets/google_logo.jpeg"
                alt="google_logo"
                className="w-[5.6rem] h-[5.6rem] rounded-lg border mb-[0.6rem]"
              />
              <label className="text-[1.3rem] cursor-pointer">구글</label>
            </div>
            <div className="cursor-pointer">
              <img
                src="/assets/github_logo.png"
                alt="github_logo"
                className="w-[5.6rem] h-[5.6rem] rounded-lg mb-[0.6rem]"
              />
              <label className="text-[1.3rem] cursor-pointer">깃허브</label>
            </div>
            <div className="cursor-pointer">
              <img
                src="/assets/Naver_Icon.png"
                alt="Naver_Icon"
                className="w-[5.6rem] h-[5.6rem] rounded-lg mb-[0.6rem]"
              />
              <label className="text-[1.3rem] cursor-pointer">네이버</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
