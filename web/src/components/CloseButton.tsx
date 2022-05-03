import { X } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export const CloseButton = () => {
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100 transition-all duration-500 ease-linear">
      <X
        className="w-4 h-4"
        weight="bold"
      />
    </Popover.Button>
  );
};
