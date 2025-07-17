import React from 'react';

const SafetySupport: React.FC = () => {
  return (
    <section className="section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="game-badge">🛡️ SAFETY SUPPORT</div>
          <h2 style={{ fontSize: '3rem', margin: '30px 0' }}>安全・安心サポート</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          <div className="game-card">
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-blue)', 
              marginBottom: '15px' 
            }}>
              🔒 安全なオンライン環境
            </h4>
            <p>専用のDiscordサーバーで、講師が常に見守る安全な学習環境を提供。保護者の方も安心です。</p>
          </div>
          <div className="game-card">
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-green)', 
              marginBottom: '15px' 
            }}>
              📞 充実のサポート体制
            </h4>
            <p>授業中はもちろん、授業外でも質問可能。分からないことはすぐに解決できます。</p>
          </div>
          <div className="game-card">
            <h4 style={{ 
              fontSize: '1.5rem', 
              color: 'var(--game-purple)', 
              marginBottom: '15px' 
            }}>
              👨‍👩‍👧‍👦 保護者との連携
            </h4>
            <p>定期的な進捗報告と面談で、お子様の成長を保護者の方と共有します。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySupport;