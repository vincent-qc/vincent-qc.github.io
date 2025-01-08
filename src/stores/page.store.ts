import { create } from "zustand";

enum Page {
  ABOUT,
  PROJECTS,
  CV,
  CONTACT,
}

type PageStore = {
  page: Page;
};

const usePageStore = create<PageStore>(() => ({
  page: Page.ABOUT,
}));

export { Page, usePageStore };
export type { PageStore };

