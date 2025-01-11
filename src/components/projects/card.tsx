const colors = new Map<string, string>([
  ["license", "bg-red-300"],
  ["language", "bg-blue-300"],
  ["library", "bg-green-300"],
]);

const TagCard = ({
  tag,
  type,
}: {
  tag: string;
  type: "license" | "language" | "library";
}) => {
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
  tags: { license: string; languages: string[]; libraries: string[] };
}) {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-xl bg-[#1D1D1D] p-4 transition-all hover:bg-[#202020]">
      <div className="flex w-full flex-row gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-xl bg-yellow-200"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p className="p-1 text-xs font-light">{description}</p>
        </div>
      </div>
      <div className="flex w-full flex-row gap-2">
        <TagCard tag={tags.license} type="license" />
        {tags.languages.map((language) => (
          <TagCard tag={language} type="language" />
        ))}
        {tags.libraries.map((library) => (
          <TagCard tag={library} type="library" />
        ))}
      </div>
    </div>
  );
}
