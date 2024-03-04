import PropTypes from 'prop-types';
import styles from './drawer.module.css';
import logo from '../../assets/images/logo/favicon_48.png';
import { NavLink } from 'react-router-dom';

const Drawer = () => {
  return (
    <div id="drawer" className="fixed top-0 bottom-0 bg-[#0f0f0f] touch-pan-y h-100">
      <div className=" top-0 left-0 w-[240px]">
        <div className="p-3">
          <div className="flex items-center h-[50px] cursor-pointer">
            <i className="ri-menu-line opacity-50 hover:opacity-100 text-white mr-3 ri-xl cursor-pointer p-3 block hover:before:content-['\ef32']"></i>
            <a href="/" className="flex items-center">
              <img src={logo} alt="" className="h-[26px] w-[26px]" />
              <h3 className="font-[Oswald] ml-1 text-2xl font-bold text-white">Music</h3>
            </a>
          </div>

          <ul className="navigation p-2">
            <li className="text-white w-100">
              <NavLink to="/home" exact className="inline-block w-[100%]">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const NavLink = ({ text, href, className, children }) => {
//   return (
//     <>
//       <div className={`p-4 mt-2 bg-neutral-800 cursor-pointer rounded-lg text-sm ${className} group ${({isActive}) => {isActive ? activeLink: ''}}`}>
//         {children}
//         <a className={({ isActive }) => (isActive ? activeLink : '')} href={href}>
//           {text}
//         </a>
//       </div>
//     </>
//   );
// };

// NavLink.propTypes = {
//   text: PropTypes.string,
//   href: PropTypes.string,
// };

export { Drawer };
