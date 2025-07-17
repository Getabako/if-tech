import React from 'react';

const Environment: React.FC = () => {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="game-badge">🏰 LEARNING WORLD</div>
          <div className="section-title">
            <h2 className="game-title" style={{ fontSize: '3rem', margin: '30px 0' }}>充実の学習環境</h2>
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          <div className="game-card">
            <div 
              style={{ 
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, var(--game-blue), var(--game-purple))',
                borderRadius: '15px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }} 
            >
              👥
            </div>
            <h3 style={{ 
              textAlign: 'center', 
              fontSize: '1.5rem', 
              color: 'var(--game-yellow)', 
              marginBottom: '15px' 
            }}>
              少人数制で手厚いサポート
            </h3>
            <p style={{ textAlign: 'center' }}>
              4〜6名の少人数制だから、一人ひとりに合わせた丁寧な指導が可能
            </p>
          </div>
          
          <div className="game-card">
            <div 
              style={{ 
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, var(--game-emerald), var(--game-green))',
                borderRadius: '15px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }} 
            >
              💻
            </div>
            <h3 style={{ 
              textAlign: 'center', 
              fontSize: '1.5rem', 
              color: 'var(--game-emerald)', 
              marginBottom: '15px' 
            }}>
              自宅から参加OK
            </h3>
            <p style={{ textAlign: 'center' }}>
              オンライン授業だから、全国どこからでも参加可能。送迎の心配もなし！
            </p>
          </div>
          
          <div className="game-card">
            <div 
              style={{ 
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, var(--game-pink), var(--game-purple))',
                borderRadius: '15px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }} 
            >
              💬
            </div>
            <h3 style={{ 
              textAlign: 'center', 
              fontSize: '1.5rem', 
              color: 'var(--game-pink)', 
              marginBottom: '15px' 
            }}>
              仲間との交流
            </h3>
            <p style={{ textAlign: 'center' }}>
              専用Discordで授業外でも仲間と交流。作品を共有したり、アイデアを話し合ったり
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;