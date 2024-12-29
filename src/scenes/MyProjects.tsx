import React from "react";
import { getLangDir } from "../helpers/getLang-service";
import { Parallax } from "react-scroll-parallax";
import { projectsData } from "../assets/data/projectData";
import { ProjectCard } from "../components/ProjectCard";
import useMediaQuery from "../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

export const MyProjects = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section
      id="project"
      className="pt-20 md:pb-48 pb-10"
      style={{ direction: getLangDir() }}
    >
      <Parallax
        translateY={[50, -50]}
        className="font-bold xl:text-[94px] text-[50px] uppercase"
        disabled={isMobile}
      >
        <h1>{staticData.skills}</h1>
        <h1 className="text-[#353334]">{staticData.in_action}</h1>
      </Parallax>

      <div className="flex flex-col gap-2 ">
        {projectsData.map((project) => (
          <ProjectCard key={project.description} data={project} />
        ))}
      </div>
    </section>
  );
};
