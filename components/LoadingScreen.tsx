import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Wait a bit before unmounting
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pearl text-silver-900">
      <div className="relative mb-4">
        <h1 className="text-4xl md:text-6xl font-serif italic tracking-tighter loader-text">
          Alejandro Robin
        </h1>
      </div>
      <div className="w-64 h-1 bg-silver-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-lilac-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-2 text-xs font-mono text-lilac-500">
        {Math.min(100, Math.floor(progress))}%
      </span>
    </div>
  );
};

export default LoadingScreen;