import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 30px',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          講師紹介
        </h2>
        
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto 20px'
          }}>
            これまでに<strong style={{ color: 'var(--game-yellow)' }}>500人以上の子どもたちの成長を支えてきた確かな実績</strong>を持ち、<strong style={{ color: 'var(--game-green)' }}>高校生のうちに起業した若手起業家講師</strong>が在籍。東成瀬村が出資する第三セクター企業「東成瀬テックソリューションズ株式会社」と連携し、<strong style={{ color: 'var(--game-purple)' }}>地域プロジェクトでの実践的な学び</strong>を提供します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInLeft 0.8s ease-out'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-emerald)' }}>
              <i className="fas fa-laptop-code"></i>
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-emerald)', 
              marginBottom: '15px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              プログラミング・技術講師
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              Minecraftに精通したエンジニアが、コマンドからレッドストーン回路まで、技術的な内容を分かりやすく指導します。
            </p>
          </div>
          
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInBottom 0.8s ease-out',
            animationDelay: '0.2s'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-pink)' }}>
              <i className="fas fa-star"></i>
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-pink)', 
              marginBottom: '15px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              若手起業家講師
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              高校生で起業した実績を持つ身近なロールモデルが、子どもたちの夢と可能性を幅広げます。
            </p>
          </div>
          
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInRight 0.8s ease-out',
            animationDelay: '0.4s'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-orange)' }}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-orange)', 
              marginBottom: '15px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              教育スペシャリスト
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              幼児から中高生まで、子どもたちの発達段階に合わせた最適な学習サポートを実現します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;