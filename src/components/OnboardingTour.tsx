"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, Code, Terminal } from "lucide-react";

export default function OnboardingTour() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    const hasSeenTour = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenTour) {
      // Small delay for dramatic effect
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenOnboarding", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0D0D0D]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#1C2B3A] border border-[#F5F0E8]/10 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-[#E8630A]/10 relative overflow-hidden"
            >
              {/* Decorative Mesh */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8630A]/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFBE0B]/10 blur-[60px] rounded-full pointer-events-none" />

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#F5F0E8]/60 hover:text-[#FFBE0B] transition-colors z-10 p-2"
                aria-label="Close Tour"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E8630A]/20 flex items-center justify-center border border-[#E8630A]/30">
                    <Sparkles className="text-[#E8630A]" size={20} />
                  </div>
                  <h2 className="text-2xl font-bold text-[#F5F0E8]">Welcome to my Forge!</h2>
                </div>

                <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">
                  I'm Jezreal Momoh, an AI & Software Full-Stack Engineer. Before you explore, here are two quick ways to navigate my portfolio:
                </p>

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#0D0D0D]/50 border border-[#F5F0E8]/5">
                    <Code className="text-[#FFBE0B] shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="text-[#F5F0E8] font-bold text-sm">Explore My Work</h4>
                      <p className="text-[#F5F0E8]/60 text-xs mt-1 leading-relaxed">
                        Scroll down to view my featured projects, technical expertise, and my newsletter.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 rounded-2xl bg-[#E8630A]/10 border border-[#E8630A]/20">
                    <Terminal className="text-[#E8630A] shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="text-[#E8630A] font-bold text-sm">Meet L2E-Shield</h4>
                      <p className="text-[#F5F0E8]/80 text-xs mt-1 leading-relaxed">
                        In the bottom right corner, you can chat with my personal AI assistant. Ask it about my skills, experience, or tech stack!
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="mt-4 w-full bg-[#E8630A] hover:bg-[#FFBE0B] text-[#F5F0E8] py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Let's explore
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
