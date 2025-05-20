import React from 'react';

// SynapseAI Main Component
const SynapseAI = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Pattern */}
      <BackgroundElements />
      
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Section - Features */}
        <LeftSection />
        
        {/* Right Section - Authentication */}
        <RightSection />
      </div>
    </div>
  );
};

// Background Elements Component
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-500/5 to-teal-500/10" />
      
      {/* Animated circles - Fixed positioning */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div 
          className="w-screen h-screen max-w-4xl max-h-4xl rounded-full border border-teal-400/20 animate-spin"
          style={{ animationDuration: '240s' }}
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div 
          className="w-3/4 h-3/4 max-w-3xl max-h-3xl rounded-full border border-cyan-400/30"
          style={{ 
            animation: 'spin 180s linear infinite reverse'
          }}
        />
      </div>
      
      {/* Circuit lines - Responsive */}
      <div className="absolute top-20 left-0 w-1/2 h-px bg-cyan-400/20" />
      <div className="absolute bottom-20 right-0 w-1/2 h-px bg-cyan-400/20" />
      <div className="absolute top-40 right-0 w-1/3 h-px bg-cyan-400/20" />
      
      {/* Animated particles - Constrained */}
      <div 
        className="absolute top-20 left-0 h-1.5 w-1.5 rounded-full bg-cyan-400/50"
        style={{
          animation: 'moveRight 6s linear infinite'
        }}
      />
      
      <div 
        className="absolute top-40 right-0 h-1.5 w-1.5 rounded-full bg-cyan-400/50"
        style={{
          animation: 'moveLeft 7s linear infinite'
        }}
      />
      
      <div 
        className="absolute bottom-20 left-0 h-1.5 w-1.5 rounded-full bg-cyan-400/50"
        style={{
          animation: 'moveRight 5s linear infinite'
        }}
      />
      
      {/* Angled division */}
      <div 
        className="absolute inset-0 bg-slate-900/40"
        style={{
          clipPath: 'polygon(0 0, 70% 0, 58% 100%, 0 100%)',
          opacity: 0.4
        }}
      />
      
      <style jsx>{`
        @keyframes moveRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(min(70vw, 700px)); }
        }
        
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(max(-70vw, -700px)); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Left Section Component
const LeftSection = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8 xl:p-12">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-wider">
          SYNAPSE<span className="text-cyan-400">AI</span>
        </h1>
        <p className="text-slate-400 text-base lg:text-lg mt-2 tracking-wide">
          Intelligent assistance redefined
        </p>
        <div className="w-48 lg:w-64 h-px bg-cyan-400/50 mt-3"></div>
      </div>
      
      {/* Value proposition */}
      <div className="mb-6 lg:mb-8">
        <p className="text-lg lg:text-xl xl:text-2xl font-light text-white">
          Experience the future of
        </p>
        <p className="text-lg lg:text-xl xl:text-2xl font-light text-white">
          intelligent assistance with
        </p>
        <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-cyan-400">
          advanced neural processing
        </p>
      </div>
      
      {/* Feature cards */}
      <FeatureCards />
      
      {/* CTA Button */}
      <button className="mt-6 lg:mt-8 px-8 lg:px-10 py-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 self-start">
        ACTIVATE
      </button>
    </div>
  );
};

// Feature Cards Component
const FeatureCards = () => {
  const features = [
    {
      title: "NEURAL NETWORKING",
      description: "Advanced pattern recognition and optimization",
      icon: "plus"
    },
    {
      title: "ADAPTIVE LEARNING",
      description: "Evolves with every interaction",
      icon: "horizontal"
    },
    {
      title: "QUANTUM PROCESSING",
      description: "Real-time analysis and response generation",
      icon: "vertical"
    }
  ];
  
  return (
    <div className="space-y-3 lg:space-y-4">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`p-3 lg:p-4 rounded-lg border border-cyan-400/30 transition-all duration-300 hover:translate-x-2 ${
            index % 2 === 0 
              ? 'bg-gradient-to-br from-cyan-400/5 to-teal-400/15' 
              : 'bg-gradient-to-br from-teal-400/5 to-cyan-400/15'
          }`}
        >
          <div className="flex items-start">
            <div className="mr-3 lg:mr-4 mt-1 flex-shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-cyan-400 flex items-center justify-center">
                {feature.icon === "plus" && (
                  <div className="text-cyan-400 font-bold text-lg lg:text-xl">+</div>
                )}
                {feature.icon === "horizontal" && (
                  <div className="w-4 lg:w-5 h-0.5 bg-cyan-400"></div>
                )}
                {feature.icon === "vertical" && (
                  <div className="w-0.5 h-4 lg:h-5 bg-cyan-400"></div>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm lg:text-base xl:text-lg font-semibold text-cyan-400 break-words">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-xs lg:text-sm xl:text-base mt-0.5 break-words">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Right Section Component
const RightSection = () => {
  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8 xl:p-12">
      <div className="w-full max-w-sm lg:max-w-md">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-400/20 rounded-2xl p-6 lg:p-8 backdrop-blur-lg shadow-xl">
          {/* Form Header */}
          <div className="text-center mb-6">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">
              ACCESS PORTAL
            </h2>
            <div className="w-full h-px bg-cyan-400/30 mt-2"></div>
            
            {/* Circle decoration */}
            <div className="flex justify-center mt-4">
              <div className="relative">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-cyan-400/30"></div>
                <div className="w-8 h-8 lg:w-12 lg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 text-lg lg:text-xl">+</div>
              </div>
            </div>
          </div>
          
          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs lg:text-sm text-cyan-400 font-medium mb-1">
                IDENTIFIER
              </label>
              <div className="relative rounded-full border border-cyan-400/50 bg-slate-800/50 focus-within:border-cyan-400/80 transition-colors">
                <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-cyan-400 flex items-center justify-center">
                    <div className="w-2 lg:w-3 h-0.5 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>
                <input 
                  type="text"
                  className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-slate-300 placeholder-slate-500 focus:ring-0 focus:outline-none text-sm lg:text-base"
                  placeholder="Enter your identifier"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs lg:text-sm text-cyan-400 font-medium mb-1">
                ACCESS CODE
              </label>
              <div className="relative rounded-full border border-cyan-400/50 bg-slate-800/50 focus-within:border-cyan-400/80 transition-colors">
                <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-cyan-400 flex items-center justify-center">
                    <div className="w-2 lg:w-3 h-0.5 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>
                <input 
                  type="password"
                  className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-slate-300 placeholder-slate-500 focus:ring-0 focus:outline-none text-sm lg:text-base"
                  placeholder="Enter your access code"
                />
              </div>
            </div>
            
            {/* Remember me */}
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember"
                className="h-3 w-3 lg:h-4 lg:w-4 border border-cyan-400 rounded bg-transparent focus:ring-0 text-cyan-400"
              />
              <label htmlFor="remember" className="ml-2 text-xs lg:text-sm text-slate-400">
                REMEMBER ACCESS CREDENTIALS
              </label>
            </div>
            
            {/* Login button */}
            <button 
              onClick={handleSubmit}
              className="w-full py-2.5 lg:py-3 px-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 active:scale-95 text-sm lg:text-base"
            >
              CONNECT
            </button>
            
            {/* Bottom links */}
            <div className="flex justify-between text-xs lg:text-sm text-cyan-400 mt-4">
              <button className="hover:underline transition-colors">RESET CREDENTIALS</button>
              <button className="hover:underline transition-colors">CREATE IDENTITY</button>
            </div>
            
            {/* Bottom decorative elements */}
            <div className="pt-4">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
              <p className="text-center text-xs text-slate-400 mt-3">QUANTUM-SECURED CONNECTION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SynapseAI;