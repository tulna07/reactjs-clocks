import getSegments from "../../utils/getSegments";

// Styles
import "./styles.css";

export default function DigitalClock({ time }) {
  const { hours, minutes, seconds } = time;

  return (
    <ClockFrame>
      <Digits value={hours} />
      <Divider />
      <Digits value={minutes} />
      <Divider />
      <Digits value={seconds} />
    </ClockFrame>
  );
}

// Related components ================================================================

function ClockFrame({ children }) {
  return <div className="digital-clock">{children}</div>;
}

function Divider() {
  return (
    <div className="digital-clock__divider">
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

function Digits({ value }) {
  return (
    <div className="digital-clock__digits">
      <Digit value={Math.floor(value / 10)} />
      <Digit value={value % 10} />
    </div>
  );
}

function Digit({ value }) {
  const segments = getSegments(value);

  return (
    <div className="digital-clock__digit">
      {segments.map((segment, idx) => (
        <Segment key={idx} label={segment.label} active={segment.active} />
      ))}
    </div>
  );
}

function Segment({ label, active }) {
  const className = [`digital-clock__segment`, label, active && "active"]
    .filter(Boolean)
    .join(" ");

  return <div className={className}></div>;
}
