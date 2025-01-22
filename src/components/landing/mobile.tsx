import { usePageStore } from "../../stores/page.store";

export default function MobileWarning() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 bg-red-500 p-2 text-center text-white">
      <p>This page is best viewed on Desktop</p>
      <button
        onClick={() => {
          usePageStore.setState({ showWarning: false });
        }}
        className="border-[1px] border-white px-1 text-sm font-semibold transition-colors hover:bg-white hover:text-red-500"
      >
        ok
      </button>
    </div>
  );
}
