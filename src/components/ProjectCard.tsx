import React from "react";
import githubLogo from "../assets/github-logo.png";
import { useTranslation } from "react-i18next";
import { projectType } from "../types/ProjectType";
import VideoComponent from "../scenes/VideoComponent";

interface ProjectCardProps {
  data: projectType;
}
export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  const buttons = `hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]`;
  const demoButtons = `p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
hover:bg-blue hover:text-white transition duration-500`;

  return (
    <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
      <div className=" md:basis-[40%] md:order-2 lg:order-1">
        <a target="_blank" rel="noreferrer" href={data.demoUrl}>
          <VideoComponent
            className="w-full md:rounded-[40px] h-auto md:h-[300px] md:hover:scale-[1.5] duration-200"
            src={data.videoUrl}
            type="video/mp4"
          />
        </a>
      </div>

      <div className="md:basis-[60%]  md:mb-10">
        <div className=" md:basis-[40%] md:order-1 mb-3">
          <img
            className="pt-10 md:pt-0 max-h-[80px] max-w-[200px]"
            alt="sfb.png"
            src={data.logo}
          />
        </div>
        <p className="dark:text-white text-black text-xl">
          {staticData[data.title]}
        </p>
        <p className="dark:text-white text-black text-xl w-[90%]">
          {staticData[data.description]}
        </p>
        <div className="flex flex-col xs:flex-row gap-2 pt-5">
          <a
            target="_blank"
            rel="noreferrer"
            href={data.demoUrl}
            className={buttons}
          >
            <button className={demoButtons}>{staticData.actions.demo}</button>
          </a>
          {data.githubUrl && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.githubUrl}
              className={buttons}
            >
              <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                <img
                  className="w-[30px] xs:w-[25px] xs:h-[27px] mr-2"
                  alt="github.png"
                  src={githubLogo}
                />
                {staticData.actions.view_code}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
