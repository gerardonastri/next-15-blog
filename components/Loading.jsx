"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function FancyLoading({ color = "bg-primary" }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const circleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted-foreground opacity-20"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className={color}
            strokeDasharray="283"
            strokeDashoffset="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className={`${color} animate-spin`} size={32} />
        </div>
      </div>

      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${color}`}
            variants={circleVariants}
            transition={{
              ...circleTransition,
              delay: index * 0.15,
            }}
            animate="end"
            initial="start"
          />
        ))}
      </div>

      <div className="w-64">
        <Progress value={progress} className="h-2" />
      </div>

      <p className="text-sm text-muted-foreground animate-pulse">
        Caricamento in corso...
      </p>
    </div>
  );
}
