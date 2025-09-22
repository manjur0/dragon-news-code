import React, { useEffect, useState } from "react";

export const Todate = () => {
  const [today, setToday] = useState();
  const date = new Date(Date.now());
  const options = {
    weekday: "long", // Sunday
    year: "numeric", // 2025
    month: "long", // November
    day: "numeric", // 27
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  useEffect(() => {
    setToday(formattedDate);
  }, [formattedDate]);
  // setToday(formattedDate);
  // Output: Sunday, November 27, 2025

  return (
    <div>
      <p>{today}</p>
    </div>
  );
};
