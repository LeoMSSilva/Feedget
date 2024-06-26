import { PopoverButton } from "@headlessui/react";
import { X } from "phosphor-react";

export const CloseButton = () => {
  return (
    <PopoverButton className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-all duration-500 ease-linear">
      <X
        className="w-4 h-4"
        weight="bold"
      />
    </PopoverButton>
  );
};
