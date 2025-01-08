import { useLocation } from "react-router-dom";

export default function usePath() {
  const location = useLocation();
  const pathname = location.pathname;
  const slugs = pathname.split("/").filter((slug) => slug !== "");
  if (slugs.length === 0) {
    slugs.push("landing");
  }
  return { pathname, slugs };
}
