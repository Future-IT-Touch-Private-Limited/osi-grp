'use client';
import { useEffect, useRef, useState } from 'react';

export default function AchievementCounter({ icon, title, target,speed }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / target), 30);

        const timer = setInterval(() => {
          start += speed;
          setCount(start);
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          }
        }, stepTime);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <div className="text-5xl mb-2">{icon}</div>
      <h2 className="text-3xl font-bold">{count}+</h2>
      <p className="text-center mt-2 text-gray-600">{title}</p>
    </div>
  );
}
