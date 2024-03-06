import PropTypes from 'prop-types';
import './sider.css';
import logo from '../../assets/images/logo/favicon_48.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
    localStorage.setItem('sidebarState', collapsed);
  };

  return (
    <>
      <div
        className={`sider z-20 border-r border-[#525252] group fixed bg-[rgba(0,0,0,0.6)] h-screen w-[240px] text-white ${collapsed ? 'collapsed' : ''}`}
      >
        <div className="w-100 flex mx-auto space-x-5 items-center px-8 pt-5">
          <i
            onClick={
              handleToggle
              //document.querySelector('.sider').classList.toggle('collapsed');
            }
            className="ri-menu-2-line ri-lg p-1 cursor-pointer"
          ></i>
          <NavLink
            to="/"
            className="logo flex items-center space-x-1 text-2xl bg-transparent group-[.collapsed]:hidden"
          >
            <img src={logo} alt="YouTube Music Logo" className="h-[26px] w-[26px]" />
            <span className="font-[Oswald]">Music</span>
          </NavLink>
        </div>

        <ul className="text-[#ccc] p-4 text-lg border-solid border-b border-slate-400/20">
          {[
            ['Home', '/', 'ri-home-2-line'],
            ['Explore', '/explore', 'ri-compass-line'],
            ['Library', '/library', 'ri-play-list-line'],
          ].map(([title, url, icon]) => (
            <li className="group block mx-auto mt-2 hover:bg-[rgba(0,0,0,0.8)] outline-1 outline-[#525252] hover:outline rounded-lg">
              <NavLink
                to={url}
                className={`flex space-x-5 items-center p-3 pl-5 rounded-lg group-[.collapsed]:space-x-0 group-[.collapsed]:flex-col group-[.collapsed]:p-2 group-[.collapsed]:pt-2`}
              >
                <i className={`${icon} ri-1x hover:text-white`}></i>
                <span className="hover:text-white group-[.collapsed]:text-xs">{title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={`playlist py-4 px-2 ${collapsed ? 'hidden' : ''}`}>
          <div className="rounded-full cursor-pointer p-3 pl-0 space-x-2 bg-[rgba(0,0,0,0.5)] w-50  block mx-auto text-sm text-center hover:bg-[rgba(0,0,0,0.8)] outline-1 outline-[#525252] hover:outline">
            <i className="ri-add-line ri-xl text-[#aaa]"></i>
            <span>New playlist</span>
          </div>

          <ul className="mt-4 space-y-2 overflow-auto overscroll-contain">
            <li className="mx-1 font-bold bg-[rgba(0,0,0,0.6)] p-3 rounded-lg hover:bg-[rgba(0,0,0,0.8)] outline-1 outline-[#525252] hover:outline cursor-pointer space-y-[.2rem]">
              <NavLink className="relative">
                <p className="title text-sm">Liked Music</p>
                <span className="author text-xs text-[#aaa] flex items-center">
                  <i className="ri-pushpin-2-line"></i>
                  HuyPaul
                </span>
                <i className="hidden ri-play-circle-line ri-xl absolute right-2 top-2 z-10"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Sider };
