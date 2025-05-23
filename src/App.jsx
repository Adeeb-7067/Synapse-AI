// App.jsx (in src/)
import React from 'react';
import { AuthProvider } from './Contexts/AuthContext';
// Import whichever component you want to use:
import LandingPage from './Components/LandingPage';
// import OpeningPage from './Components/OpeningPage';
import './App.css';
import OpeningPage from './Components/OpeningPage';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <OpeningPage />
        {/* or <OpeningPage /> depending on which one contains your SynapseAI code */}
      </div>
    </AuthProvider>
  );
}

export default App;