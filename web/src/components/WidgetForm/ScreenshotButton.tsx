import { Camera } from 'phosphor-react';

export const ScreenshotButton = () => {
  return (
    <button
      className="p-2 rounded-md border-transparent bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 ease-linear"
      type="button"
    >
      <Camera className="w-6 h-6" />
    </button>
  );
};
