import { motion } from "motion/react";

export default function ContactCard({
  name,
  user,
  link,
  icon,
  color,
  index,
}: {
  name: string;
  user?: string;
  link?: string;
  icon: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
      onClick={() => link && window.open(link, "_blank")}
      style={{
        cursor: link ? "pointer" : "default",
      }}
      className="flex w-full flex-row gap-4 rounded-xl bg-[#1D1D1D] transition-colors hover:bg-[#202020]"
    >
      <div
        className="flex h-32 w-32 items-center justify-center rounded-bl-xl rounded-tl-xl"
        style={{
          backgroundColor: color,
        }}
      >
        <img src={icon} className="p-10" />
      </div>
      <div className="flex flex-col justify-center p-4">
        <h1 className="text-lg font-semibold sm:text-xl">{name}</h1>
        <p className="text-sm font-light sm:text-base">{user}</p>
      </div>
    </motion.div>
  );
}
