import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Stars from './components/Stars';
import XPCounter from './components/XPCounter';
import NotificationArea from './components/NotificationArea';
import WhyProgramming from './components/sections/WhyProgramming';
import WhyIfTech from './components/sections/WhyIfTech';
import CompanyInfo from './components/sections/CompanyInfo';
import Philosophy from './components/sections/Philosophy';
import Instructor from './components/sections/Instructor';
import SixSkills from './components/sections/SixSkills';
import MonthlyPresentation from './components/sections/MonthlyPresentation';
import ClassFormat from './components/sections/ClassFormat';
import VideoCreator from './components/sections/VideoCreator';
import SkillUtilization from './components/sections/SkillUtilization';
import SafetySupport from './components/sections/SafetySupport';
import Environment from './components/sections/Environment';
import Achievements from './components/sections/Achievements';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Appeal from './components/sections/Appeal';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  const [xp, setXP] = useState(0);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ローディング画面
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // XPの自動増加
    const xpInterval = setInterval(() => {
      setXP(prev => {
        const newXP = prev + Math.floor(Math.random() * 10) + 1;
        if (newXP % 100 === 0) {
          addNotification('レベルアップ！');
        }
        return newXP;
      });
    }, 3000);

    return () => clearInterval(xpInterval);
  }, []);

  const addNotification = (message: string) => {
    setNotifications(prev => [...prev, message]);
    setTimeout(() => {
      setNotifications(prev => prev.slice(1));
    }, 3000);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Stars />
      <XPCounter xp={xp} />
      <NotificationArea notifications={notifications} />
      
      <Hero />
      <WhyProgramming />
      <WhyIfTech />
      <CompanyInfo />
      <Philosophy />
      <Instructor />
      <SixSkills />
      <MonthlyPresentation />
      <ClassFormat />
      <VideoCreator />
      <SkillUtilization />
      <SafetySupport />
      <Environment />
      <Achievements />
      <FAQ />
      <Pricing />
      <Appeal />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;