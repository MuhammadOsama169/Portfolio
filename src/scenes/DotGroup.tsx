
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({selectedPage,setSelectedPage}) => {

    const selectedStyles = `relative dark:bg-[#00FFB9] bg-redhot before:absolute before:w-6 before:h-6 before:rounded-full

    before:border-2 dark:before:border-[#00FFB9]  before:border-redhot before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">

        <AnchorLink 
            href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-[#F3EFE0]"
        } w-3 h-3 rounded-full`}
            onClick={()=>setSelectedPage("home")}
        />
                <AnchorLink 
            href="#skills"
            className={`${selectedPage === "skills" ? selectedStyles : "dark:bg-[#F3EFE0] bg-[#C490E4]" }
        w-3 h-3 rounded-full `}
            onClick={()=>setSelectedPage("skills")}

        />
                <AnchorLink 
            href="#projects"
            className={`${selectedPage === "projects" ? selectedStyles : "dark:bg-[#F3EFE0] bg-[#C490E4]" }
        w-3 h-3 rounded-full `}
            onClick={()=>setSelectedPage("projects")}
        />
                <AnchorLink 
            href="#testimonials"
            className={`${selectedPage === "testimonials" ? selectedStyles : "dark:bg-[#F3EFE0] bg-[#C490E4]" }
        w-3 h-3 rounded-full `}
            onClick={()=>setSelectedPage("testimonials")}
        />
                <AnchorLink 
            href="#about"
            className={`${selectedPage === "about" ? selectedStyles : "dark:bg-[#F3EFE0] bg-[#C490E4]" }
        w-3 h-3 rounded-full `}
            onClick={()=>setSelectedPage("about")}
        />

    </div>
  );
};

export default DotGroup;