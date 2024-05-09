import { useState, useEffect } from "react";

type TypeWriterProps = {
  words: string[];
  delay: number;
};

const useTypewriter = ({ words, delay }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true); // Added state for cursor

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const currentWordLength = currentWord.length;

    const typeOrDelete = () => {
      if (!isDeleting) {
        // Typing logic
        if (currentIndex < currentWordLength) {
          setCurrentText((prevText) => prevText + currentWord[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          // Start deleting after typing
          setShowCursor(false);
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          setCurrentIndex(currentWordLength);
        }
      } else {
        // Deleting logic
        setShowCursor(true);
        if (currentIndex > 0) {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          // Move to the next word
          setIsDeleting(false);
          setCurrentWordIndex((prevWordIndex) => (prevWordIndex === 0 ? 1 : 0));
        }
      }
    };

    const timeout = setTimeout(typeOrDelete, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, delay, isDeleting, words, currentWordIndex]);

  // Append cursor to currentText
  const textWithCursor = currentText + (showCursor ? "|" : "");

  return textWithCursor;
};

export default useTypewriter;
