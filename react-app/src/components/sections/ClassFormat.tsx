import React from 'react';

const ClassFormat: React.FC = () => {
  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'url(/images/tech25.png) center/cover no-repeat', 
      minHeight: '800px' 
    }}>
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '3rem', 
          margin: '30px 0',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          授業形式とサポート体制
        </h2>
        
        <div className="game-card" style={{ 
          background: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(10px)', 
          marginBottom: '60px' 
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            color: 'var(--game-gold)', 
            marginBottom: '20px', 
            textAlign: 'center' 
          }}>
            授業形式・回数・時間
          </h3>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8', 
            textAlign: 'center' 
          }}>
            授業は週１回、<strong style={{ color: 'var(--game-yellow)' }}>完全オンライン形式</strong>で実施。全国どこからでも参加可能です。
          </p>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8', 
            textAlign: 'center' 
          }}>
            参加人数は拡大中で、多くの仲間と一緒に切磋琢磨しながら楽しく学べる環境です。
          </p>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '20px', 
            borderRadius: '15px', 
            marginTop: '20px' 
          }}>
            <p style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-emerald)', 
              textAlign: 'center', 
              margin: '0' 
            }}>
              <strong>対象年齢：小学1年生〜高校３年生</strong>
            </p>
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)' 
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              margin: '0 auto 20px', 
              background: 'var(--gradient-mint)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2.5rem' 
            }}>
              🎮
            </div>
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: 'var(--game-green)', 
              marginBottom: '15px', 
              textAlign: 'center' 
            }}>
              <span className="pixel-font">LEVEL 1</span> - 基本操作マスター
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              textAlign: 'center' 
            }}>
              マインクラフトの基本操作を楽しく学習
            </p>
            <div className="progress-bar" style={{ marginTop: '20px' }}>
              <div 
                className="progress-fill" 
                style={{ width: '120%' }} 
                data-progress="基礎マスター 120%"
              ></div>
            </div>
          </div>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)' 
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              margin: '0 auto 20px', 
              background: 'var(--gradient-ocean)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2.5rem' 
            }}>
              ⚙️
            </div>
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: 'var(--game-blue)', 
              marginBottom: '15px', 
              textAlign: 'center' 
            }}>
              <span className="pixel-font">LEVEL 2</span> - コマンド入門
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              textAlign: 'center' 
            }}>
              簡単なコマンドでゲームをカスタマイズ
            </p>
            <div className="progress-bar" style={{ marginTop: '20px' }}>
              <div 
                className="progress-fill" 
                style={{ width: '120%' }} 
                data-progress="応用スキル 120%"
              ></div>
            </div>
          </div>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)' 
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              margin: '0 auto 20px', 
              background: 'var(--gradient-fire)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2.5rem' 
            }}>
              🚀
            </div>
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: 'var(--game-purple)', 
              marginBottom: '15px', 
              textAlign: 'center' 
            }}>
              <span className="pixel-font">LEVEL 3</span> - プログラミング実践
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              textAlign: 'center' 
            }}>
              本格プログラミングで自分だけの機能を作成
            </p>
            <div className="progress-bar" style={{ marginTop: '20px' }}>
              <div 
                className="progress-fill" 
                style={{ width: '120%' }} 
                data-progress="エキスパート 120%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassFormat;