import { create } from "zustand";

enum Page {
  ABOUT,
  PROJECTS,
  READING,
  CV,
  CONTACT,
}

type PageStore = {
  page: Page;
  showWarning: boolean;
};

const usePageStore = create<PageStore>(() => ({
  page: Page.ABOUT,
  showWarning: true,
}));

export { Page, usePageStore };
export type { PageStore };

