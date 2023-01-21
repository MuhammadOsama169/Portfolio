import {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { GooglyEyes } from '../components/GooglyEyes';
import {motion} from 'framer-motion'

import MenuIcon from "../assets/menu-icon.svg"
import CloseIcon from "../assets/close-icon.svg"



const Link =({page,selectedPage,setSelectedPage}) =>{
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-gradient-rainblue" : "" }
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
    const NavBarBackground = IsTopOfPage ? "" : "dark:bg-[#d5624f] bg-[#EAC408]";

    const [isOn, setIsOn] = useState(() => {
        if (localStorage.getItem('theme') === 'light') {
          return true;
        } else {
          return false;
        }
      });
      const toggleSwitch = () => setIsOn(!isOn);
    
      const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
      };
    
      if (isOn) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    
      if (
        localStorage.theme === 'light' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: light)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

  return (
    <nav className={`${NavBarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6  dark:text-white text-black">
            <h4 className="font-playfair text-3xl font-bold dark:text-white text-black"> MO.</h4>

            {/* Desktop */}

            {isAboveSmallScreens ? (
 
                <div className="flex justify-between gap-16 font-opensans font-semibold text-sm items-center">
            {/* TOGGLE SWITCH */}
                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                    <motion.div className="handle" layout transition={spring} />
                </div>
                
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
                   className="rounded-full bg-redhot p-2" 
                   onClick={()=> setIsMediaToggled(!isMenuToggled)}
                    >
                <img alt="menu-icon" src={MenuIcon} />
            </button>
            )}

            {/* Mobile View */}

            {!isAboveSmallScreens && isMenuToggled && (
                
                <div className="fixed right-0 bottom-0 h-full bg-[#00337C] w-[200px] ss:w-[300px] ">

            {/* Close Icon */}

            <div className="flex justify-end p-12">
                <button onClick={()=> setIsMediaToggled(!isMenuToggled)}>
                    <img className=" h-[40px]" alt="close icon" src={CloseIcon}/>
                </button>
            </div>
            
            <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0
            }}
            exit={{
              x: "100%"
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}>

            <div className="flex flex-col gap-10 ml-[25%] text-2xl text-white">
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
                <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                    <motion.div className="handle" layout transition={spring} />
                </div>
                    
                    </div>
                    </motion.div>
                </div>

            )}

        </div>

    </nav>
  )
}
