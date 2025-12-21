import { motion, AnimatePresence } from "framer-motion";

export default function HireDialog({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="fixed z-50 left-1/2 top-1/2 w-[90%] max-w-xl
                       -translate-x-1/2 -translate-y-1/2
                       rounded-3xl bg-background border border-white/10
                       p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 cursor-pointer rounded-lg border border-white/0 hover:border hover:border-white/5 hover:bg-white/2 p-2 leading-3.5 text-white/60 hover:text-white transition"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <p className="uppercase font-medium text-center pb-6 text-primary/80">
                  Contact The Team
                </p>
            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6 text-center">
              
              {/* Developer */}
              <div className="flex flex-col gap-2 items-center">
                <p className="text-xs uppercase tracking-wide text-white/50">
                  Frontend Developer
                </p>
                <p className="text-xl font-semibold">
                  Idris @yourweb3bro
                </p>
                <p className="text-white/70 leading-relaxed">
                  Your can reach out lets discuss about your project.
                </p>

                <a
                  href="https://x.com/YourWeb3Bro/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                             rounded-full bg-primary px-6 py-3 w-fit
                             text-black font-medium
                             hover:bg-primary/90 transition-colors"
                >
                  Contact Ui Developer
                </a>
              </div>

              {/* Divider */}
              <div className="h-px md:h-auto md:w-px bg-white/10" />

              {/* UI/UX – speaking to visitor */}
              <div className="flex flex-col gap-2 items-center">
                <p className="text-xs uppercase tracking-wide text-white/50">
                  UI/UX Designer
                </p>
                <p className="text-xl font-semibold">
                  John Olamideh
                </p>
                <p className="text-white/70 leading-relaxed">
                  Your can reach out lets discuss about your project.
                </p>

                <a
                  href="https://x.com/JohnOlamideh/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                             rounded-full bg-primary px-6 py-3 w-fit
                             text-black font-medium
                             hover:bg-primary/90 transition-colors"
                >
                  Contact Ux Designer
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
