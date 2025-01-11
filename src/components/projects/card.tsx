const TagCard = ({ tag }: { tag: string }) => {
  return <div>{tag}</div>;
};

export default function ProjectCard({
  name,
  description,
  image,
  tags,
}: {
  name: string;
  description: string;
  image?: string;
  tags: { license: string; languages: string[]; libraries: string[] }[];
}) {
  return (
    <div className="flex flex-col rounded-xl w-full h-full bg-[#303030] p-4">
      <div className="w-full flex flex-row"></div>
      <div className="flex flex-row gap-2 w-full bg-white">tags</div>
    </div>
  );
}
