"use client";

import { useEffect, useState } from "react";

const CopyrightSection = () => {
  const [temp, setTemp] = useState(null);
  const [time, setTime] = useState("");
  const [currentHour, setCurrentHour] = useState(new Date().getHours());

  // ✅ Update hour every minute (so when hour changes, useEffect refires)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60 * 1000); // check every 1 minute
    return () => clearInterval(interval);
  }, []);

  // ✅ Fetch weather whenever `currentHour` changes
  useEffect(() => {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dhaka?unitGroup=metric&key=4AJ6J7W3DJXDTSCP45ZTXDYYP&contentType=json",
    )
      .then((response) => response.json())
      .then((data) => {
        setTemp(data?.currentConditions?.temp);
      })
      .catch((err) => console.error("Weather API error:", err));
  }, [currentHour]);

  // ✅ Update time every minutes
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[100px] w-full items-start justify-between px-4 py-[16px] text-[14px] text-[#757575] select-none md:px-10 md:py-[40px] lg:px-[60px] lg:py-[50px] lg:text-[15px] xl:px-16 xl:text-[16px]">
      <h5>Adon ©2025</h5>
      <div className="flex items-center gap-2">
        <span>Dhaka</span>
        <span>{temp ? `${temp}°C` : "32°C"}</span>
        <span>{time || "10:10 AM"}</span>
      </div>
    </div>
  );
};

export default CopyrightSection;
