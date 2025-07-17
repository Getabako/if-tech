import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container mx-auto text-center">
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textAlign: 'center',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          教室の理念と特徴
        </h2>
        
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '2rem', 
            color: 'var(--game-gold)', 
            marginBottom: '20px',
            textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
          }}>
            if(Tech)の教育理念
          </h3>
          <p style={{ 
            fontSize: '1.3rem', 
            lineHeight: '1.8', 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            「遊びが学びに変わる」をコンセプトに、子どもたちが夢中になれる環境で<br />
            自然にプログラミング思考と未来スキルを身につけられる教室です。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInLeft 0.8s ease-out'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-green)' }}>
              <i className="fas fa-target"></i>
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-green)', 
              marginBottom: '15px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              個別最適化された学習
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              一人ひとりのペースと興味に合わせた指導で、確実にスキルアップ
            </p>
          </div>
          
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInBottom 0.8s ease-out',
            animationDelay: '0.2s'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-blue)' }}>
              <i className="fas fa-rocket"></i>
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-blue)', 
              marginBottom: '15px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              実践的なカリキュラム
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              ゲーム作りを通じて、実際に使えるプログラミングスキルを習得
            </p>
          </div>
          
          <div className="game-card" style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)',
            animation: 'slideInRight 0.8s ease-out',
            animationDelay: '0.4s'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-purple)' }}>
              <i className="fas fa-lightbulb"></i>
            </div>
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-purple)', 
              marginBottom: '15px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              創造性を育む環境
            </h4>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              自由な発想を大切にし、アイデアを形にする力を育成
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;