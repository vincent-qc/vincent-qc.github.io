import { motion } from "motion/react";

const contacts = [
  {
    name: "GitHub",
    user: "vincent-qc",
    link: "https://github.com/vincent-qc",
    icon: "/icons/discord.svg",
    color: "#1A1919",
  },
  {
    name: "Email",
    user: "vincent.qi.2006@gmail.com",
    link: "mailto:vincent.qi.2006@gmail.com",
    icon: "/icons/email.svg",
    color: "#FFD700",
  },
  {
    name: "LinkedIn",
    user: "Vincent Qi",
    link: "https://www.linkedin.com/in/vincent-qi-777571250/",
    icon: "/icons/linkedin.svg",
    color: "#0077B5",
  },
  {
    name: "Discord",
    user: "vincor_",
    icon: "/icons/discord.svg",
    color: "#5865F2",
  },
];

const ContactCard = ({
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
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
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
        <img src={icon} />
      </div>
      <div className="flex flex-col justify-center p-4">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="font-light">{user}</p>
      </div>
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-4">
      <div className="flex flex-col gap-4">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} index={index} />
        ))}
      </div>
    </div>
  );
}
