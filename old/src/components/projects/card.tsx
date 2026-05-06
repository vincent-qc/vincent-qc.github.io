import { motion } from "motion/react";

const colors = new Map<string, string>([
  ["license", "bg-red-500"],
  ["language", "bg-indigo-400"],
  ["library", "bg-emerald-400"],
]);

const TagCard = ({
  tag,
  type,
}: {
  tag: string;
  type: "license" | "language" | "library";
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-1">
      <p className="text-sm font-light tracking-wider">{tag}</p>
      <circle className={`h-2 w-2 rounded-full ${colors.get(type)}`} />
    </div>
  );
};

export default function ProjectCard({
  name,
  description,
  link,
  image,
  tags,
  index,
}: {
  name: string;
  description: string;
  link: string;
  image?: string;
  tags: { license?: string; languages: string[]; libraries: string[] };
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.2 + 0.2 * index,
      }}
      className="flex h-full w-full cursor-pointer flex-col gap-4 rounded-xl bg-[#1D1D1D] p-4 transition-colors hover:bg-[#202020]"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex w-full flex-row gap-4">
        <img src={image} alt={name} className="h-16 w-16 rounded-xl" />
        <div className="flex flex-col justify-center">
          <h1 className="text-base font-semibold lg:text-lg">{name}</h1>
          <p className="py-1 text-xs font-light lg:text-sm">{description}</p>
        </div>
      </div>
      <div
        className="flex w-full flex-row gap-4 overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {tags.license && <TagCard tag={tags.license} type="license" />}
        {tags.languages.map((language, index) => (
          <TagCard key={index} tag={language} type="language" />
        ))}
        {tags.libraries.map((library, index) => (
          <TagCard key={index} tag={library} type="library" />
        ))}
      </div>
    </motion.div>
  );
}
