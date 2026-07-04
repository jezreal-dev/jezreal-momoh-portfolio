"use client";

import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

export default function TimeWidget() {
  const [time, setTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Local");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial Time Set
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(timeString);
    };
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    // Fetch Location
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (response.ok) {
          const data = await response.json();
          if (data.city) {
            setLocation(data.city);
            return;
          }
        }
        throw new Error("Failed or rate limited");
      } catch (err) {
        // Fallback to browser timezone (e.g., "America/New_York" -> "New York")
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const city = tz.split("/")[1].replace("_", " ");
          setLocation(city);
        } catch (e) {
          setLocation("Local");
        }
      }
    };

    fetchLocation();

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="w-24 h-8" />; // Placeholder to prevent layout shift
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-forge-fg/10 bg-forge-card text-xs font-mono font-medium text-forge-fg/80 shadow-sm transition-all hover:border-forge-accent/30 cursor-default">
      <Globe size={14} className="text-forge-accent" />
      <span>{location} • {time}</span>
    </div>
  );
}
