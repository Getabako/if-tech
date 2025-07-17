import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'url(/images/tech30.png) center/cover no-repeat', 
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
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 140, 0, 0.3), rgba(76, 175, 80, 0.3))',
          zIndex: 1
        }}
      />
      
      <div className="container mx-auto text-center" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          料金
        </h2>
        
        <div className="game-card" style={{ 
          maxWidth: '600px', 
          margin: '0 auto',
          textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{ color: 'var(--game-gold)', fontSize: '2rem', marginBottom: '30px' }}>
            料金プラン
          </h3>
          
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 140, 0, 0.2))', 
            padding: '30px', 
            borderRadius: '20px', 
            marginBottom: '20px' 
          }}>
            <h4 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>月謝制</h4>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--game-gold)' }}>
              10,800円<span style={{ fontSize: '1.2rem' }}>（税込）</span>
            </p>
            <p style={{ marginTop: '10px' }}>週1回60分 × 月4回</p>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '20px', 
            borderRadius: '15px' 
          }}>
            <p>入会金：20,000円（税込）</p>
            <p style={{ color: 'var(--game-emerald)', marginTop: '10px' }}>
              ※兄弟割引あり（2人目以降50%OFF）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;