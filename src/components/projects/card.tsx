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
    <div className="flex h-full w-full flex-col rounded-xl bg-[#303030] p-4">
      <div className="flex w-full flex-row"></div>
      <div className="flex w-full flex-row gap-2 bg-white">tags</div>
    </div>
  );
}
