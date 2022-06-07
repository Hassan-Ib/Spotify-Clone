import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import {
  IoPlaySkipBack,
  IoPlayBack,
  IoPlaySkipForward,
  IoPlayForward,
  IoPause,
  IoShuffle,
  IoRepeat,
} from "react-icons/io5";
import "./Styles/PlayerControler.css";
const PlayerControl = () => {
  return (
    <section className="flex justify-between items-center ">
      {/* like download */}
      <div className="flex gap-4">
        <ControlButton label="like this music">
          <AiOutlineHeart />
        </ControlButton>

        <ControlButton label="download this music">
          <HiOutlineDownload />
        </ControlButton>
      </div>

      {/* prevoius forward pause/play backward next */}

      <div className="flex gap-4 items-center">
        <ControlButton label="skip back to previous music">
          <IoPlaySkipBack />
        </ControlButton>
        <ControlButton label="roll back">
          <IoPlayBack />
        </ControlButton>
        <ControlButton label="pause or play" className="play__pause__btn">
          <IoPause />
        </ControlButton>
        <ControlButton label="roll forward">
          <IoPlayForward />
        </ControlButton>
        <ControlButton label="skip forward to next music">
          <IoPlaySkipForward />
        </ControlButton>
      </div>

      {/* shuffle repeat */}

      <div className="flex gap-4">
        <ControlButton label="shuffle playlist">
          <IoShuffle />
        </ControlButton>
        <ControlButton label="repeat">
          <IoRepeat />
        </ControlButton>
      </div>
    </section>
  );
};
const ControlButton = ({ label, text, className = " ", children }) => {
  return (
    <button
      aria-label={label}
      className={`bg-gradient-to-tr from-white/0 to-black/50  bg-clip-text opacity-70 sm:text-xl md:text-3xl  ${className}`}>
      {text} {children}
    </button>
  );
};

export default PlayerControl;
