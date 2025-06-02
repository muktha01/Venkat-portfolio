const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main watermark pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        
        {/* Repeating logo/symbol pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute transform rotate-12"
              style={{
                left: `${(i % 4) * 25 + 10}%`,
                top: `${Math.floor(i / 4) * 30 + 15}%`,
              }}
            >
              {/* Your logo/symbol - replace with your actual logo */}
              <div className="text-white/20 text-6xl font-bold transform rotate-45">
                V
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default Watermark;
