import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export const Widget = () => {
  return (
    <Popover className="absolute bottom-4 right-5 flex flex-col items-end">
      <PopoverPanel>
        <WidgetForm />
      </PopoverPanel>
      <PopoverButton className="bg-brand-500 hover:bg-brand-400 transition-all duration-500 ease-linear text-white rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-5 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          Feedback
        </span>
      </PopoverButton>
    </Popover>
  );
};
