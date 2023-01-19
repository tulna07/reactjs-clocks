import React from "react";
import range from "../../utils/range";
import "./styles.css";

const CIRCLE_DEGREES = 360;

export default function AnalogClock({ time }) {
  return (
    <ClockFrame>
      <HourHand hours={time.hours} minutes={time.minutes} />
      <MinuteHand minutes={time.minutes} />
      <SecondHand seconds={time.seconds} />
    </ClockFrame>
  );
}

// Related components ================================================================

function ClockFrame({ children }) {
  const numbers = range(1, 12).map(number => {
    return <Number key={number} value={number} />;
  });

  return (
    <div className="analog-clock">
      {numbers}
      {children}
    </div>
  );
}

function Number({ value }) {
  return (
    <div
      className="analog-clock__number"
      style={{ rotate: `${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}
    >
      <span
        style={{ rotate: `-${(CIRCLE_DEGREES / 12) * (value - 1) + 210}deg` }}
      >
        {value}
      </span>
    </div>
  );
}

function HourHand({ hours, minutes }) {
  const deg = (CIRCLE_DEGREES / 12) * hours + 180 + (minutes / 60) * 30;

  return (
    <div
      className="analog-clock__hand analog-clock__hour-hand"
      style={{
        rotate: `${deg}deg`,
      }}
    ></div>
  );
}

function MinuteHand({ minutes }) {
  const deg = (CIRCLE_DEGREES / 60) * minutes + 180;

  return (
    <div
      className="analog-clock__hand analog-clock__minute-hand"
      style={{ rotate: `${deg}deg` }}
    ></div>
  );
}

function SecondHand({ seconds }) {
  const deg = (CIRCLE_DEGREES / 60) * seconds + 180;

  return (
    <div
      className="analog-clock__hand analog-clock__second-hand"
      style={{ rotate: `${deg}deg` }}
    ></div>
  );
}
