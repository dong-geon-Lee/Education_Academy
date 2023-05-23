import React, { useState } from "react";
import { OnChangeProps } from "../../@types";
import { Input } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { Search } = Input;

  const onChange = (e: OnChangeProps) => {
    setSearchText(e.target.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSearchText("");
  };

  return (
    <section>
      <div className="flex justify-between items-center px-[10%]">
        <img
          src="/assets/cube.svg"
          alt="cube_logo"
          className="w-[20rem] h-[10rem] object-cover cursor-pointer"
        />
        <form onSubmit={onSubmit}>
          <Search
            placeholder="검색어를 입력하세요"
            enterButton={true}
            allowClear={true}
            size="large"
            value={searchText}
            onChange={onChange}
            className="w-[40rem] bg-blue-500"
          />
        </form>
        <div className="flex space-x-[1.4rem] text-[2rem]">
          <Link to="/login" className="cursor-pointer hover:text-sky-500">
            로그인
          </Link>
          <Link to="/register" className="cursor-pointer hover:text-sky-500">
            회원가입
          </Link>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Navbar;
