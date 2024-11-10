import { useModal } from "../store/modal/hooks";
import { removeModal } from "../store/modal/actions";
import modals from "../routes/modal";

export default function Modal() {
  const modal = useModal();
  const CurrentModal = modals.find((m) => m.name === modal.name);

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
      <div className="bg-slate-700 max-w-[600px] max-h-[90vh] overflow-auto rounded-2xl">
        {CurrentModal && <CurrentModal.element close={removeModal} />}
      </div>
    </div>
  );
}
