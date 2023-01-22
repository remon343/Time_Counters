import React, { useState } from "react";

const Countdown = () => {
  const [days, getDays] = useState(0);
  const [hours, getHours] = useState(0);
  const [minutes, getMinutes] = useState(0);
  const [seconds, getSeconds] = useState(0);

  const deadline = "April , 14, 2023";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    getDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    getHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    getMinutes(Math.floor((time / (1000 * 60)) % 60));
    getSeconds(Math.floor((time / 1000) % 60));
  };

  setInterval(getTime, 1000);

  return (
    <div className="flex flex-col gap-4  text-4xl font-bold bg-[#150050] px-4 py-8 border rounded-lg sm:text-6xl hover:bg-[#FB2576] hover:text-[#150050] hover:shadow-2xl  hover:shadow-[#FB2576] transition-shadow">
      <div className="flex justify-around gap-3">
        <div>{days}</div>
        <div>:</div>
        <div>{hours}</div>
        <div>:</div>
        <div>{minutes}</div>
        <div>:</div>
        <div>{seconds}</div>
      </div>
      <div className="flex justify-between gap-2" >
      <div>d</div>
        <div>:</div>
        <div>hr</div>
        <div>:</div>
        <div>min</div>
        <div>:</div>
        <div>sec</div>
      </div>
    </div>
  );
};

export default Countdown;
