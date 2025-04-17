import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChevronDown, GamepadIcon, CheckCircle2, XCircle, Languages, Sun, Moon, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { games } from './data/games';
import { PolicyPage } from './components/PolicyPage';
import { giftCardUrls } from './data/urls';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './i18n';

const LanguageSelector = ({ languages, currentLanguage, onLanguageChange, isDarkMode }) => (
  <div className="relative">
    <button
      className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-sm'
      }`}
      onClick={() => onLanguageChange(prev => !prev)}
    >
      <Languages size={20} />
      <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
    </button>
  </div>
);

const GameSearch = ({ searchTerm, onSearchChange, isOpen, onDropdownToggle, filteredGames, onGameSelect, isDarkMode, t, isRTL, currentLanguage }) => (
  <div className="mb-6 relative">
    <div 
      className={`flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer ${
        isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}
      onClick={() => onDropdownToggle(true)}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Search size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
      <input
        type="text"
        placeholder={t('errors.searchGames')}
        className={`w-full bg-transparent border-none focus:outline-none ${
          isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'
        }`}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onClick={(e) => {
          e.stopPropagation();
          onDropdownToggle(true);
        }}
        dir={isRTL ? 'rtl' : 'ltr'}
      />
      <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </div>
    {isOpen && (
      <div 
        className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg max-h-96 overflow-y-auto ${
          isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {filteredGames.map((game) => (
          <button
            key={game.id}
            className={`w-full px-4 py-3 text-${isRTL ? 'right' : 'left'} border-b last:border-b-0 ${
              isDarkMode 
                ? 'border-gray-600 hover:bg-gray-600' 
                : 'border-gray-100 hover:bg-purple-50'
            } transition-colors`}
            onClick={() => {
              onGameSelect(game);
              onDropdownToggle(false);
            }}
          >
            <div className="font-medium">{game.translations?.[currentLanguage]?.name || game.name}</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {(game.translations?.[currentLanguage]?.description || game.description).slice(0, 100)}...
            </div>
          </button>
        ))}
        {filteredGames.length === 0 && (
          <div className={`px-4 py-3 text-center ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {t('errors.noGamesFound')}
          </div>
        )}
      </div>
    )}
  </div>
);

const Footer = ({ isDarkMode, t, isRTL }) => (
  <footer className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} dir={isRTL ? 'rtl' : 'ltr'}>
    <div className="container mx-auto px-4">
      <div className="text-center space-y-4">
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {t('footer.companyName')}
        </p>
        <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          {t('footer.disclaimer')}
        </p>
        <nav className="flex justify-center items-center gap-8 py-4">
          <Link
            to="/privacy"
            className={`text-sm transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('footer.links.privacy')}
          </Link>
          <Link
            to="/terms"
            className={`text-sm transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('footer.links.terms')}
          </Link>
          <Link
            to="/refund"
            className={`text-sm transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t('footer.links.refund')}
          </Link>
        </nav>
      </div>
    </div>
  </footer>
);

const PurchaseCard = ({ isDarkMode, t, currentGiftCardUrl, isRTL }) => (
  <div 
    className={`mt-8 p-6 rounded-lg text-center space-y-4 ${
      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
    }`}
    dir={isRTL ? 'rtl' : 'ltr'}
  >
    <h3 className={`text-xl font-semibold ${
      isDarkMode ? 'text-gray-200' : 'text-gray-800'
    }`}>
      {t('purchaseCard.title')}
    </h3>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      {t('purchaseCard.description')}
    </p>
    <div className="flex justify-center">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yNy41IDEyLjVMMTUgMjBMMjcuNSAyNy41VjEyLjVaIiBmaWxsPSIjRkY2QjAwIi8+PHBhdGggZD0iTTQyLjUgMTVWMjVINDcuNUM0OS41IDI1IDUxIDIzLjUgNTEgMjEuNVYxOC41QzUxIDE2LjUgNDkuNSAxNSA0Ny41IDE1SDQyLjVaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTU3LjUgMTVWMjVINjIuNUM2NC41IDI1IDY2IDIzLjUgNjYgMjEuNVYxOC41QzY2IDE2LjUgNjQuNSAxNSA2Mi41IDE1SDU3LjVaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcyLjUgMTVWMjVIODIuNUM4NC41IDI1IDg2IDIzLjUgODYgMjEuNVYxOC41Qzg2IDE2LjUgODQuNSAxNSA4Mi41IDE1SDcyLjVaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTkyLjUgMTVWMjVIOTcuNUM5OS41IDI1IDEwMSAyMy41IDEwMSAyMS41VjE4LjVDMTAxIDE2LjUgOTkuNSAxNSA5Ny41IDE1SDkyLjVaIiBmaWxsPSIjRkZGRkZGIi8+PC9zdmc+"
        alt="Ar-pay Logo"
        className="h-10"
      />
    </div>
    <a
      href={currentGiftCardUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 rounded-lg text-white transition-colors ${
        isDarkMode 
          ? 'bg-purple-600 hover:bg-purple-700' 
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {t('purchaseCard.button')}
    </a>
  </div>
);

function App() {
  const { t, i18n } = useTranslation();
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [tiktokUsername, setTiktokUsername] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [paymentAmount] = useState(100);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [errors, setErrors] = useState({
    serialNumber: '',
    cvv: '',
    tiktokUsername: ''
  });

  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ru', name: 'Русский' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
    { code: 'vi', name: 'Tiếng Việt' }
  ];

  const isRTL = i18n.language === 'ar';
  const currentGiftCardUrl = giftCardUrls[i18n.language] || giftCardUrls.en;

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('rtl', isRTL);
  }, [isRTL, isDarkMode]);

  const filteredGames = useMemo(() => {
    if (!searchTerm) return games;
    
    const searchLower = searchTerm.toLowerCase();
    return games.filter(game => {
      const currentTranslation = game.translations?.[i18n.language];
      const name = (currentTranslation?.name || game.name).toLowerCase();
      const description = (currentTranslation?.description || game.description).toLowerCase();
      
      return name.includes(searchLower) || description.includes(searchLower);
    });
  }, [searchTerm, games, i18n.language]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
    setPaymentStatus('idle');
    setErrors({
      serialNumber: '',
      cvv: '',
      tiktokUsername: ''
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PolicyPage type="privacy" />} />
        <Route path="/terms" element={<PolicyPage type="terms" />} />
        <Route path="/refund" element={<PolicyPage type="refund" />} />
        <Route path="/" element={
          <div 
            className={`min-h-screen transition-colors duration-200 ${
              isDarkMode 
                ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
                : 'bg-gradient-to-b from-purple-50 to-blue-100'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="container mx-auto px-4 py-8">
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex gap-4 z-50`}>
                <button
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-white text-gray-800 shadow-sm'
                  }`}
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="relative">
                  <button
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                      isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow-sm'
                    }`}
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  >
                    <Languages size={20} />
                    <span>{languages.find(lang => lang.code === i18n.language)?.name}</span>
                  </button>
                  {isLangDropdownOpen && (
                    <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 rounded-lg shadow-lg ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className={`w-full px-4 py-2 text-${isRTL ? 'right' : 'left'} ${
                            isDarkMode 
                              ? 'hover:bg-gray-700' 
                              : 'hover:bg-purple-50'
                          } transition-colors`}
                          onClick={() => handleLanguageChange(lang.code)}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center mb-12">
                <h1 className={`text-5xl font-bold flex items-center justify-center gap-3 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  <GamepadIcon size={48} />
                  {t('title')}
                </h1>
              </div>

              <div className={`max-w-4xl mx-auto rounded-xl shadow-lg p-6 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <GameSearch 
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  isOpen={isDropdownOpen}
                  onDropdownToggle={setIsDropdownOpen}
                  filteredGames={filteredGames}
                  onGameSelect={setSelectedGame}
                  isDarkMode={isDarkMode}
                  t={t}
                  isRTL={isRTL}
                  currentLanguage={i18n.language}
                />

                <div className="mb-8">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="rounded-lg overflow-hidden aspect-video"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    {selectedGame.media.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                          <img
                            src={item.url}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-white p-4">
                            <p className="text-sm font-medium">{item.caption}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div 
                  className={`p-8 rounded-lg mb-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <h2 className={`text-2xl font-bold mb-6 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {selectedGame.translations?.[i18n.language]?.name || selectedGame.name}
                  </h2>
                  <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none space-y-4`}>
                    {(selectedGame.translations?.[i18n.language]?.description || selectedGame.description)
                      .split('•')
                      .map((point, index) => (
                        index === 0 ? (
                          <p key="intro" className={`text-lg ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {point.trim()}
                          </p>
                        ) : (
                          <div key={index} className="flex items-start gap-3">
                            <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                              isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                            }`} />
                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                              {point.trim()}
                            </p>
                          </div>
                        )
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div 
                    className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <h2 className={`text-lg font-semibold mb-6 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {t('giftCardDetails')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="serialNumber" className={`block text-sm font-medium ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {t('serialNumber')}
                        </label>
                        <input
                          id="serialNumber"
                          type="text"
                          placeholder="9960021641258869"
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white' 
                              : 'bg-white border-gray-300'
                          } ${errors.serialNumber ? 'border-red-500' : ''}`}
                          value={serialNumber}
                          onChange={(e) => {
                            const cleaned = e.target.value.replace(/\D/g, '');
                            setSerialNumber(cleaned);
                            setErrors(prev => ({
                              ...prev,
                              serialNumber: cleaned.length !== 16 ? t('errors.serialNumberLength') : ''
                            }));
                          }}
                          maxLength={16}
                          dir="ltr"
                        />
                        {errors.serialNumber && (
                          <p className="mt-1 text-sm text-red-500">{errors.serialNumber}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cvv" className={`block text-sm font-medium ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {t('cvv')}
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="279"
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDarkMode 
                              ? 'bg-gray-800 border-gray-600 text-white' 
                              : 'bg-white border-gray-300'
                          } ${errors.cvv ? 'border-red-500' : ''}`}
                          value={cvv}
                          onChange={(e) => {
                            const cleaned = e.target.value.replace(/\D/g, '');
                            setCvv(cleaned);
                            setErrors(prev => ({
                              ...prev,
                              cvv: cleaned.length !== 3 ? t('errors.cvvLength') : ''
                            }));
                          }}
                          maxLength={3}
                          dir="ltr"
                        />
                        {errors.cvv && (
                          <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <h2 className={`text-lg font-semibold mb-6 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      {t('tiktokAccount')}
                    </h2>
                    <div className="space-y-2">
                      <label htmlFor="tiktokUsername" className={`block text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('tiktokUsername')}
                      </label>
                      <input
                        id="tiktokUsername"
                        type="text"
                        placeholder={t('errors.enterTiktokUsername')}
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                        } ${errors.tiktokUsername ? 'border-red-500' : ''}`}
                        value={tiktokUsername}
                        onChange={(e) => {
                          setTiktokUsername(e.target.value);
                          setErrors(prev => ({
                            ...prev,
                            tiktokUsername: !e.target.value ? t('errors.tiktokRequired') : ''
                          }));
                        }}
                        dir="ltr"
                      />
                      {errors.tiktokUsername && (
                        <p className="mt-1 text-sm text-red-500">{errors.tiktokUsername}</p>
                      )}
                    </div>
                  </div>

                  <button
                    className={`w-full py-4 rounded-lg text-white font-medium transition-colors ${
                      isDarkMode 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    onClick={() => {
                      const newErrors = {
                        serialNumber: serialNumber.length !== 16 ? t('errors.serialNumberLength') : '',
                        cvv: cvv.length !== 3 ? t('errors.cvvLength') : '',
                        tiktokUsername: !tiktokUsername ? t('errors.tiktokRequired') : ''
                      };
                      
                      setErrors(newErrors);
                      
                      if (!Object.values(newErrors).some(error => error)) {
                        setPaymentStatus(Math.random() > 0.5 ? 'success' : 'reject');
                      }
                    }}
                  >
                    {t('pay')}
                  </button>
                </div>

                {paymentStatus !== 'idle' && (
                  <div className={`mt-6 p-4 rounded-lg ${
                    paymentStatus === 'success' 
                      ? isDarkMode ? 'bg-green-900 border-green-700' : 'bg-green-50 border-green-200'
                      : isDarkMode ? 'bg-red-900 border-red-700' : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center justify-center gap-3">
                      {paymentStatus === 'success' ? (
                        <>
                          <CheckCircle2 className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={24} />
                          <p className={isDarkMode ? 'text-green-400' : 'text-green-800'}>
                            {t('paymentSuccess', { amount: paymentAmount.toFixed(2) })}
                          </p>
                        </>
                      ) : (
                        <>
                          <XCircle className={isDarkMode ? 'text-red-400' : 'text-red-600'} size={24} />
                          <p className={isDarkMode ? 'text-red-400' : 'text-red-800'}>
                            {t('paymentFailed')}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <PurchaseCard 
                  isDarkMode={isDarkMode}
                  t={t}
                  currentGiftCardUrl={currentGiftCardUrl}
                  isRTL={isRTL}
                />
              </div>

              <Footer isDarkMode={isDarkMode} t={t} isRTL={isRTL} />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;