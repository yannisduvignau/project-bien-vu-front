import { useState, useEffect } from "react";

type DialogueProps = {
  text: string;
  side?: "left" | "right"; // Position de la bulle
  delay?: number; // Temps avant affichage lettre par lettre
};

const BulleDeDialogue = ({ text, side = "left", delay = 10 }: DialogueProps) => {
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      let timeout: NodeJS.Timeout;
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, delay);
      }
      return () => clearTimeout(timeout);
    }, [displayedText, text, delay]);

  return (
    <div className={`flex ${side === "left" ? "justify-end" : "justify-start"} my-2 mb-10`}>
      <div
        className={`relative max-w-xs px-4 py-2 text-lg rounded-lg shadow-lg 
          ${side === "left" ? "bg-[var(--primary-color)] text-light border" : "bg-[var(--primary-color)] text-light border"}
        `}
      >
        <p className="text-light" dangerouslySetInnerHTML={{ __html: displayedText || "..." }} />
        {/* Triangle style BD */}
        <div
          className={`absolute w-4 h-4 bg-inherit rotate-45 
            ${side === "left" ? "-left-2 top-3 border-l border-b" : "-right-2 top-3 border-r border-t"}
          `}
        />
      </div>
    </div>
  );
};

export default BulleDeDialogue;
