import { motion } from "motion/react";
import usePath from "../../hooks/usePath";
import AboutPage from "../about/page";
import Scene from "../scenes/scene";
import Namecard from "./namecard";
import Navbar from "./navbar";
import NotfoundPage from "./notfound";

const pages = [
  {
    path: "landing",
    component: null,
  },
  {
    path: "about",
    component: <AboutPage />,
  },
];

export default function LandingPage() {
  const { slugs } = usePath();
  const current = slugs[0];

  if (!pages.find((page) => page.path === current)) {
    return <NotfoundPage />;
  }

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-[50%]">
        <Scene />
      </div>
      <motion.div className="w-[50%] flex flex-col justify-center items-center py-16">
        <Namecard />
        <Navbar />
        {pages.find((page) => page.path === current)?.component}
      </motion.div>
    </div>
  );
}
