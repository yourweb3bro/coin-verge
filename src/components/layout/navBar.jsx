import { useState, useRef, useEffect } from "react";
import HireDialog from "../layout/hireDialog";
import NavCta from "../ui/navCta";
import NavBtn from "../ui/navBtn";
import Logo from "../../assets/logo.svg";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const navInfo = [
    {
      title: "Featured",
      link: "#featuredCoins",
    },
    {
      title: "Why CoinVerge",
      link: "#whyChoose",
    },
    {
      title: "Services",
      link: "#weProvide",
    },
    {
      title: "Benefits",
      link: "#expandYourCrypto",
    },
    {
      title: "FAQs",
      link: "#faqs",
    },
  ]

  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => setOpen(false);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    }

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
    {/* Blur overlay */}
        {open && (
            <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-xs md:hidden"
            />
        )}
    <nav ref={navRef} className="fixed w-full z-50 bg-background/90 backdrop-blur-xs ">
      <div className="px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="CoinVerge logo" className="h-8" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          <NavBtn title={navInfo[0].title} link={navInfo[0].link} />
          <NavBtn title={navInfo[1].title} link={navInfo[1].link} />
          <NavBtn title={navInfo[2].title} link={navInfo[2].link} />
          <NavBtn title={navInfo[3].title} link={navInfo[3].link} />
          <NavBtn title={navInfo[4].title} link={navInfo[4].link} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <NavCta title="Book a call" link={() => setIsOpen(true)} />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-6 flex cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300
            ${open ? "rotate-45 top-3" : "top-1"}`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300
            ${open ? "opacity-0" : "top-3"}`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300
            ${open ? "-rotate-45 top-3" : "top-5"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-6 px-6 py-6 bg-background">
          <NavBtn title={navInfo[0].title} link={navInfo[0].link} onClick={closeMenu} />
          <NavBtn title={navInfo[1].title} link={navInfo[1].link} onClick={closeMenu} />
          <NavBtn title={navInfo[2].title} link={navInfo[2].link} onClick={closeMenu} />
          <NavBtn title={navInfo[3].title} link={navInfo[3].link} onClick={closeMenu} />
          <NavBtn title={navInfo[4].title} link={navInfo[4].link} onClick={closeMenu} />
          
          <div className="block md:hidden">
          <NavCta title="Book a call" link={() => setIsOpen(true)} />
        </div>
        </div>
      </div>
    </nav>
    <HireDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
    />
    </>
  );
}
