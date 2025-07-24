import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [showAdventure, setShowAdventure] = useState(false);
  const [showX, setShowX] = useState(false);
  const [showCreative, setShowCreative] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowAdventure(true), 500);
    const timer2 = setTimeout(() => setShowX(true), 1000);
    const timer3 = setTimeout(() => setShowCreative(true), 1500);
    const timer4 = setTimeout(() => setShowBackground(true), 2000);
    const timer5 = setTimeout(() => setShowMainContent(true), 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-section" 
      style={{
        backgroundImage: 'url(/images/2025-07-17_18.11.33.png)',
        backgroundColor: '#0f0f1e',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      

      <div className="container mx-auto" style={{ position: 'relative', zIndex: 2 }}>
        {/* 冒険 × クリエイティブのアニメーション */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
            opacity: showMainContent ? 0 : 1,
            transition: 'opacity 0.5s ease-out',
            whiteSpace: 'nowrap',
            width: '100vw',
            justifyContent: 'center'
          }}
        >
          <span 
            className="pixel-font"
            style={{
              fontSize: '8rem',
              color: '#000000',
              opacity: showAdventure ? 1 : 0,
              transform: showAdventure ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s ease-out',
              fontWeight: 'bold',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
            }}
          >
            冒険
          </span>
          <span 
            className="pixel-font"
            style={{
              fontSize: '10rem',
              color: '#ff6b6b',
              opacity: showX ? 1 : 0,
              transform: showX ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
              transition: 'all 0.8s ease-out',
              fontWeight: 'bold',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
            }}
          >
            ×
          </span>
          <span 
            className="pixel-font"
            style={{
              fontSize: '8rem',
              color: '#000000',
              opacity: showCreative ? 1 : 0,
              transform: showCreative ? 'translateY(0)' : 'translateY(-50px)',
              transition: 'all 0.8s ease-out',
              fontWeight: 'bold',
              textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
            }}
          >
            クリエイティブ
          </span>
        </div>

        {/* メインコンテンツ */}
        <div 
          style={{
            opacity: showMainContent ? 1 : 0,
            transform: showMainContent ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 0.8s ease-out',
            textAlign: 'center'
          }}
        >
          <p style={{ 
            fontSize: '6rem', 
            fontWeight: '900', 
            marginBottom: '40px', 
            color: '#FFD700',
            width: '100%',
            maxWidth: '95vw',
            margin: '0 auto 40px',
            whiteSpace: 'normal',
            animation: 'slideInBottom 0.8s ease-out',
            textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)',
            lineHeight: '1.2'
          }}>
            マイクラで学ぶ未来スキル
          </p>
          
          <h3 className="pixel-font" style={{ 
            color: '#FFD700', 
            fontSize: '8rem', 
            marginBottom: '30px', 
            textShadow: '3px 3px 0px rgba(255,255,255,0.9), -3px -3px 0px rgba(0,0,0,0.4), 0 0 30px rgba(255,215,0,1)', 
            animation: 'titleGlow 2s ease-in-out infinite alternate, slideInBottom 0.8s ease-out',
            animationDelay: '0.2s',
            fontWeight: '900'
          }}>
            if(Tech)
          </h3>
          
          <p style={{ 
            fontSize: '3.5rem', 
            marginBottom: '60px', 
            animation: 'float 3s ease-in-out infinite, slideInBottom 0.8s ease-out',
            animationDelay: '0.4s',
            fontWeight: '900',
            color: '#FFFFFF',
            textShadow: '2px 2px 0px rgba(255,255,255,0.5), -2px -2px 0px rgba(0,0,0,0.5)',
            maxWidth: '90vw',
            margin: '0 auto 60px',
            background: 'linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
            padding: '20px',
            borderRadius: '20px',
            border: '3px solid rgba(255,215,0,0.5)'
          }}>
            さあ、ひらめきと成長を手にする新しい冒険に出かけよう！
          </p>
          
          <button 
            className="cta-button" 
            onClick={scrollToContact}
            style={{
              animation: 'slideInBottom 0.8s ease-out, float 3s ease-in-out infinite',
              animationDelay: '0.6s, 1s',
              fontSize: '3rem',
              padding: '40px 80px',
              fontWeight: '900',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)',
              background: 'linear-gradient(135deg, #FFD700, #FF6B35, #FFD700)',
              backgroundSize: '200% 200%',
              border: '4px solid #FFFFFF',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.5), inset 0 -2px 10px rgba(0,0,0,0.2)'
            }}
          >
            無料体験に申し込む
          </button>
          
          <p style={{ 
            marginTop: '40px', 
            fontSize: '2rem', 
            color: '#FFFFFF',
            animation: 'slideInBottom 0.8s ease-out',
            animationDelay: '0.8s',
            fontWeight: 'bold',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.5)',
            background: 'linear-gradient(45deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1))',
            padding: '15px 30px',
            borderRadius: '15px',
            border: '2px solid rgba(255,215,0,0.3)',
            maxWidth: '80vw',
            margin: '40px auto 0',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3), inset 0 1px 5px rgba(255,255,255,0.3), inset 0 -1px 5px rgba(0,0,0,0.2)'
          }}>
            マインクラフトの世界で夢中になって遊ぶうちに、<br />
            未来を生き抜く力が身につく！
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;