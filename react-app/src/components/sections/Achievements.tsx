import React from 'react';

const Achievements: React.FC = () => {
  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'url(/images/tech30.png) center/cover no-repeat', 
      minHeight: '1200px' 
    }}>
      <div style={{ 
        position: 'absolute', 
        top: '0', 
        left: '0', 
        right: '0', 
        bottom: '0', 
        background: 'rgba(15, 15, 30, 0.85)', 
        backdropFilter: 'blur(5px)' 
      }}></div>
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '100px 20px' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="game-badge" style={{ background: 'var(--gradient-ocean)' }}>🏅 ACHIEVEMENTS & VOICES</div>
          <div className="section-title">
            <h2 className="game-title" style={{ fontSize: '3rem', margin: '30px 0' }}>実績と生徒・保護者の声</h2>
          </div>
        </div>
        
        {/* 成果・実績 */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          marginBottom: '80px' 
        }}>
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)', 
            textAlign: 'center' 
          }}>
            <div style={{ fontSize: '4rem', color: 'var(--game-gold)', marginBottom: '20px' }}>🏆</div>
            <h3 style={{ fontSize: '3rem', color: 'var(--game-yellow)', marginBottom: '10px' }}>95%</h3>
            <p style={{ fontSize: '1.2rem' }}>受講生の満足度</p>
          </div>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)', 
            textAlign: 'center' 
          }}>
            <div style={{ fontSize: '4rem', color: 'var(--game-silver)', marginBottom: '20px' }}>⭐</div>
            <h3 style={{ fontSize: '3rem', color: 'var(--game-emerald)', marginBottom: '10px' }}>500+</h3>
            <p style={{ fontSize: '1.2rem' }}>作品制作数</p>
          </div>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)', 
            textAlign: 'center' 
          }}>
            <div style={{ fontSize: '4rem', color: 'var(--game-bronze)', marginBottom: '20px' }}>🎯</div>
            <h3 style={{ fontSize: '3rem', color: 'var(--game-pink)', marginBottom: '10px' }}>100%</h3>
            <p style={{ fontSize: '1.2rem' }}>楽しさ保証</p>
          </div>
        </div>
        
        {/* 生徒の声 */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="game-badge" style={{ background: 'var(--gradient-fire)' }}>💬 STUDENT VOICES</div>
            <h3 className="level-title" style={{ fontSize: '2.5rem', margin: '30px 0' }}>冒険者たちの声</h3>
          </div>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)', 
            marginBottom: '40px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-ocean)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                fontWeight: 'bold' 
              }}>
                A
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>Aくん（小4）& 保護者</h4>
                <div style={{ color: 'var(--game-yellow)', fontSize: '1.3rem' }}>★★★★★</div>
              </div>
            </div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              padding: '20px', 
              borderRadius: '15px', 
              marginBottom: '20px' 
            }}>
              <p><strong style={{ color: 'var(--game-red)' }}>Before：</strong>「パソコンとか苦手…」と最初は戸惑っていたAくん。</p>
              <p><strong style={{ color: 'var(--game-green)' }}>After：</strong>通うちに好きな電車をマイクラで再現することに夢中になり、今では自作の鉄道ワールドを使ってプレゼンまでできるように！</p>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '15px' }}>
              <p style={{ margin: '0' }}>
                <strong>保護者の声：</strong>
                「うちの子、飽きっぽくて続くか心配でしたが、今では毎週の授業を楽しみにしています。集中力と自信がついたように思います」
              </p>
            </div>
          </div>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(10px)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-sunset)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                fontWeight: 'bold' 
              }}>
                B
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>Bさん（小5）</h4>
                <div style={{ color: 'var(--game-yellow)', fontSize: '1.3rem' }}>★★★★★</div>
              </div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '15px' }}>
              <p><strong style={{ color: 'var(--game-red)' }}>Before：</strong>「学校以外で勉強なんてしたくない」と言っていたBさん。</p>
              <p style={{ margin: '0' }}>
                <strong style={{ color: 'var(--game-green)' }}>After：</strong>
                動画編集が楽しくなり、発表会でみんなに動画を見せたとき「すごい！」と言われたのが嬉しくて、今では自主的に編集ソフトも学習中！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;