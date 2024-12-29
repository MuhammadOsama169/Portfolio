import { Dispatch, SetStateAction } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface DotGroupProps {
  selectedPage: string;
  setSelectedPage: Dispatch<SetStateAction<string>>;
}
const DotGroup = ({ selectedPage, setSelectedPage }: DotGroupProps) => {
  const selectedStyles = `relative dark:bg-[#00FFB9] bg-redhot before:absolute before:w-6 before:h-6 before:rounded-full

    before:border-2 dark:before:border-[#00FFB9]  before:border-redhot before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-[#F3EFE0]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        href="#skill"
        className={`${
          selectedPage === "skill"
            ? selectedStyles
            : "dark:bg-[#F3EFE0] bg-[#C490E4]"
        }
        w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("skill")}
      />
      <AnchorLink
        href="#project"
        className={`${
          selectedPage === "project"
            ? selectedStyles
            : "dark:bg-[#F3EFE0] bg-[#C490E4]"
        }
        w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("project")}
      />
      <AnchorLink
        href="#testimonial"
        className={`${
          selectedPage === "testimonial"
            ? selectedStyles
            : "dark:bg-[#F3EFE0] bg-[#C490E4]"
        }
        w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("testimonials")}
      />
      <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about"
            ? selectedStyles
            : "dark:bg-[#F3EFE0] bg-[#C490E4]"
        }
        w-3 h-3 rounded-full `}
        onClick={() => setSelectedPage("about")}
      />
    </div>
  );
};

export default DotGroup;
