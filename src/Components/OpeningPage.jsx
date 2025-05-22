import React, { useState } from 'react';

// SynapseAI Main Component
const SynapseAI = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-200 relative overflow-hidden">
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
        {/* Soft pattern overlay */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-100 to-indigo-50" />
        
        {/* Animated circles - Fixed sizing */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div 
            className="w-96 h-96 rounded-full border border-purple-300"
            style={{ 
              animation: 'slowSpin 240s linear infinite'
            }}
          />
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div 
            className="w-80 h-80 rounded-full border border-indigo-200"
            style={{ 
              animation: 'slowSpinReverse 180s linear infinite'
            }}
          />
        </div>
        
        {/* Circuit lines - Fixed positioning */}
        <div className="absolute top-20 left-0 w-1/2 h-px bg-purple-200" />
        <div className="absolute bottom-20 right-0 w-1/2 h-px bg-purple-200" />
        <div className="absolute top-40 right-0 w-1/3 h-px bg-purple-200" />
        
        {/* Animated particles - Constrained movement */}
        <div 
          className="absolute top-20 left-0 h-1.5 w-1.5 rounded-full bg-purple-300"
          style={{
            animation: 'moveRightConstrained 6s linear infinite'
          }}
        />
        
        <div 
          className="absolute top-40 right-0 h-1.5 w-1.5 rounded-full bg-purple-300"
          style={{
            animation: 'moveLeftConstrained 7s linear infinite'
          }}
        />
        
        <div 
          className="absolute bottom-20 left-0 h-1.5 w-1.5 rounded-full bg-purple-300"
          style={{
            animation: 'moveRightConstrained 5s linear infinite'
          }}
        />
        
        {/* Angled division */}
        <div 
          className="absolute inset-0 bg-purple-100"
          style={{
            clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0 100%)',
            opacity: 0.2
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
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

// Left Section Component
const LeftSection = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8 xl:p-12 relative z-20 transition-all duration-700 ease-in-out" 
         style={{ animation: 'fadeIn 1s ease-out' }}>
      {/* Header */}
      <div className="mb-6 lg:mb-8 transition-all duration-500 hover:translate-x-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wider">
          SYNAPSE<span className="text-purple-500">AI</span>
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mt-2 tracking-wide">
          Intelligent assistance redefined
        </p>
        <div className="w-48 lg:w-64 h-px bg-purple-300 mt-3"></div>
      </div>
      
      {/* Value proposition */}
      <div className="mb-6 lg:mb-8 transition-all duration-500 hover:translate-x-2">
        <p className="text-lg lg:text-xl xl:text-2xl font-light text-gray-700">
          Experience the future of
        </p>
        <p className="text-lg lg:text-xl xl:text-2xl font-light text-gray-700">
          intelligent assistance with
        </p>
        <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-purple-500">
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
      title: "Compose & Customize Response",
      description: "Users can edit or personalize Copilot responses in the middle chat section before sending, improving accuracy and control.",
      icon: "vertical"
    }
  ];
  
  return (
    <div className="space-y-3 lg:space-y-4">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`p-3 lg:p-4 rounded-lg border border-purple-200 transition-all duration-500 
            hover:translate-x-2 hover:shadow-md ${
            index % 2 === 0 
              ? 'bg-gradient-to-br from-purple-50 to-indigo-50' 
              : 'bg-gradient-to-br from-indigo-50 to-purple-50'
          }`}
          style={{ animation: `slideIn ${0.3 + index * 0.2}s ease-out` }}
        >
          <div className="flex items-start">
            <div className="mr-3 lg:mr-4 mt-1 flex-shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-purple-300 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                {feature.icon === "plus" && (
                  <div className="text-purple-500 font-bold text-lg lg:text-xl">+</div>
                )}
                {feature.icon === "horizontal" && (
                  <div className="w-4 lg:w-5 h-0.5 bg-purple-500"></div>
                )}
                {feature.icon === "vertical" && (
                  <div className="w-0.5 h-4 lg:h-5 bg-purple-500"></div>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm lg:text-base xl:text-lg font-semibold text-purple-600 break-words">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm xl:text-base mt-0.5 break-words">
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
            className={`relative w-full transition-transform duration-700 ease-in-out ${
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
              className={`absolute top-0 left-0 w-full ${isFlipped ? 'visible' : 'invisible'}`}
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
    <div className="bg-white border border-purple-200 rounded-2xl p-6 lg:p-8 backdrop-blur-lg shadow-lg transition-all duration-500 hover:shadow-xl"
         style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Form Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
          ACCESS PORTAL
        </h2>
        <div className="w-full h-px bg-purple-200 mt-2"></div>
        
        {/* Circle decoration */}
        <div className="flex justify-center mt-4">
          <div className="relative transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-purple-200"></div>
            <div className="w-8 h-8 lg:w-12 lg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-lg lg:text-xl">+</div>
          </div>
        </div>
      </div>
      
      {/* Login Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">
            QUANTUM EMAIL
          </label>
          <div className="relative rounded-full border border-purple-200 bg-gray-50 focus-within:border-purple-400 transition-all duration-300">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                <div className="w-2 lg:w-3 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <input 
              type="text"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none text-sm lg:text-base transition-all duration-300"
              placeholder="Enter your Email"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">
            ACCESS CODE
          </label>
          <div className="relative rounded-full border border-purple-200 bg-gray-50 focus-within:border-purple-400 transition-all duration-300">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                <div className="w-2 lg:w-3 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <input 
              type="password"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none text-sm lg:text-base transition-all duration-300"
              placeholder="Enter your Password"
            />
          </div>
        </div>
        
        {/* Remember me */}
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="remember"
            className="h-3 w-3 lg:h-4 lg:w-4 text-purple-500 bg-transparent border border-purple-300 rounded focus:ring-purple-400 focus:ring-2 transition-all duration-300"
          />
          <label htmlFor="remember" className="ml-2 text-xs lg:text-sm text-gray-500">
            REMEMBER ACCESS CREDENTIALS
          </label>
        </div>
        
        {/* Login button */}
        <button 
          onClick={handleSubmit}
          className="w-full py-2.5 lg:py-3 px-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full text-white font-semibold shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300 transition-all duration-500 hover:scale-105 active:scale-95 text-sm lg:text-base"
        >
          CONNECT
        </button>
        
        {/* Bottom links */}
        <div className="flex justify-between text-xs lg:text-sm text-purple-600 mt-4">
          <button className="hover:text-purple-800 transition-colors duration-300">RESET CREDENTIALS</button>
          <button onClick={onFlip} className="hover:text-purple-800 transition-colors duration-300">CREATE IDENTITY</button>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="pt-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
          <p className="text-center text-xs text-gray-500 mt-3">QUANTUM-SECURED CONNECTION</p>
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
    <div className="bg-white border border-purple-200 rounded-2xl p-4 lg:p-8 backdrop-blur-lg shadow-lg transition-all duration-500 hover:shadow-xl"
         style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Form Header */}
      <div className="text-center">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
           REGISTER
        </h2>
        <div className="w-full h-px bg-purple-200 mt-2"></div>
        
        {/* Circle decoration */}
        <div className="flex justify-center mt-4">
          <div className="relative transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-purple-200"></div>
            <div className="w-8 h-8 lg:w-12 lg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500 text-lg lg:text-xl">◆</div>
          </div>
        </div>
      </div>
      
      {/* Register Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">
             IDENTIFIER
          </label>
          <div className="relative rounded-full border border-purple-200 bg-gray-50 focus-within:border-purple-400 transition-all duration-300">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                <div className="w-2 lg:w-3 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <input 
              type="text"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none text-sm lg:text-base transition-all duration-300"
              placeholder="Create your Identifier/username"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">
            QUANTUM EMAIL
          </label>
          <div className="relative rounded-full border border-purple-200 bg-gray-50 focus-within:border-purple-400 transition-all duration-300">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                <div className="w-2 lg:w-3 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <input 
              type="email"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none text-sm lg:text-base transition-all duration-300"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">
            ACCESS CODE 
          </label>
          <div className="relative rounded-full border border-purple-200 bg-gray-50 focus-within:border-purple-400 transition-all duration-300">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                <div className="w-2 lg:w-3 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <input 
              type="password"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none text-sm lg:text-base transition-all duration-300"
              placeholder="Create your password"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">
            CONFIRM ACCESS CODE
          </label>
          <div className="relative rounded-full border border-purple-200 bg-gray-50 focus-within:border-purple-400 transition-all duration-300">
            <div className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border border-purple-400 flex items-center justify-center transition-all duration-300 hover:bg-purple-100">
                <div className="w-2 lg:w-3 h-0.5 bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <input 
              type="password"
              className="w-full bg-transparent border-0 py-2.5 lg:py-3 pl-10 lg:pl-12 pr-4 text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none text-sm lg:text-base transition-all duration-300"
              placeholder="Confirm your password"
            />
          </div>
        </div>
        
        {/* Terms checkbox */}
        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="terms"
            className="h-3 w-3 lg:h-4 lg:w-4 text-purple-500 bg-transparent border border-purple-300 rounded focus:ring-purple-400 focus:ring-2 mt-0.5 transition-all duration-300"
          />
          <label htmlFor="terms" className="ml-2 text-xs lg:text-sm text-gray-500">
            By Registering you accept <span className="text-purple-600">Terms of Service</span> and <span className="text-purple-600">Privacy Policy</span>
          </label>
        </div>
        
        {/* Register button */}
        <button 
          onClick={handleSubmit}
          className="w-full py-2.5 lg:py-3 px-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full text-white font-semibold shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 transition-all duration-500 hover:scale-105 active:scale-95 text-sm lg:text-base"
        >
          REGISTER
        </button>
        
        {/* Bottom links */}
        <div className="flex justify-center text-xs lg:text-sm text-purple-600 mt-4">
          <button onClick={onFlip} className="hover:text-purple-800 transition-colors duration-300">RETURN TO ACCESS PORTAL</button>
        </div>      
      </div>
    </div>
  );
};

export default SynapseAI;