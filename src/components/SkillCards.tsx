import { useTranslation } from "react-i18next";
import { skills } from "../assets/data/skillsData";
import React from "react";

export const SkillCards = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists.skill_cards");

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
            <p className="font-bold md:text-[14px] text-[10px] dark:text-white text-black">
              {skill.title}
            </p>
            <p className="md:text-sm text-[8px] text-[#757575]">
              {staticData[skill.description]}
            </p>
            <div className="md:text-sm text-[8px] text-[#757575]">
              <span className="font-semibold">{staticData.level} </span>
              <span>{staticData[skill.level]}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
