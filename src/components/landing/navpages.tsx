import { Page } from "../../stores/page.store";
import AboutPage from "../about/page";
import CvPage from "../cv/page";
import ProjectPage from "../projects/page";

const pages = [
  {
    page: Page.ABOUT,
    component: <AboutPage />,
  },
  {
    page: Page.PROJECTS,
    component: <ProjectPage />,
  },
  {
    page: Page.READING,
    component: <div>Reading</div>,
  },
  {
    page: Page.CV,
    component: <CvPage />,
  },
  {
    page: Page.CONTACT,
    component: <div>Contact</div>,
  },
];

export { pages };
