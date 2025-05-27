import React, { useState, useEffect } from 'react';
import { Beaker, BookOpen, Brain, ChevronLeft, Home, Info, LogIn, LogOut, Moon, Pencil, Save, Sun, User } from 'lucide-react';
import { LoginForm } from './components/LoginForm';
import { OrganizationChart } from './components/OrganizationChart';
import { TupoksiSection } from './components/TupoksiSection';
import { CreatorInfo } from './components/CreatorInfo';
import { tupoksiData, TupoksiPosition } from './data/tupoksiData';
import bgImg from './assets/bg-org.svg';
import logo from './assets/logo-s.svg';

function GoogleFormPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
      >
        Kembali
      </button>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe1L6ns5hCl_q_ncg4pBurHsRQNjFDTLIFdJKU9tVDyJkw38A/viewform?embedded=true"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Google Form"
        className="rounded-lg shadow-lg bg-white w-full max-w-2xl"
      >
        Memuat…
      </iframe>
    </div>
  );
}

function App() {
  // App state
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage, default to false if not set
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [currentPosition, setCurrentPosition] = useState<TupoksiPosition | null>(null);
  const [chartVisible, setChartVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTupoksiData, setEditedTupoksiData] = useState<typeof tupoksiData>(tupoksiData);
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // Update document class when darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Toggle info section
  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
    if (!infoVisible) {
      setChartVisible(false);
      setCurrentPosition(null);
    }
  };

  // Show organization chart
  const showChart = () => {
    setChartVisible(true);
    setInfoVisible(false);
    setCurrentPosition(null);
  };

  // Show tupoksi details
  const showTupoksi = (positionId: TupoksiPosition) => {
    setCurrentPosition(positionId);
    setChartVisible(false);
    setInfoVisible(false);
  };

  // Hide tupoksi details and return to chart
  const hideTupoksi = () => {
    setCurrentPosition(null);
    setChartVisible(true);
    setInfoVisible(false);
  };

  // Return to home
  const goHome = () => {
    setChartVisible(false);
    setInfoVisible(false);
    setCurrentPosition(null);
    setMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle login
  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setShowLogin(false);
      return true;
    }
    return false;
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsEditMode(false);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode) {
      localStorage.setItem('tupoksiData', JSON.stringify(editedTupoksiData));
    }
  };

  // Update tupoksi content
  const updateTupoksiContent = (positionId: TupoksiPosition, newContent: string) => {
    setEditedTupoksiData(prev => ({
      ...prev,
      [positionId]: {
        ...prev[positionId],
        content: newContent
      }
    }));
  };

  // Load saved tupoksi data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('tupoksiData');
    if (savedData) {
      try {
        setEditedTupoksiData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to parse saved data:', e);
      }
    }
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      if (e.detail) showTupoksi(e.detail);
    };
    window.addEventListener('showTupoksi', handler);
    return () => window.removeEventListener('showTupoksi', handler);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900`}>
      {/* Navigation */}
      <nav className="bg-blue-600 text-white py-2 shadow-lg">
        <div className="container mx-auto flex justify-between items-center max-w-[90vw] px-4">
          <div className="flex items-center space-x-2 cursor-pointer nav-button" onClick={goHome}>
            <img src={logo} alt="Logo" className="h-8 w-8 filter invert" />
            <h1 className="text-lg font-bold">SILABA</h1>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={goHome}
              className="nav-button px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-1"
              title="Kembali ke Beranda"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button
              onClick={toggleInfo}
              className="nav-button px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-1"
            >
              <Info className="h-4 w-4" />
              <span>Info</span>
            </button>
            <button
              onClick={toggleDarkMode}
              className="nav-button px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {isLoggedIn ? (
              <>
                <button
                  onClick={toggleEditMode}
                  className={`nav-button px-4 py-2 rounded-full transition flex items-center space-x-1 ${isEditMode ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-blue-700'}`}
                >
                  {isEditMode ? <Save className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                  <span>{isEditMode ? 'Save' : 'Edit'}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="nav-button px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="nav-button px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-1"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none nav-button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden bg-blue-600 text-white px-4 py-2 ${mobileMenuOpen ? '' : 'hidden'}`}>
          <button
            onClick={goHome}
            className="mobile-menu-item block px-4 py-2 hover:bg-blue-700 rounded-full w-full text-left flex items-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </button>
          <button
            onClick={toggleInfo}
            className="mobile-menu-item block px-4 py-2 hover:bg-blue-700 rounded-full w-full text-left flex items-center space-x-2"
          >
            <Info className="h-4 w-4" />
            <span>Info</span>
          </button>
          <button
            onClick={toggleDarkMode}
            className="mobile-menu-item block px-4 py-2 hover:bg-blue-700 rounded-full w-full text-left flex items-center space-x-2"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
          {isLoggedIn ? (
            <>
              <button
                onClick={toggleEditMode}
                className={`mobile-menu-item block px-4 py-2 rounded-full w-full text-left flex items-center space-x-2 ${isEditMode ? 'bg-green-600 hover:bg-green-700' : 'hover:bg-blue-700'}`}
              >
                {isEditMode ? <Save className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                <span>{isEditMode ? 'Save' : 'Edit'}</span>
              </button>
              <button
                onClick={handleLogout}
                className="mobile-menu-item block px-4 py-2 hover:bg-blue-700 rounded-full w-full text-left flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setShowLogin(true);
                setMobileMenuOpen(false);
              }}
              className="mobile-menu-item block px-4 py-2 hover:bg-blue-700 rounded-full w-full text-left flex items-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 fade-in max-w-[90vw]">
        {showForm ? (
          <GoogleFormPage onBack={() => setShowForm(false)} />
        ) : (
          // Konten utama Anda yang lama:
          <>
            {/* Login Form */}
            {showLogin ? (
              <LoginForm onLogin={handleLogin} onCancel={() => setShowLogin(false)} />
            ) : (
              <>
                {/* Initial Section */}
                {!chartVisible && !infoVisible && currentPosition === null && (
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 fade-in">
                    {/* Left: Text */}
                    <div className="flex-1 text-center md:text-left slide-in">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800 dark:text-gray-100 mb-6">SILABA</h1>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sistem Informasi Laboratorium SMA</h2>
                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Selamat datang di aplikasi SILABA. Di sini Anda dapat melihat struktur organisasi laboratorium dan tugas pokok serta fungsi masing-masing jabatan. Seluruh informasi telah diselaraskan dengan Permendiknas No. 24 Tahun 2007.
                      </p>
                      <button
                        onClick={showChart}
                        className="bg-blue-600 text-white px-6 py-3 mt-8 rounded-full text-lg font-semibold hover:bg-blue-800 shadow-lg transition transform hover:scale-105 hover:-translate-y-1"
                      >
                        Tampilkan Struktur
                      </button>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 scale-in">
                      <div className="max-w-full w-full h-auto md:max-w-4xl md:mt-[10rem] flex justify-center">
                        <img src={bgImg} alt="Bg image" className="object-contain w-full h-auto max-h-full" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Creator Information */}
                {infoVisible && (
                  <CreatorInfo />
                )}

                {/* Organization Chart */}
                {chartVisible && (
                  <OrganizationChart onNodeClick={showTupoksi} />
                )}

                {/* Tupoksi Section */}
                {currentPosition && currentPosition !== 'login' && (
                  <TupoksiSection
                    position={currentPosition}
                    data={editedTupoksiData}
                    onBack={hideTupoksi}
                    isEditMode={isEditMode}
                    onContentUpdate={updateTupoksiContent}
                  />
                )}
              </>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4 text-center">
        <p className="text-sm sm:text-base">
          © 2025 Struktur Organisasi Laboratorium SMA | Hubungi
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="underline hover:text-blue-200 transition-colors duration-200 ml-1 bg-transparent border-none p-0 cursor-pointer"
          >
            admin
          </button> jika terdapat kesalahan data.
        </p>
      </footer>
    </div>
  );
}

export default App;