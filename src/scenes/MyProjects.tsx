import React from "react";
import { getLangDir } from "../helpers/getLang-service";
import { Parallax } from "react-scroll-parallax";
import { projectsData } from "../assets/data/projectData";
import { ProjectCard } from "../components/ProjectCard";
import useMediaQuery from "../hooks/useMediaQuery";

export const MyProjects = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <section
      id="projects"
      className="pt-20 pb-48"
      style={{ direction: getLangDir() }}
    >
      <Parallax
        translateY={[50, -50]}
        className="font-bold xl:text-[94px] text-[50px] "
        disabled={isMobile}
      >
        <h1>SKILLS</h1>
        <h1 className="text-[#353334]">IN ACTION</h1>
      </Parallax>

      <div className="flex flex-col gap-10 ">
        {projectsData.map((project) => (
          <ProjectCard key={project.description} data={project} />
        ))}
      </div>
    </section>
  );
};
