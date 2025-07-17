import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      background: 'rgba(0, 0, 0, 0.8)', 
      padding: '40px 20px', 
      textAlign: 'center' 
    }}>
      <div className="container mx-auto">
        <h3 style={{ 
          color: 'var(--game-gold)', 
          marginBottom: '20px', 
          fontSize: '1.5rem' 
        }}>
          if(Tech) - マイクラで学ぶ未来スキル
        </h3>
        
        <p style={{ marginBottom: '10px' }}>
          運営：東成瀬テックソリューションズ株式会社
        </p>
        
        <p style={{ color: 'var(--game-silver)', fontSize: '0.9rem' }}>
          © 2024 if(Tech). All rights reserved.
        </p>
        
        <div style={{ marginTop: '20px' }}>
          <a 
            href="/privacy" 
            style={{ 
              color: 'var(--game-silver)', 
              marginRight: '20px', 
              textDecoration: 'none' 
            }}
          >
            プライバシーポリシー
          </a>
          <a 
            href="/terms" 
            style={{ 
              color: 'var(--game-silver)', 
              textDecoration: 'none' 
            }}
          >
            利用規約
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;