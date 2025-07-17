import React from 'react';

const VideoCreator: React.FC = () => {
  return (
    <section className="section">
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          君の作品がYouTubeデビュー！
        </h2>
        
        <div className="game-card">
          <h3 style={{ 
            fontSize: '2rem', 
            color: 'var(--game-red)', 
            textAlign: 'center', 
            marginBottom: '30px' 
          }}>
            🎥 動画制作スキルも身につく！
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px', 
            marginBottom: '30px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div className="minecraft-block block-diamond" style={{ margin: '0 auto 15px' }}>
                <div style={{ paddingTop: '25px', fontSize: '3rem' }}>📹</div>
              </div>
              <h4 style={{ color: 'var(--game-blue)', marginBottom: '10px' }}>撮影体験</h4>
              <p>発表会やイベントの様子を動画で撮影します</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div className="minecraft-block block-gold" style={{ margin: '0 auto 15px' }}>
                <div style={{ paddingTop: '25px', fontSize: '3rem' }}>✂️</div>
              </div>
              <h4 style={{ color: 'var(--game-yellow)', marginBottom: '10px' }}>編集スキル</h4>
              <p>無料の本格ソフト（Davinci Resolveなど）を使った編集方法を教えます</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div className="minecraft-block block-grass" style={{ margin: '0 auto 15px' }}>
                <div style={{ paddingTop: '25px', fontSize: '3rem' }}>📺</div>
              </div>
              <h4 style={{ color: 'var(--game-green)', marginBottom: '10px' }}>YouTube公開</h4>
              <p>講師のチェックを経て公式YouTubeチャンネルで公開します</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div className="minecraft-block block-redstone" style={{ margin: '0 auto 15px' }}>
                <div style={{ paddingTop: '25px', fontSize: '3rem' }}>🎁</div>
              </div>
              <h4 style={{ color: 'var(--game-pink)', marginBottom: '10px' }}>特典</h4>
              <p>動画編集を頑張ったクリエイターにはお菓子などのご褒美も！</p>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '20px', 
            borderRadius: '15px', 
            marginBottom: '30px' 
          }}>
            <h4 style={{ 
              color: 'var(--game-pink)', 
              marginBottom: '15px', 
              textAlign: 'center' 
            }}>
              🎁 クリエイター特典
            </h4>
            <p style={{ 
              fontSize: '1.2rem', 
              textAlign: 'center' 
            }}>
              動画編集を頑張ってくれたクリエイターには、<strong style={{ color: 'var(--game-yellow)' }}>お菓子などのご褒美</strong>も！<br/>
              みんなの頑張りをしっかり評価します！
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <a 
              href="https://www.youtube.com/@if-juku" 
              className="cta-button" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px' 
              }} 
              target="_blank" 
              rel="noopener"
            >
              <span>📺</span>
              <span>公式YouTubeチャンネルを見る</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCreator;