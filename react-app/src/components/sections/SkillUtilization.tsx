import React from 'react';

const SkillUtilization: React.FC = () => {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          スキル活用・収益化プロジェクト
        </h2>
        
        <div className="game-card" style={{ marginBottom: '60px' }}>
          <h3 style={{ 
            fontSize: '2rem', 
            color: 'var(--game-gold)', 
            marginBottom: '20px', 
            textAlign: 'center' 
          }}>
            スキル活用例
          </h3>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8', 
            textAlign: 'center' 
          }}>
            マインクラフトで遊んでいるうちに、自然とICTスキルやプレゼン力が身につく！
          </p>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8', 
            textAlign: 'center', 
            marginTop: '20px' 
          }}>
            その力を活かして、ゲーム実況や動画編集、デジタルデザイン、プログラミングなど、さまざまな分野にチャレンジできます。
          </p>
          <p style={{ 
            fontSize: '1.5rem', 
            color: 'var(--game-yellow)', 
            textAlign: 'center', 
            marginTop: '20px' 
          }}>
            <strong>好きなことを「仕事」に変える第一歩を、この教室で踏み出そう！</strong>
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          <div className="game-card">
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-emerald)', 
              marginBottom: '15px' 
            }}>
              🎮 ゲーム実況・動画編集
            </h4>
            <p>マイクラでの作品を動画にして配信。編集スキルと伝える力が身につきます。</p>
          </div>
          <div className="game-card">
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-pink)', 
              marginBottom: '15px' 
            }}>
              🎨 デジタルデザイン
            </h4>
            <p>マイクラで育んだ創造力をデザインツールで実現。ポスターやサイト作成に挑戦。</p>
          </div>
          <div className="game-card">
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-purple)', 
              marginBottom: '15px' 
            }}>
              💻 プログラミング
            </h4>
            <p>コマンドから本格プログラミングへ。アプリやゲーム開発の基礎を築きます。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillUtilization;