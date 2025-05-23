import React, { useState } from 'react';
import LandingPage from './LandingPage'; 
import { useAuth } from '../Contexts/AuthContext'; 

const OpeningPage = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
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
  }

  return (
    <>
    <LandingPage /> 
    </>
  );
};

// Background Elements Component
const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-100 to-indigo-50" />
      
      {/* Animated circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="w-96 h-96 rounded-full border border-purple-300 animate-spin" 
             style={{ animationDuration: '240s' }} />
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="w-80 h-80 rounded-full border border-indigo-200 animate-spin" 
             style={{ animationDuration: '180s', animationDirection: 'reverse' }} />
      </div>
      
      {/* Circuit lines */}
      <div className="absolute top-20 left-0 w-1/2 h-px bg-purple-200" />
      <div className="absolute bottom-20 right-0 w-1/2 h-px bg-purple-200" />
      <div className="absolute top-40 right-0 w-1/3 h-px bg-purple-200" />
      
      {/* Animated particles */}
      <div className="absolute top-20 left-0 h-1.5 w-1.5 rounded-full bg-purple-300 animate-pulse" />
      <div className="absolute top-40 right-0 h-1.5 w-1.5 rounded-full bg-purple-300 animate-pulse" />
      <div className="absolute bottom-20 left-0 h-1.5 w-1.5 rounded-full bg-purple-300 animate-pulse" />
      
      {/* Angled division */}
      <div className="absolute inset-0 bg-purple-100" 
           style={{ clipPath: 'polygon(0 0, 60% 0, 50% 100%, 0 100%)', opacity: 0.2 }} />
    </div>
  );
};

// Left Section Component
const LeftSection = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8 xl:p-12 relative z-20">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wider">
          SYNAPSE<span className="text-purple-500">AI</span>
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mt-2">Intelligent assistance redefined</p>
        <div className="w-48 lg:w-64 h-px bg-purple-300 mt-3"></div>
      </div>
      
      <div className="mb-6 lg:mb-8">
        <p className="text-lg lg:text-xl xl:text-2xl font-light text-gray-700">Experience the future of</p>
        <p className="text-lg lg:text-xl xl:text-2xl font-light text-gray-700">intelligent assistance with</p>
        <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-purple-500">real-time AI response</p>
      </div>
      
      <FeatureCards />
    </div>
  );
};

// Feature Cards Component  
const FeatureCards = () => {
  const features = [
    {
      title: "Instant Smart Prompts",
      description: "The Copilot offers AI-suggested questions that are relevant and contextual.",
      icon: "plus"
    },
    {
      title: "Language-Aware Replies", 
      description: "Copilot adapts to the user's preferred language, providing localized replies.",
      icon: "horizontal"
    },
    {
      title: "Compose & Customize Response",
      description: "Users can edit or personalize Copilot responses before sending.",
      icon: "vertical"
    }
  ];
  
  return (
    <div className="space-y-3 lg:space-y-4">
      {features.map((feature, index) => (
        <div key={index} className={`p-3 lg:p-4 rounded-lg border border-purple-200 transition-all duration-500 hover:translate-x-2 hover:shadow-md ${
          index % 2 === 0 ? 'bg-gradient-to-br from-purple-50 to-indigo-50' : 'bg-gradient-to-br from-indigo-50 to-purple-50'
        }`}>
          <div className="flex items-start">
            <div className="mr-3 lg:mr-4 mt-1 flex-shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-purple-300 flex items-center justify-center">
                {feature.icon === "plus" && <div className="text-purple-500 font-bold text-lg lg:text-xl">+</div>}
                {feature.icon === "horizontal" && <div className="w-4 lg:w-5 h-0.5 bg-purple-500"></div>}
                {feature.icon === "vertical" && <div className="w-0.5 h-4 lg:h-5 bg-purple-500"></div>}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm lg:text-base xl:text-lg font-semibold text-purple-600">{feature.title}</h3>
              <p className="text-gray-600 text-xs lg:text-sm xl:text-base mt-0.5">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Right Section with Auth Forms
const RightSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8 xl:p-12 relative z-20">
      <div className="w-full max-w-sm lg:max-w-md">
        <div className="relative h-auto" style={{ perspective: '1000px' }}>
          <div className="relative w-full transition-transform duration-700 ease-in-out"
               style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            
            {/* Login Card */}
            <div className={`w-full ${isFlipped ? 'invisible' : 'visible'}`} 
                 style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
              <LoginCard onFlip={() => setIsFlipped(!isFlipped)} />
            </div>
            
            {/* Register Card */}
            <div className={`absolute top-0 left-0 w-full ${isFlipped ? 'visible' : 'invisible'}`}
                 style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
              <RegisterCard onFlip={() => setIsFlipped(!isFlipped)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Card Component
const LoginCard = ({ onFlip }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, resetPassword, error, setError, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email address first');
      return;
    }
    try {
      await resetPassword(email);
      alert('Password reset email sent!');
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div className="bg-white border border-purple-200 rounded-2xl p-6 lg:p-8 shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">ACCESS PORTAL</h2>
        <div className="w-full h-px bg-purple-200 mt-2"></div>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">EMAIL</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2.5 lg:py-3 px-4 border border-purple-200 rounded-full bg-gray-50 focus:border-purple-400 focus:outline-none"
            placeholder="Enter your Email"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">PASSWORD</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2.5 lg:py-3 px-4 border border-purple-200 rounded-full bg-gray-50 focus:border-purple-400 focus:outline-none"
            placeholder="Enter your Password"
            required
          />
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="w-full py-2.5 lg:py-3 px-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'CONNECTING...' : 'CONNECT'}
        </button>
        
        <div className="flex justify-between text-xs lg:text-sm text-purple-600 mt-4">
          <button type="button" onClick={handleResetPassword} className="hover:text-purple-800">
            RESET PASSWORD
          </button>
          <button type="button" onClick={onFlip} className="hover:text-purple-800">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  );
};

// Register Card Component
const RegisterCard = ({ onFlip }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { register, error, setError, loading } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await register(formData.email, formData.password, formData.username);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="bg-white border border-purple-200 rounded-2xl p-6 lg:p-8 shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">REGISTER</h2>
        <div className="w-full h-px bg-purple-200 mt-2"></div>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">USERNAME</label>
          <input 
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full py-2.5 lg:py-3 px-4 border border-purple-200 rounded-full bg-gray-50 focus:border-purple-400 focus:outline-none"
            placeholder="Create username"
            required
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">EMAIL</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2.5 lg:py-3 px-4 border border-purple-200 rounded-full bg-gray-50 focus:border-purple-400 focus:outline-none"
            placeholder="Enter email"
            required
          />
        </div>
        
        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">PASSWORD</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full py-2.5 lg:py-3 px-4 border border-purple-200 rounded-full bg-gray-50 focus:border-purple-400 focus:outline-none"
            placeholder="Create password"
            required
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm text-purple-600 font-medium mb-1">CONFIRM PASSWORD</label>
          <input 
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full py-2.5 lg:py-3 px-4 border border-purple-200 rounded-full bg-gray-50 focus:border-purple-400 focus:outline-none"
            placeholder="Confirm password"
            required
          />
        </div>
        
        <button 
          type="submit"
          disabled={loading}
          className="w-full py-2.5 lg:py-3 px-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? 'REGISTERING...' : 'REGISTER'}
        </button>
        
        <div className="flex justify-center text-xs lg:text-sm text-purple-600 mt-4">
          <button type="button" onClick={onFlip} className="hover:text-purple-800">
            BACK TO LOGIN
          </button>
        </div>      
      </form>
    </div>
  );
};

export default OpeningPage;