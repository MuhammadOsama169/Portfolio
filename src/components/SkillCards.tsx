import { skills } from "../assets/data/skillsData";
import React from "react";

export const SkillCards = () => {
  return (
    <>
      {skills.map((skill) => (
        <div className="flex gap-2 items-center" key={skill.title}>
          <img
            alt={skill.title}
            src={skill.image}
            className="rounded-sm md:w-[65px] w-[45px] h-[45px] md:h-auto "
          />
          <div className="font-popins">
            <p className="font-bold xl:text-md text-[10px] dark:text-white text-black">
              {skill.title}
            </p>
            <p className="md:text-sm text-[8px] text-[#757575]">
              {skill.description}
            </p>
            <div className="md:text-sm text-[10px] text-[#757575]">
              <span className="font-semibold">Level:</span>{" "}
              <span>{skill.level}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
