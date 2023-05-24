import React, { useState } from "react";
import { LockOutlined, MailOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col flex-[1.5] w-full min-h-[62rem] max-h-[64rem] bg-[#fff] rounded-3xl">
      <div className="w-full flex rounded-3xl overflow-hidden h-[5rem]">
        <Link
          to="/auth/login"
          className="bg-[#f4f4f4] px-[2rem] py-[1.2rem] text-[#000] text-[1.8rem] font-medium flex-1 text-center"
        >
          로그인
        </Link>
        <Link
          to="/auth/register"
          className="bg-[#fff] px-[2rem] py-[1.2rem] text-[#0078ff] text-[1.8rem] font-extrabold flex-1 text-center"
        >
          회원가입
        </Link>
      </div>

      <div className="text-[#000] w-full p-[3.6rem]">
        <div className="flex flex-col gap-[1rem] mb-[2.2rem]">
          <label className="text-[1.6rem] font-semibold block">이름</label>
          <Input
            type="text"
            placeholder="이름을 입력해주세요"
            className="p-[1.2rem] text-[1.8rem]"
            prefix={
              <SmileOutlined className="mr-[0.6rem] text-[2.2rem] fill-slate-500 text-[#ccc]" />
            }
          />
        </div>
        <div className="flex flex-col gap-[1rem] mb-[2.2rem]">
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
            placeholder="영문자, 숫자, 특수문자 포함 최소 8~20자"
            className="p-[1.2rem] text-[1.8rem]"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            prefix={
              <LockOutlined className="mr-[0.6rem] text-[2.2rem] fill-slate-500 text-[#ccc]" />
            }
          />
          <Input.Password
            type="password"
            placeholder="비밀번호를 확인해 주세요"
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
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default Register;
