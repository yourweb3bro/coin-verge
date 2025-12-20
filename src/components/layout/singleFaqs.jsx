import { useState } from "react";
import PlusIcon from "../../assets/plus-icon.svg";

export default function SingleFaqs({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col w-full rounded-2xl cursor-pointer p-3 pl-4 bg-white/5 hover:bg-white/10 transition-colors"
      onClick={() => setOpen(!open)}
    >
      {/* Header */}
      <div className="flex gap-2 justify-between items-center">
        <p className="flex items-center">{title}</p>

        <img
          src={PlusIcon}
          alt="expand button"
          className={`
            transition-transform duration-300
            ${open ? "-rotate-135" : "rotate-0"}
          `}
        />
      </div>

      {/* Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-40 mt-2" : "max-h-0"}
        `}
      >
        <p className="text-white/60">{description}</p>
      </div>
    </div>
  );
}
