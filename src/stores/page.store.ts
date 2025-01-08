import { create } from "zustand";

enum Page {
  ABOUT,
  PROJECTS,
  CV,
  CONTACT,
}

type PageStore = {
  page: Page;
  setPage: (page: Page) => void;
};

const usePageStore = create<PageStore>((set) => ({
  page: Page.ABOUT,
  setPage: (page: Page) => set({ page }),
}));

export { Page, usePageStore };
export type { PageStore };

