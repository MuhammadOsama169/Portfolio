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
            className="rounded-sm w-[60px] "
          />
          <div className="font-popins">
            <p className="font-bold text-md">{skill.title}</p>
            <p className="text-sm text-[#757575]">{skill.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
