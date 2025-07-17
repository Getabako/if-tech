import React from 'react';

const Appeal: React.FC = () => {
  return (
    <section className="section">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="game-badge" style={{ 
            background: 'var(--gradient-rainbow)', 
            backgroundSize: '400% 400%',
            animation: 'gradientShift 5s ease infinite'
          }}>
            ✨ APPEAL
          </div>
          <div className="section-title">
            <h2 className="game-title" style={{ fontSize: '3rem', margin: '30px 0' }}>魅力の発信</h2>
          </div>
        </div>
        
        <div className="game-card" style={{ textAlign: 'center' }}>
          <h3 className="quest-title" style={{ 
            fontSize: '2rem', 
            color: 'var(--game-gold)', 
            marginBottom: '30px' 
          }}>
            なぜif(Tech)が選ばれるのか
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px', 
            marginBottom: '40px' 
          }}>
            <div className="game-card">
              <h4 style={{ 
                color: 'var(--game-emerald)', 
                fontSize: '1.3rem', 
                marginBottom: '15px' 
              }}>
                🎮 楽しみながら学ぶ
              </h4>
              <p>ゲーム感覚で自然とプログラミング思考が身につく</p>
            </div>
            <div className="game-card">
              <h4 style={{ 
                color: 'var(--game-blue)', 
                fontSize: '1.3rem', 
                marginBottom: '15px' 
              }}>
                👨‍💻 経験豊富な講師陣
              </h4>
              <p>500人以上の子どもたちを指導してきた経験</p>
            </div>
            <div className="game-card">
              <h4 style={{ 
                color: 'var(--game-purple)', 
                fontSize: '1.3rem', 
                marginBottom: '15px' 
              }}>
                🌟 未来につながる
              </h4>
              <p>学んだスキルを活かして収益化まで体験可能</p>
            </div>
          </div>
          
          <p style={{ 
            fontSize: '1.5rem', 
            color: 'var(--game-yellow)', 
            marginBottom: '30px' 
          }}>
            <strong>マインクラフトの世界で、子どもたちの無限の可能性を解き放つ</strong>
          </p>
          
          <a href="#contact" className="cta-button">
            🎯 今すぐ無料体験を申し込む
          </a>
        </div>
      </div>
    </section>
  );
};

export default Appeal;