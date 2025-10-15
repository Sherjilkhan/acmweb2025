import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target = 100, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // triggers when 50% of element is visible
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [hasAnimated]);

  const startCount = () => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = 10; // update every 10ms
    const step = (end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);
  };

  return (
    <div
      ref={counterRef}
      style={{
        fontSize: "2rem",
        textAlign: "center",
        fontWeight: "800",
        color: "white",
      }}
    >
      {count}+
    </div>
  );
};

export default Counter;
