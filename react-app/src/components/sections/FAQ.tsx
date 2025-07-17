import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  label: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      category: "👶 BEGINNER FRIENDLY",
      question: "パソコン未経験でも大丈夫ですか？",
      answer: "もちろん大丈夫です！最初はマウスの使い方から丁寧にサポートします。講師が画面共有でリアルタイムに操作をお手伝いするので、安心してご参加ください。",
      label: "初心者サポート 120%"
    },
    {
      category: "👥 SMALL CLASS",
      question: "何名クラスですか？",
      answer: "少人数制で、先生1人に対して生徒4〜6名程度です。一人ひとりにしっかりと目が届く環境で、質問もしやすい人数設定にしています。",
      label: "少人数制効果 120%"
    },
    {
      category: "⏰ FLEXIBLE SCHEDULE",
      question: "曜日・時間はどうなっていますか？",
      answer: "毎週木曜日の17:00〜18:00を基本としていますが、お子さまのスケジュールに合わせて調整可能です。詳しくは体験時にご相談ください。",
      label: "スケジュール調整 120%"
    },
    {
      category: "💰 PRICING INFO",
      question: "料金はどのくらいですか？",
      answer: "月額料金や詳しい料金体系については、無料体験時に詳しくご説明いたします。まずはお気軽に体験からお試しください。",
      label: "料金体系明瞭性 120%"
    },
    {
      category: "🎒 WHAT YOU NEED",
      question: "必要な持ち物はありますか？",
      answer: "パソコン（Windows・Mac問わず）とインターネット環境があれば参加可能です。マインクラフトのライセンスをお持ちでない場合は、体験時にサポート方法をご案内します。",
      label: "準備のお手軽さ 120%"
    },
    {
      category: "📝 TRIAL FLOW",
      question: "体験会の流れを教えてください",
      answer: "①Zoomでの簡単な挨拶・説明（10分）②マインクラフトの基本操作体験（20分）③コマンド体験（20分）④質疑応答・今後のご案内（10分）という流れで、計60分程度を予定しています。",
      label: "体験内容の充実度 120%"
    },
    {
      category: "💻 ONLINE COMMUNICATION",
      question: "オンライン授業でコミュニケーションは取れますか？",
      answer: "授業ではコミュニケーションツール『Discord』を使用し、講師や仲間たちと音声で会話しながら学習を進めます。チャットも併用できるので、オンラインでも質問しやすく、一人ひとりをしっかりサポートできる環境です。画面共有機能もあるので、講師が直接操作を見せたり、生徒の画面を確認しながら指導することも可能です。",
      label: "オンラインサポート 120%"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ 
      position: 'relative', 
      background: 'url(/images/tech34.png) center/cover no-repeat', 
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
          <div className="game-badge">❓ FAQ QUEST</div>
          <div className="section-title">
            <h2 className="game-title" style={{ fontSize: '3rem', margin: '30px 0' }}>よくある質問</h2>
          </div>
          <p style={{ fontSize: '1.3rem', color: 'var(--game-silver)' }}>
            気になる質問をクリックして回答を見てみよう！
          </p>
        </div>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          {faqItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <div 
                className="accordion-header" 
                onClick={() => toggleFAQ(index)}
                style={{
                  cursor: 'pointer',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div 
                    className="game-badge" 
                    style={{ 
                      marginBottom: '10px', 
                      fontSize: '0.9rem',
                      background: 'var(--gradient-mint)'
                    }}
                  >
                    {item.category}
                  </div>
                  <h4 className="accordion-title" style={{ fontSize: '1.2rem', margin: 0 }}>
                    {item.question}
                  </h4>
                </div>
                <div 
                  className="accordion-icon" 
                  style={{
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    fontSize: '1.5rem'
                  }}
                >
                  ▼
                </div>
              </div>
              
              {activeIndex === index && (
                <div className="accordion-content">
                  <div className="accordion-content-inner" style={{ padding: '20px' }}>
                    <p style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.8', 
                      marginBottom: '20px' 
                    }}>
                      {item.answer}
                    </p>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: '120%' }} 
                        data-progress={item.label}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;