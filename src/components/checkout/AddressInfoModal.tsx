import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import type { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

type AddressInfoModalType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}

const AddressInfoModal = ({ isOpen, setIsOpen, children }: AddressInfoModalType) => {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <DialogBackdrop className="fixed inset-0 bg-black/30" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <DialogPanel className="relative w-full max-w-md mx-auto transform overflow-hidden bg-white rounded-lg shadow-xl transition-all">
                    <div className="p-6">
                        {children}
                    </div>
                    <div className="flex justify-end gap-4 absolute right-2 top-2">
                        <button onClick={() => setIsOpen(false)} type="button" className="cursor-pointer">
                            <FaTimes className="text-slate-700 size={25}" />
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default AddressInfoModal;
