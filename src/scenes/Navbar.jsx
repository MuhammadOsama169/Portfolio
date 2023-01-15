import {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { GooglyEyes } from './GooglyEyes';

import MenuIcon from "../assets/menu-icon.svg"
import CloseIcon from "../assets/close-icon.svg"



const Link =({page,selectedPage,setSelectedPage}) =>{
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : "" }
        hover:text-yellow transition duration-500 `}
        href={`#${lowerCasePage}`}
        onClick={()=>(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

// isTopOfPage,selectedPage,setSelectedPage from App.js 

export const Navbar = ({IsTopOfPage,selectedPage,setSelectedPage}) => {
    const [isMenuToggled, setIsMediaToggled]=useState(false);
    const isAboveSmallScreens =useMediaQuery("(min-width:768px)");
    const NavBarBackground = IsTopOfPage ? "" : "bg-neon";

  return (
    <nav className={`${NavBarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-playfair text-3xl font-bold"> MO.</h4>

            {/* Desktop */}

            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-opensans font-semibold text-sm items-center">

                    <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <GooglyEyes />
                </div>
            ) : (<button 
                   className="rounded-full bg-red p-2" 
                   onClick={()=> setIsMediaToggled(!isMenuToggled)}
                    >
                <img alt="menu-icon" src={MenuIcon} />
            </button>
            )}

            {/* Mobile View */}

            {!isAboveSmallScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">

            {/* Close Icon */}

                    <div className="flex justify-end p-12">
                        <button onClick={()=> setIsMediaToggled(!isMenuToggled)}>
                            <img alt="close icon" src={CloseIcon}/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-10 ml-[30%] text-2xl text-deep-blue">

            {/* MENU ITEMS */}

                    <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    </div>
                </div>

            )}

        </div>

    </nav>
  )
}
