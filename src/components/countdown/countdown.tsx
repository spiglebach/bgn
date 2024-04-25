'use client'

import {useEffect, useState} from "react";

interface CountdownProps {
  targetTime: Date,
  numberPanelLabels: {
    days: string,
    hours: string,
    minutes: string
  }
}

export default function Countdown({targetTime, numberPanelLabels: {days, hours, minutes}}: CountdownProps) {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const startTimeDiffInMillis = Math.abs(time - targetTime.getTime())
  const startTimeDiffInMinutes = Math.ceil(startTimeDiffInMillis / (1000 * 60))

  const startTimeDayDifference = Math.floor(startTimeDiffInMinutes / (60 * 24))
  const startTimeHourDifference = Math.floor((startTimeDiffInMinutes - (startTimeDayDifference * (60 * 24))) / 60)
  const startTimeMinuteDifference = Math.floor(startTimeDiffInMinutes - (startTimeDayDifference * (60 * 24)) - (startTimeHourDifference * 60))

  return (
    <div className="flex items-center my-5">
      <NumberDisplay number={startTimeDayDifference} numberLabel={days} />
      <NumberSeparator />
      <NumberDisplay number={startTimeHourDifference} numberLabel={hours} />
      <NumberSeparator />
      <NumberDisplay number={startTimeMinuteDifference} numberLabel={minutes} />
    </div>
  )
}


interface NumberDisplayProps {
  number: number
  numberLabel: string
}

function NumberDisplay({number, numberLabel}: NumberDisplayProps) {
  let displayedNumber: string
  if (number < 10) {
    displayedNumber = `0${number}`
  } else {
    displayedNumber = number.toString()
  }
  return (
    <div className="text-center">
      <div className="flex text-white text-6xl font-bold bg-gray-600 h-[4em] w-[3em] rounded-2xl">
        <div className="m-auto">{displayedNumber}</div>
      </div>
      <p className="text-3xl uppercase mt-3">{numberLabel}</p>
    </div>
  )
}

const NumberSeparator = () => {
  return (
    <div className="text-6xl pb-8">:</div>
  )
}
