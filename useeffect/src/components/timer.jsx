import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev == end) {
          clearInterval(id);
          return "Completed";
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>Timer : {timer}</div>;
};
