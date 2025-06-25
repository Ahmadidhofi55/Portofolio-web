import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  commands: string[];
  typingSpeed?: number;
  waitBetweenLines?: number;
  prompt?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  commands,
  typingSpeed = 50,
  waitBetweenLines = 1000,
  prompt = '> '
}) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Type the current command
  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsTyping(false);
      return;
    }

    const command = commands[currentCommandIndex];
    if (currentLine.length < command.length && isTyping) {
      const timeout = setTimeout(() => {
        setCurrentLine(command.substring(0, currentLine.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (currentLine.length === command.length) {
      const timeout = setTimeout(() => {
        setLines([...lines, prompt + currentLine]);
        setCurrentLine('');
        setCurrentCommandIndex(currentCommandIndex + 1);
      }, waitBetweenLines);
      return () => clearTimeout(timeout);
    }
  }, [commands, currentCommandIndex, currentLine, isTyping, lines, prompt, typingSpeed, waitBetweenLines]);

  // Auto-scroll to the bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  // Restart animation when it completes
  useEffect(() => {
    if (!isTyping && currentCommandIndex >= commands.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLine('');
        setCurrentCommandIndex(0);
        setIsTyping(true);
      }, 5000); // 5 seconds pause before restarting
      return () => clearTimeout(timeout);
    }
  }, [isTyping, currentCommandIndex, commands.length]);

  return (
    <div className="w-full h-full bg-[#1c2331] rounded-lg shadow-2xl overflow-hidden border border-gray-700">
      <div className="h-8 w-full bg-[#0d1117] flex items-center px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-xs mx-auto">
          portfolio ~ terminal
        </div>
      </div>
      <div 
        ref={terminalRef}
        className="p-4 font-mono text-sm text-green-400 h-[calc(100%-2rem)] overflow-auto"
      >
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            {line}
          </div>
        ))}
        {currentLine && (
          <div className="whitespace-pre-wrap break-words flex">
            <span>{prompt}</span>
            <span>{currentLine}</span>
            <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;