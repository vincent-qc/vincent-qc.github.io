import { motion } from "motion/react";
import { useEffect, useState } from "react";
import AboutPage from "../about/page";
import Scene from "../scenes/scene";
import Namecard from "./namecard";
import Navbar from "./navbar";

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
  const [page, setPage] = useState("landing");

  useEffect(() => {
    setTimeout(() => {
      setPage("about");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-[50%]">
        <Scene />
      </div>
      <motion.div className="w-[50%] flex flex-col justify-center items-center py-16">
        <Namecard />
        <Navbar setPage={setPage} />
        {pages.find((item) => item.path === page)?.component}
      </motion.div>
    </div>
  );
}
