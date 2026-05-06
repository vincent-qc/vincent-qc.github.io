import { motion } from "motion/react";

const CVSection = ({
  title,
  delay,
  children,
}: {
  title: string;
  delay?: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay || 0,
      }}
      className="flex flex-col gap-1"
    >
      <h1 className="border-b-2 border-neutral-300 text-lg font-semibold">
        {title}
      </h1>
      <div className="w-full pl-4">{children}</div>
    </motion.div>
  );
};

export default function CvPage() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-2 overflow-auto rounded-xl bg-[#1D1D1D] px-6 py-4 text-white transition-colors hover:bg-[#202020] hover:text-white"
      style={{
        scrollbarWidth: "none",
      }}
      href="/cv/vincent_qi_resume.pdf"
      download
    >
      <CVSection title="Education" delay={0.4}>
        <div className="flex flex-row justify-between">
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

      <CVSection title="Experience" delay={0.6}>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p>Fullstack Founding Software Engineer</p>
            <p className="text-xs">EduBeyond Education Inc.</p>
          </div>
          <div className="flex flex-col items-end">
            <p>Vancouver, BC</p>
            <p className="text-xs"> July 2022 - Jan 2025</p>
          </div>
        </div>
        <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-xs">
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

      <CVSection title="Projects" delay={0.8}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <p>EduBeyond</p>
            <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-xs">
              <li>
                Deployed globally to Indonesia’s largest telecommunications
                company with over $400M ARR.
              </li>
              <li>
                Formally endorsed by the United Nations and the Office of the
                Presidency of Indonesia as a high impact EdTech startup.
              </li>
              <li>
                Independent Software Vendor (ISV) partner with Google and
                Amazon’s Edstart portfolio.
              </li>
              <li>
                Won 1st at global Moonshot awards (1st of 1500 companies),
                finalist for Samsung’s Solve for Tomorrow
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p>Py0</p>
            <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-xs">
              <li>
                Developed an AST tree-walking interpreter for a python-like
                language using python.
              </li>
              <li>
                Engineered custom token lexer and parser to implement built-in
                syntax for <code>assert</code>, <code>requires</code>,{" "}
                <code>loop_invariant</code>, and <code>ensures</code> keywords.
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p>Blockout</p>
            <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-xs">
              <li>
                Built and published a Minecraft mod with Java and the Forge API
                that adds a multiplayer bingo minigame.
              </li>
              <li>
                Engineered a custom network manager to handle packet delivery
                and synchronization across several game clients.
              </li>
              <li>
                Utilized Gradle to compile and deploy mod across multiple
                Minecraft versions.
              </li>
            </ul>
          </div>
        </div>
      </CVSection>

      <CVSection title="Skills" delay={1}>
        <div className="flex flex-col gap-1 text-sm">
          <p>
            <b>Languages:</b> TypeScript/JavaScript, Python, Java, C++, Swift,
            C, C#, HTML/CSS
          </p>
          <p>
            <b>Frameworks:</b> React, Next, Node.js, Express, OpenAI SDK,
            TailwindUI, SwiftUI, Three.js
          </p>
          <p>
            <b>Databases:</b> PostgreSQL, MongoDB, PineconeDB, PGVector
          </p>
          <p>
            <b>Tools:</b> Git, Vercel, Docker, AWS, Gradle, Websocket
          </p>
        </div>
      </CVSection>
    </motion.a>
  );
}
