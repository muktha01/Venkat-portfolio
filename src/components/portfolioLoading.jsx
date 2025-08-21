import { useState, useEffect } from 'react';

export default function PortfolioLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Initializing');

  const loadingSteps = [
    'Initializing',
    'Loading assets',
    'Preparing portfolio',
    'Almost ready'
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Text animation
    const textInterval = setInterval(() => {
      const step = Math.floor(progress / 25);
      if (step < loadingSteps.length) {
        setCurrentText(loadingSteps[step]);
      }
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [progress]);

  if (!isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Venkat's Portfolio</h1>
          <p className="text-xl text-gray-600">Welcome to my digital space</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Name Animation */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-tight">
            <span className="inline-block animate-bounce" style={{animationDelay: '0ms'}}>V</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '100ms'}}>E</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '200ms'}}>N</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '300ms'}}>K</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '400ms'}}>A</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '500ms'}}>T</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Modern Spinner */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <p className="text-white text-xl font-light mb-2">Loading Portfolio</p>
          <p className="text-gray-400 text-sm font-mono animate-pulse">{currentText}...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>0%</span>
            <span>{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative"
              style={{width: `${progress}%`}}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-pink-500/40 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-indigo-500/25 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-gray-600 text-sm font-mono">Crafted with passion</p>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}