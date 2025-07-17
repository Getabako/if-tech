import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      {/* 無料体験申込 */}
      <section id="contact" className="section" style={{ 
        position: 'relative', 
        background: 'url(/images/tech35.png) center/cover no-repeat', 
        minHeight: '800px' 
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '0', 
          left: '0', 
          right: '0', 
          bottom: '0', 
          background: 'rgba(15, 15, 30, 0.75)', 
          backdropFilter: 'blur(5px)' 
        }}></div>
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '1000px', 
          margin: '0 auto', 
          textAlign: 'center', 
          padding: '100px 20px' 
        }}>
          <div className="game-badge" style={{ 
            background: 'rgba(255, 255, 255, 0.2)', 
            backdropFilter: 'blur(10px)', 
            fontSize: '1.2rem' 
          }}>
            🎯 FINAL QUEST
          </div>
          <div className="section-title" style={{ marginBottom: '50px' }}>
            <h2 className="game-title" style={{ 
              fontSize: '4rem', 
              margin: '30px 0', 
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' 
            }}>
              マインクラフトの世界で無料体験
            </h2>
          </div>
          <p style={{ fontSize: '1.8rem', marginBottom: '40px' }}>
            今すぐ無料体験！ マイクラで未来スキルを楽しく学ぼう
          </p>
          
          <div className="game-card" style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(20px)', 
            maxWidth: '700px', 
            margin: '0 auto 50px', 
            border: '3px solid white' 
          }}>
            <h3 style={{ 
              fontSize: '2.5rem', 
              color: 'var(--game-yellow)', 
              marginBottom: '30px', 
              textShadow: '0 0 20px rgba(255, 235, 59, 0.8)' 
            }}>
              🎁 無料体験特典 🎁
            </h3>
            <div style={{ 
              display: 'grid', 
              gap: '20px', 
              textAlign: 'left', 
              fontSize: '1.2rem' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '2rem' }}>🎯</span>
                <span>プロ講師の授業が体験できる！</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '2rem' }}>⚔️</span>
                <span>ここだけの「最強コマンドツール」付き</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '2rem' }}>⏰</span>
                <span>60分授業1回でマイクラの世界を思いっきり楽しめます！</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '2rem' }}>🎮</span>
                <span>専用Discord参加権＆仲間との交流</span>
              </div>
            </div>
            
            <div className="game-badge" style={{ 
              background: 'var(--gradient-fire)', 
              fontSize: '1.3rem', 
              marginTop: '30px' 
            }}>
              🎨 今だけ：限定レアスキンプレゼント
            </div>
            
            <div className="progress-bar" style={{ marginTop: '30px' }}>
              <div className="progress-fill" style={{ width: '100%' }} data-progress="特典充実度 MAX!"></div>
            </div>
          </div>
          
          <div style={{ marginBottom: '40px' }}>
            <div className="game-badge" style={{ 
              background: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              fontSize: '1.1rem', 
              marginBottom: '20px' 
            }}>
              ⚡ INSTANT REGISTRATION
            </div>
            <p style={{ fontSize: '1.3rem', marginBottom: '15px' }}>お申し込みは最短1分で完了します</p>
            <p style={{ fontSize: '1.3rem', marginBottom: '40px' }}>クレジットカード不要・完全無料</p>
            
            <a 
              href="https://if-juku.net/trial" 
              className="cta-button" 
              style={{ fontSize: '24px', padding: '25px 60px' }} 
              target="_blank" 
              rel="noopener"
            >
              🎯 無料体験クエストを開始する →
            </a>
            
            <div style={{ marginTop: '30px' }}>
              <a 
                href="https://if-juku.net/" 
                style={{ color: 'white', fontSize: '1.1rem' }} 
                target="_blank" 
                rel="noopener"
              >
                🏠 if(塾)公式サイトはこちら
              </a>
            </div>
          </div>
          
          <div className="game-badge" style={{ 
            background: 'var(--gradient-rainbow)', 
            backgroundSize: '400% 400%', 
            fontSize: '1.5rem', 
            padding: '15px 40px' 
          }}>
            🎊 冒険者よ、新たな世界が君を待っている！
          </div>
        </div>
      </section>
      
      {/* お問い合わせ */}
      <section id="contact-section" className="section" style={{ 
        position: 'relative', 
        background: 'url(/images/tech37.png) center/cover no-repeat', 
        minHeight: '800px' 
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
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: '100px 20px' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="game-badge" style={{ background: 'var(--gradient-ocean)' }}>📞 CONTACT MISSION</div>
            <div className="section-title">
              <h2 className="game-title" style={{ fontSize: '3rem', margin: '30px 0' }}>お問い合わせ</h2>
            </div>
            <p style={{ fontSize: '1.3rem', color: 'var(--game-silver)' }}>お気軽にご相談ください！</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            <div className="game-card" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)' 
            }}>
              <div style={{ textAlign: 'center' }}>
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
                  📞
                </div>
                <div className="game-badge" style={{ marginBottom: '15px' }}>📞 PHONE SUPPORT</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>お電話</h3>
                <p style={{ 
                  fontSize: '1.5rem', 
                  color: 'var(--game-blue)', 
                  fontWeight: 'bold' 
                }}>
                  018-838-6462
                </p>
                <p>平日 10:00〜18:00</p>
                <div className="progress-bar" style={{ marginTop: '20px' }}>
                  <div 
                    className="progress-fill" 
                    style={{ width: '120%' }} 
                    data-progress="電話対応クオリティ 120%"
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="game-card" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 20px', 
                  background: '#00C851', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2.5rem' 
                }}>
                  💬
                </div>
                <div className="game-badge" style={{ 
                  background: '#00C851', 
                  marginBottom: '15px' 
                }}>
                  💬 LINE SUPPORT
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>LINE</h3>
                <a 
                  href="https://lin.ee/lGK9c4Nx" 
                  style={{ 
                    background: '#00C851', 
                    color: 'white', 
                    padding: '15px 40px', 
                    borderRadius: '30px', 
                    textDecoration: 'none', 
                    display: 'inline-block', 
                    fontWeight: 'bold', 
                    transition: 'all 0.3s' 
                  }} 
                  target="_blank" 
                  rel="noopener"
                >
                  LINEで相談
                </a>
                <p style={{ marginTop: '15px' }}>24時間受付</p>
                <div className="progress-bar" style={{ marginTop: '20px' }}>
                  <div 
                    className="progress-fill" 
                    style={{ width: '120%' }} 
                    data-progress="LINE迅速返信 120%"
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="game-card" style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(10px)' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  margin: '0 auto 20px', 
                  background: 'var(--gradient-sunset)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2.5rem' 
                }}>
                  📧
                </div>
                <div className="game-badge" style={{ 
                  background: 'var(--gradient-sunset)', 
                  marginBottom: '15px' 
                }}>
                  📧 EMAIL SUPPORT
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>メール</h3>
                <p style={{ 
                  fontSize: '1.3rem', 
                  color: 'var(--game-orange)', 
                  fontWeight: 'bold' 
                }}>
                  info@if-juku.net
                </p>
                <p>24時間受付</p>
                <div className="progress-bar" style={{ marginTop: '20px' }}>
                  <div 
                    className="progress-fill" 
                    style={{ width: '120%' }} 
                    data-progress="メール詳細対応 120%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;