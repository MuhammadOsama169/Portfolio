import { skills } from "../assets/data/skillsData";
import React from "react";

export const SkillCards = () => {
  return (
    <>
      {skills.map((skill) => (
        <div className="flex gap-2" key={skill.title}>
          <img
            alt={skill.title}
            src={skill.image}
            className="rounded-sm w-[60px] h-[50px] xl:h-auto"
          />
          <div className="font-popins">
            <p className="font-bold xl:text-md text-sm">{skill.title}</p>
            <p className="xl:text-sm text-[10px] text-[#757575]">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
