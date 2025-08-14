import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
}

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
