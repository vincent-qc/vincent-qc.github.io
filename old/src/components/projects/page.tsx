import ProjectCard from "./card";
import projects from "./projects.json";

export default function ProjectPage() {
  return (
    <div
      style={{
        scrollbarWidth: "none",
      }}
      className="flex h-full w-full flex-col items-start gap-4 overflow-auto py-4"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
}
