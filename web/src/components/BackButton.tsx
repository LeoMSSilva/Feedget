import { ArrowLeft } from "phosphor-react";

export interface IBackButton {
  goBack: () => void;
}

export const BackButton = ({ goBack }: IBackButton) => {
  return (
    <button
      className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 transition-all duration-500 ease-linear"
      onClick={() => goBack()}
      type="button"
    >
      <ArrowLeft
        className="w-4 h-4"
        weight="bold"
      />
    </button>
  );
};
