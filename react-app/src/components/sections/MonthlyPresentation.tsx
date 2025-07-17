import React from 'react';

const MonthlyPresentation: React.FC = () => {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          毎月の発表会で成長を実感！
        </h2>
        <h3 style={{ 
          fontSize: '2rem', 
          color: 'var(--game-gold)', 
          textAlign: 'center', 
          marginBottom: '30px' 
        }}>
          自分の作品を堂々と発表する力
        </h3>
        
        <div className="game-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
            毎月最終週に開催される発表会では、自分の作った作品を仲間や保護者の前でプレゼンテーション！
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginTop: '40px' }}>
            <div className="skill-card">
              <h4 style={{ color: 'var(--game-yellow)' }}>プレゼン力UP</h4>
              <p>人前で話す自信がつく</p>
            </div>
            <div className="skill-card">
              <h4 style={{ color: 'var(--game-emerald)' }}>達成感</h4>
              <p>完成した喜びを共有</p>
            </div>
            <div className="skill-card">
              <h4 style={{ color: 'var(--game-purple)' }}>モチベーション</h4>
              <p>次の作品への意欲</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MonthlyPresentation;