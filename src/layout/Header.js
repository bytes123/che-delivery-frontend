import React from "react";
import {
  FaBars,
  CiUser,
  MdDeliveryDining,
  IoIosArrowDown,
} from "../static/LogoData";
import { Link } from "react-router-dom";
import menu from "../static/MenuData";
export default function Header() {
  return (
    <div className="font-quicksand">
      <div className="header__intro bg-header-intro py-2">
        <div className="header__intro-text text-white text-center text-sm">
          HÈ BẬT HỨNG KHỞI - CHICK KHAO MÓN MỚI
        </div>
      </div>
      <div className="header__main flex items-center justify-between p-3  lg:px-20">
        <div className="lg:hidden">
          <FaBars className="text-2xl cursor-pointer" />
        </div>
        <div className="main-logo">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="max-w-[210px] max-h-[70px]"
            />
          </Link>
        </div>
        <div className="main-menu lg:block hidden">
          <ul className="menu-list uppercase text-sm flex">
            {menu.map((item) => (
              <li
                key={item.id}
                className="group px-5 hover:text-rose-600 flex items-center"
              >
                <Link to={item.link}>{item.text}</Link>
                {item?.children ? (
                  <IoIosArrowDown className="ml-2 group-hover:rotate-180 transition-all" />
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="main-user flex items-center md:items-top">
          <div className="bg-zinc-200 rounded-full cursor-pointer w-[35px] h-[35px] flex items-center justify-center">
            <CiUser className="text-xl" />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center cursor-pointer">
            <div className="relative ml-2 bg-red-700 rounded-full  w-[35px] h-[35px] flex items-center justify-center ">
              <div className="user-cart text-white text-[13px] font-light">
                0
              </div>
              <div className="before:content-['▶'] absolute left-7 text-lg text-red-600"></div>
            </div>

            <div className="lg:ml-2">
              <MdDeliveryDining className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
