export default function AboutPage() {
  return (
    <section className="w-full h-full bg-white flex flex-row justify-end p-32">
      <div className="w-[40%] flex flex-col gap-4">
        <p className="text-[48px] leading-none">Vincent's Portfolio</p>
        <p className="ml-2 text-[18px]">
          Hi, I'm Vincent Qi, a current students at Carnegie Mellon University.
          <br />
          <br />
          I'm currently a Member of Technical Staff Intern @ <b>OpenAI</b>,
          where I work on the model integrity team. Previously, I also worked at{" "}
          <b>Mercor</b>, where I developed RL environments & pipelines, and
          founded <b>EduBeyond</b>, ann AI EdTech company.
        </p>
      </div>
    </section>
  );
}
