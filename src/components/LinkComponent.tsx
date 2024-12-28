import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LinkTypes } from "../types/Link";

export const LinkComponent = ({
  page,
  selectedPage,
  setSelectedPage,
  keyName,
}: LinkTypes) => {
  const handleNavigate = () => {
    setSelectedPage(keyName);
  };
  return (
    <AnchorLink
      className={`${
        selectedPage === keyName ? "dark:text-[#00FFB9] text-redhot" : ""
      }
          hover:text-[#FF165D] transition duration-500 `}
      href={`#${keyName}`}
      onClick={handleNavigate}
    >
      {page}
    </AnchorLink>
  );
};
