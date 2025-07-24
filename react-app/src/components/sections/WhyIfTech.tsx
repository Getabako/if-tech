import React from 'react';

const WhyIfTech: React.FC = () => {
  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.3), rgba(0, 200, 83, 0.3), rgba(233, 30, 99, 0.3))', 
      minHeight: '800px' 
    }}>
      {/* 背景マスク */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.3), rgba(0, 200, 83, 0.3), rgba(233, 30, 99, 0.3))',
          zIndex: 1
        }}
      />
      
      <div className="container mx-auto text-center" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', margin: '30px 0 50px' }}>
          <img 
            src="/images/tech3.png" 
            alt="if(Tech) logo" 
            style={{ 
              width: '120px', 
              height: '120px', 
              objectFit: 'contain',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }} 
          />
          <h2 className="game-title" style={{ 
            fontSize: '2.5rem', 
            margin: '0',
            textAlign: 'center',
            textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
          }}>
            Why if(Tech)?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="game-card" style={{ 
            animation: 'slideInLeft 0.8s ease-out',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <div 
              style={{ 
                width: '100px', 
                height: '100px', 
                background: 'linear-gradient(135deg, var(--game-yellow), var(--game-orange))',
                borderRadius: '20px', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }} 
            >
              🎨
            </div>
            <h4 style={{ color: 'var(--game-yellow)', fontSize: '1.2rem', marginBottom: '10px' }}>
              創造性
            </h4>
            <h3 style={{ 
              fontSize: '1.6rem', 
              marginBottom: '15px', 
              color: 'var(--game-yellow)',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              自分だけの世界をつくれる！
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              マインクラフトで創造力を解き放とう
            </p>
          </div>
          
          <div className="game-card" style={{ 
            animation: 'slideInBottom 0.8s ease-out',
            animationDelay: '0.2s',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <div 
              style={{ 
                width: '100px', 
                height: '100px', 
                background: 'linear-gradient(135deg, var(--game-emerald), var(--game-green))',
                borderRadius: '20px', 
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }} 
            >
              🎮
            </div>
            <h4 style={{ color: 'var(--game-emerald)', fontSize: '1.2rem', marginBottom: '10px' }}>
              楽しさ
            </h4>
            <h3 style={{ 
              fontSize: '1.6rem', 
              marginBottom: '15px', 
              color: 'var(--game-emerald)',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              ゲームで遊びながらプログラミング！
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              楽しみながら本格的なスキルが身につく
            </p>
          </div>
          
          <div className="game-card" style={{ 
            animation: 'slideInRight 0.8s ease-out',
            animationDelay: '0.4s',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ width: '100px', height: '100px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, var(--game-pink), var(--game-purple))', borderRadius: '20px' }}>
              <i className="fas fa-lightbulb" style={{ fontSize: '3rem', color: 'white' }}></i>
            </div>
            <h4 style={{ color: 'var(--game-pink)', fontSize: '1.2rem', marginBottom: '10px' }}>
              実現力
            </h4>
            <h3 style={{ 
              fontSize: '1.6rem', 
              marginBottom: '15px', 
              color: 'var(--game-pink)',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              自分のアイデアが実現する！
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              思い描いたものを形にする喜びを体験
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIfTech;