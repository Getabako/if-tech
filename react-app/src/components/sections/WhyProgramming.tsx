import React from 'react';

const WhyProgramming: React.FC = () => {
  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.3), rgba(156, 39, 176, 0.3), rgba(63, 81, 181, 0.3))', 
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
          background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.3), rgba(156, 39, 176, 0.3), rgba(63, 81, 181, 0.3))',
          zIndex: 1
        }}
      />
      
      <div className="container mx-auto text-center" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="game-title" style={{ 
          fontSize: '2.5rem', 
          margin: '30px 0 50px',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
        }}>
          なぜプログラミングが必要？
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="game-card" style={{ 
            animation: 'slideInLeft 0.8s ease-out',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-blue)' }}>
              <i className="fas fa-robot"></i>
            </div>
            <h3 style={{ 
              color: 'var(--game-pink)', 
              fontSize: '1.8rem', 
              marginBottom: '20px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              AI時代の必須スキル
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              AIと共存する時代、プログラミングスキルがあれば、AIを使いこなし、新しい価値を生み出せます。
            </p>
          </div>
          
          <div className="game-card" style={{ 
            animation: 'slideInBottom 0.8s ease-out',
            animationDelay: '0.2s',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-orange)' }}>
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h3 style={{ 
              color: 'var(--game-orange)', 
              fontSize: '1.8rem', 
              marginBottom: '20px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              問題解決力が身につく
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              プログラミングは論理的思考と創造性を育て、どんな課題にも対応できる力を身につけます。
            </p>
          </div>
          
          <div className="game-card" style={{ 
            animation: 'slideInRight 0.8s ease-out',
            animationDelay: '0.4s',
            textShadow: '1px 1px 0px rgba(255,255,255,0.5), -1px -1px 0px rgba(0,0,0,0.3)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.3), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -2px 10px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--game-purple)' }}>
              <i className="fas fa-rocket"></i>
            </div>
            <h3 style={{ 
              color: 'var(--game-purple)', 
              fontSize: '1.8rem', 
              marginBottom: '20px',
              textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3)'
            }}>
              将来の選択肢が広がる
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
              IT業界だけでなく、あらゆる分野でプログラミングスキルが求められる時代です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProgramming;