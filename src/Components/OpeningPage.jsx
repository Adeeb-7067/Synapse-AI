import React, { useState } from 'react';

// SynapseAI Main Component
const SynapseAI = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-500/5 to-teal-500/10" />
        
        {/* Animated circles - Fixed sizing */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <div 
            className="w-96 h-96 rounded-full border border-teal-400/20"
            style={{ 
              animation: 'slowSpin 240s linear infinite'
            }}
          />
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <div 
            className="w-80 h-80 rounded-full border border-cyan-400/30"
            style={{ 
              animation: 'slowSpinReverse 180s linear infinite'
            }}
          />
        </div>
        
        {/* Circuit lines - Fixed positioning */}
        <div className="absolute top-20 left-0 w-1/2 h-px bg-cyan-400/20" />
        <div className="absolute bottom-20 right-0 w-1/2 h-px bg-cyan-400/20" />
        <div className="absolute top-40 right-0 w-1/3 h-px bg-cyan-400/20" />
        
        {/* Animated particles - Constrained movement */}
        <div 
          className="absolute top-20 left-0 h-1.5 w-1.5 rounded-full bg-cyan-400/50"
          style={{
            animation: 'moveRightConstrained 6s linear infinite'
          }}
        />
        
        <div 
          className="absolute top-40 right-0 h-1.5 w-1.5 rounded-full bg-cyan-400/50"
          style={{
            animation: 'moveLeftConstrained 7s linear infinite'
          }}
        />
        
        <div 
          className="absolute bottom-20 left-0 h-1.5 w-1.5 rounded-full bg-cyan-400/50"
          style={{
            animation: 'moveRightConstrained 5s linear infinite'
          }}
        />
        
        {/* Angled division */}
        <div 
          className="absolute inset-0 bg-slate-900/40"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0 100%)',
            opacity: 0.3
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes moveRightConstrained {
          0% { transform: translateX(0); opacity: 0.5; }
          50% { opacity: 1; }
          100% { transform: translateX(50vw); opacity: 0.5; }
        }
        
        @keyframes moveLeftConstrained {
          0% { transform: translateX(0); opacity: 0.5; }
          50% { opacity: 1; }
          100% { transform: translateX(-50vw); opacity: 0.5; }
        }
        
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slowSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </>
  );
};

// Left Section Component
const LeftSection = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8 xl:p-12 relative z-20">
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
           real-time AI response
        </p>
      </div>
      
      {/* Feature cards */}
      <FeatureCards />
     
    </div>
  );
};

// Feature Cards Component
const FeatureCards = () => {
  const features = [
    {
      title: "Instant Smart Prompts",
      description: "The Copilot offers AI-suggested questions that are relevant and contextual. Just click a suggestion to get a response—no typing required!",
      icon: "plus"
    },
    {
      title: "Language-Aware Replies",
      description: "Copilot adapts to the user's preferred language, providing localized replies based on user profile or system settings.",
      icon: "horizontal"
    },
    {
      title: " Compose & Customize Response",
      description: "Users can edit or personalize Copilot responses in the middle chat section before sending, improving accuracy and control.",
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

// Right Section Component with Flip Animation
const RightSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8 xl:p-12 relative z-20">
      <div className="w-full max-w-sm lg:max-w-md">
        <div className="relative h-auto" style={{ perspective: '1000px' }}>
          <div 
            className={`relative w-full transition-transform duration-700 ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Login Card (Front) */}
            <div 
              className={`w-full ${isFlipped ? 'invisible' : 'visible'}`}
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)'
              }}
            >
              <LoginCard onFlip={handleFlip} />
            </div>
            
            {/* Register Card (Back) */}
            <div 
              className={`absolute top-0 left-0 w-full  ${isFlipped ? 'visible' : 'invisible'}`}
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <RegisterCard onFlip={handleFlip} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Card Component
const LoginCard = ({ onFlip }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
  };

  return (
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
            QUANTUM EMAIL
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
              placeholder="Enter your Email"
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
              placeholder="Enter your Password"
            />
          </div>
        </div>
        
        {/* Remember me */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="remember"
            className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400 bg-transparent border border-cyan-400 rounded focus:ring-cyan-400 focus:ring-2"
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
          <button onClick={onFlip} className="hover:underline transition-colors">CREATE IDENTITY</button>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="pt-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
          <p className="text-center text-xs text-slate-400 mt-3">QUANTUM-SECURED CONNECTION</p>
        </div>
      </div>
    </div>
  );
};

// Register Card Component
const RegisterCard = ({ onFlip }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted');
  };

  return (
    <div className=" bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-400/20 rounded-2xl   lg:p-8 backdrop-blur-lg shadow-xl">
      {/* Form Header */}
      <div className="   text-center mb-2">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">
           REGISTER
        </h2>
        <div className="w-full h-px bg-cyan-400/30 mt-2"></div>
        
        {/* Circle decoration */}
        <div className="flex justify-center mt-4">
          <div className="relative">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-cyan-400/30"></div>
            <div className="w-8 h-8 lg:w-12 lg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 text-lg lg:text-xl">◆</div>
          </div>
        </div>
      </div>
      
      {/* Register Form */}
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
              placeholder="Create your  identifier/username"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs lg:text-sm text-cyan-400 font-medium mb-1">
            QUANTUM EMAIL
          </label>
          <div className="relative rounded-full border border-cyan-400/50 bg-slate-800/50 focus-within:border-cyan-400/80 transition-colors">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-cyan-400 flex items-center justify-center">
                <div className="w-2 lg:w-3 h-0.5 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
            <input 
              type="email"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-slate-300 placeholder-slate-500 focus:ring-0 focus:outline-none text-sm lg:text-base"
              placeholder="Enter Your Email "
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
              placeholder="Create  your password"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs lg:text-sm text-cyan-400 font-medium mb-1">
            CONFIRM ACCESS CODE
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
              placeholder="Confirm  your password"
            />
          </div>
        </div>
        
        {/* Terms checkbox */}
        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="terms"
            className="h-3 w-3 lg:h-4 lg:w-4 text-cyan-400 bg-transparent border border-cyan-400 rounded focus:ring-cyan-400 focus:ring-2 mt-0.5"
          />
          <label htmlFor="terms" className="ml-2 text-xs lg:text-sm text-slate-400">
            By Registering you accept <span className="text-cyan-400">Terms of Service</span> and <span className="text-cyan-400">Privacy Policy</span>
          </label>
        </div>
        
        {/* Register button */}
        <button 
          onClick={handleSubmit}
          className="w-full py-2.5 lg:py-3 px-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full text-slate-900 font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 active:scale-95 text-sm lg:text-base"
        >
REGISTER        </button>
        
        {/* Bottom links */}
        <div className="flex justify-center text-xs lg:text-sm text-cyan-400 mt-4">
          <button onClick={onFlip} className="hover:underline transition-colors">RETURN TO ACCESS PORTAL</button>
        </div>      
      </div>
    </div>
  );
};

export default SynapseAI;