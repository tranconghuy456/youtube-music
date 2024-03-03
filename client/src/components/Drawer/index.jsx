import PropTypes from "prop-types"
import "./drawer.module.css"
import logo from "../../assets/images/logo/favicon_48.png"

const Drawer = () => {
    return (
        <div id="drawer" className="fixed top-0 bottom-0 bg-[#0f0f0f] touch-pan-y h-100">
            <div className="drawer__content top-0 left-0 w-[240px]">
                <div className="drawer__content-header p-3">
                    <a href="/" className="flex header-logo items-center h-[50px] cursor-pointer">
                        <i className="ri-menu-line opacity-50 hover:opacity-100 text-white mr-3 ri-xl cursor-pointer p-3 block hover:before:content-['\ef32']"></i>
                        <img src={logo} alt="" className="h-[28px] w-[28px]" />
                        <h3 className="font-[Oswald] ml-1 text-2xl font-bold text-white">Music</h3>
                    </a>
                </div>
                <div className="drawer__content-body">
                    <div className="naivgation">
                        <div className="text-white p-2">

                        </div>
                        <NavLink text="Home" href="/"/> 
                    </div>

                </div>
                </div>
        </div>
    )
}

const NavLink = ({text, href}) => {
    return (
        <>
                    
                            <div className="nav__link p-4 bg-neutral-800 cursor-pointer rounded-lg">
                                <a href={href}>{text}</a>
                            </div>
        </>
    )
}

NavLink.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
}

export {Drawer}