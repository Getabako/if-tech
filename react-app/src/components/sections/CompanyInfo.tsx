import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          会社情報・企業概要
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInLeft 0.8s ease-out'
          }}>
            <img 
              src="/images/ifjukulogo.png" 
              alt="if(塾)ロゴ" 
              style={{ width: '120px', height: 'auto', margin: '0 auto 20px', display: 'block' }} 
            />
            <h3 style={{ 
              fontSize: '2rem', 
              color: 'var(--game-green)', 
              marginBottom: '20px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              if(塾)
            </h3>
            <p style={{ lineHeight: '1.8', fontSize: '1.3rem' }}>
              秋田県秋田市にある未来型のプログラミング教室です。AIや起業を学べるコースを提供し、子どもたちが自分の得意を活かして社会とつながる力を育てます。
            </p>
          </div>
          
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInRight 0.8s ease-out',
            animationDelay: '0.2s'
          }}>
            <img 
              src="/images/narutechlogo.png" 
              alt="東成瀬テックソリューションズ株式会社ロゴ" 
              style={{ width: '120px', height: 'auto', margin: '0 auto 20px', display: 'block' }} 
            />
            <h3 style={{ 
              fontSize: '2rem', 
              color: 'var(--game-blue)', 
              marginBottom: '20px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              東成瀬テックソリューションズ株式会社
            </h3>
            <p style={{ lineHeight: '1.8', fontSize: '1.3rem' }}>
              秋田県東成瀬村が出資する第三セクター方式の企業です。テクノロジーを活用して地域課題の解決や地方創生に取り組んでいます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;