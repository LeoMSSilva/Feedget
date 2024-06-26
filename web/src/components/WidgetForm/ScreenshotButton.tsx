import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingButton } from "../LoadingButton";

interface IScreenshotButton {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  onScreenshotTook,
}: IScreenshotButton) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  const handleScreenshot = async () => {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        className="p-1 w-10 h-10 flex justify-end items-end rounded-md border-transparent text-zinc-400 hover:text-zinc-100  transition-colors duration-500 ease-linear"
        type="button"
        onClick={() => {
          onScreenshotTook(null);
        }}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="p-2 rounded-md border-transparent bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 ease-linear"
      onClick={handleScreenshot}
      type="button"
    >
      {isTakingScreenshot ? <LoadingButton /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
