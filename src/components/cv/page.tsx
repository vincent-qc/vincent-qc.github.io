import { motion } from "motion/react";

const CVSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="border-b-2 border-neutral-300 text-base font-semibold">
        {title}
      </h1>
      <div className="w-full pl-4">{children}</div>
    </div>
  );
};

export default function CvPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-2 rounded-xl bg-[#1D1D1D] px-4 py-2 transition-colors hover:bg-[#202020]"
    >
      <CVSection title="Education">
        <div className="flex flex-row justify-between text-sm">
          <div className="flex flex-col">
            <p>Carnegie Mellon University</p>
            <p className="text-xs">BS in Computer Science</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Pittsburgh, PA</p>
            <p className="text-xs">Aug 2024 - May 2028</p>
          </div>
        </div>
      </CVSection>

      <CVSection title="Experience">
        <div className="flex flex-row justify-between text-sm">
          <div className="flex flex-col">
            <p>Fullstack Founding Software Engineer</p>
            <p className="text-xs">EduBeyond Education Inc.</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Vancouver, BC</p>
            <p className="text-xs"> July 2022 - Jan 2025</p>
          </div>
        </div>
        <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-[10px]">
          <li>
            Developed EduBeyond’s new complete fullstack Learning Management
            System software in 2 months.
          </li>
          <li>
            Engineered token lexer in TypeScript that converted and displayed
            OpenAI SDK output from XML to real-time frontend React components.
          </li>
          <li>
            Scaled API routes and PDF optical character recognition (OCR)
            pipeline to generate 100,000+ personalized real-time practice
            questions by architecting a minimal-latency AWS S3 and PineconeDB
            file storage system.
          </li>
          <li>
            Architected Retrieval Augmented Generation pipeline with the OpenAI
            SDK and developed semantic vector reranking algorithm using logit
            bias.
          </li>
          <li>
            Integrated CI/CD pipelines using GitHub, Vercel, and Fly.io to
            deploy massively scalable cloud infrastructure.
          </li>
        </ul>
      </CVSection>

      <CVSection title="Projects">
        <div className="flex flex-row justify-between text-sm">
          <div className="flex flex-col">
            <p>OpenAI GPT-3 Chatbot</p>
            <p className="text-xs">Personal Project</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Remote</p>
            <p className="text-xs">Jan 2021 - Present</p>
          </div>
        </div>
        <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-[10px]">
          <li>
            Developed a GPT-3 chatbot using OpenAI’s GPT-3 API to generate
            human-like responses to user input.
          </li>
          <li>
            Integrated chatbot with React frontend and Express backend to
            provide a seamless user experience.
          </li>
          <li>
            Implemented a custom token lexer to convert OpenAI SDK output from
            XML to real-time React components.
          </li>
        </ul>
      </CVSection>

      <CVSection title="Skills">
        <div className="flex flex-col text-xs">
          <p>
            <b>Languages:</b> A,B,C
          </p>
          <p>
            <b>Frameworks:</b> A,B,C
          </p>
          <p>
            <b>Databases:</b> A,B,C
          </p>
          <p>
            <b>Tools:</b> A,B,C
          </p>
        </div>
      </CVSection>
    </motion.div>
  );
}
