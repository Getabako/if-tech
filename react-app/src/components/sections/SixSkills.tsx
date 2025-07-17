import React, { useState } from 'react';

interface Skill {
  title: string;
  description: string;
  color: string;
  future: string;
  modalContent: {
    power: string;
    applications: string[];
    futureConnections: string;
    dreamJobs: string[];
  };
}

const SixSkills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    { 
      title: '論理的思考力', 
      description: 'プログラミングで身につく筋道立てた考え方',
      color: 'var(--game-blue)',
      future: 'システムエンジニア・研究者',
      modalContent: {
        power: '複雑な問題を段階的に分解し、筋道立てて解決策を見つける力。マインクラフトでレッドストーン回路を組むように、一つ一つの要素を整理して、最適な答えにたどり着く思考プロセスです。',
        applications: [
          '学校の数学や理科の問題がスラスラ解けるように',
          '将来の進路選択で冷静に判断できる力に',
          '複雑な人間関係の問題も整理して解決',
          'ゲームの攻略法を効率よく見つける能力'
        ],
        futureConnections: 'この力があれば、AIエンジニア、データサイエンティスト、医師、弁護士、研究者など、「考える力」が重要な職業で大活躍！論理的思考は全ての学問の基礎となり、どんな分野に進んでも強力な武器になります。',
        dreamJobs: ['AIエンジニア', 'データサイエンティスト', '医師', '弁護士', '研究者', 'システムアナリスト', '数学者', '宇宙飛行士']
      }
    },
    { 
      title: '創造力', 
      description: 'アイデアを形にする楽しさを体験',
      color: 'var(--game-pink)',
      future: 'ゲームクリエイター・デザイナー',
      modalContent: {
        power: '頭の中にある「こんなのがあったらいいな」を実際の形にする魔法のような力。マインクラフトで夢の建物を作るように、想像したものを現実にする創造のエネルギーです。',
        applications: [
          '学校の図工や美術で独創的な作品を制作',
          '友達をワクワクさせるゲームやおもちゃのアイデア',
          '身の回りの不便を解決する新しいアイテムの発明',
          'YouTubeやSNSで人を楽しませるコンテンツ作り'
        ],
        futureConnections: 'クリエイティブな職業は今後ますます価値が高まります！ゲームクリエイター、映画監督、建築家、ファッションデザイナー、起業家など、「新しいものを生み出す」仕事で世界を驚かせることができるかも！',
        dreamJobs: ['ゲームクリエイター', '映画監督', '建築家', 'ファッションデザイナー', '起業家', 'アニメーター', '小説家', '発明家']
      }
    },
    { 
      title: '問題解決力', 
      description: 'バグを見つけて修正する力',
      color: 'var(--game-green)',
      future: 'プロジェクトマネージャー・コンサルタント',
      modalContent: {
        power: 'どんな困った状況でも「きっと解決策がある！」と諦めずに挑戦し続ける力。バグを見つけて直すように、問題の原因を突き止めて、必ず答えを見つけ出すヒーローのような能力です。',
        applications: [
          '学校の宿題や課題で行き詰まっても必ず解決法を見つける',
          '友達とのケンカやトラブルを上手に仲裁',
          '家族の困りごとを創意工夫で解決',
          '部活動やチーム活動で起きる問題をスマートに解決'
        ],
        futureConnections: '問題解決力は全ての職業で求められるスーパースキル！コンサルタント、経営者、医師、エンジニア、教師など、人や社会の課題を解決する仕事で、みんなから頼りにされる存在になれます。',
        dreamJobs: ['経営コンサルタント', '会社経営者', '医師', 'エンジニア', '教師', '警察官', '消防士', '国際機関職員']
      }
    },
    { 
      title: '発信力', 
      description: '自分の考えを相手に分かりやすく伝える力',
      color: 'var(--game-yellow)',
      future: 'チームリーダー・起業家',
      modalContent: {
        power: '自分の考えやアイデアを相手に分かりやすく、魅力的に伝える力。マインクラフトで作った作品をみんなに説明するように、自分の想いを言葉や表現で相手に届ける「伝える魔法」です。',
        applications: [
          '学校の発表で堂々と自分の意見を伝える',
          'YouTubeやSNSで多くの人に影響を与える',
          '友達に新しいゲームのルールを分かりやすく説明',
          'プレゼンテーションで聞く人をワクワクさせる'
        ],
        futureConnections: 'デジタル時代では「伝える力」がますます重要に！YouTuber、インフルエンサー、営業、政治家、起業家、アナウンサーなど、多くの人に影響を与える仕事で大活躍できます。',
        dreamJobs: ['YouTuber', 'インフルエンサー', '営業マン', '政治家', '起業家', 'アナウンサー', '外交官', 'プレゼンター']
      }
    },
    { 
      title: '発想力', 
      description: '新しいアイデアを生み出す力',
      color: 'var(--game-orange)',
      future: 'イノベーター・発明家',
      modalContent: {
        power: '誰も思いつかないような「面白いアイデア」を次々と生み出す力。まるで魔法使いのように、普通のことを特別なことに変える、ワクワクするような発想の泉です。',
        applications: [
          '学校の自由研究で誰も思いつかないテーマを発見',
          '友達と遊ぶときに新しいゲームを考案',
          '日常の「もっとこうだったらいいのに」を形にする',
          'SNSでバズるようなユニークなコンテンツ作り'
        ],
        futureConnections: '新しいアイデアは世界を変える力を持っています！発明家、起業家、商品企画、マーケティング、芸術家など、「今までにないもの」を生み出す仕事で、社会に革命を起こすかもしれません！',
        dreamJobs: ['発明家', '起業家', '商品企画', 'マーケティング', '芸術家', '作詞作曲家', '脚本家', 'イノベーター']
      }
    },
    { 
      title: '実行力', 
      description: '考えたことを実際に作り上げる力',
      color: 'var(--game-purple)',
      future: 'プロダクトマネージャー・実業家',
      modalContent: {
        power: '「やってみよう！」と思ったことを最後まで やり抜く力。夢や目標を現実にする行動力で、マインクラフトで設計図を実際の建物にするように、アイデアを形にする実現力です。',
        applications: [
          '夏休みの計画を立てて、最後まで実行する',
          '苦手な科目も諦めずに継続して克服',
          '友達と約束したことを必ず守り、信頼を築く',
          '部活や習い事で目標を設定し、達成する'
        ],
        futureConnections: 'どんなに良いアイデアも、実行されなければ意味がありません！プロジェクトマネージャー、起業家、スポーツ選手、研究者など、「結果を出す」ことが求められる仕事で、必ず成功できる力です。',
        dreamJobs: ['プロジェクトマネージャー', '起業家', 'スポーツ選手', '研究者', '建築家', '医師', '料理人', '農業家']
      }
    }
  ];

  const openModal = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <section className="section" style={{ 
        position: 'relative', 
        background: 'url(/images/tech14.png) center/cover no-repeat', 
        minHeight: '1000px' 
      }}>
        <div className="container mx-auto text-center">
          <h2 className="game-title" style={{ 
            fontSize: '2.5rem', 
            margin: '30px 0 50px',
            textAlign: 'center',
            textShadow: '2px 2px 0px rgba(255,255,255,0.8), -2px -2px 0px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.8)'
          }}>
            身につく6つのスキル
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card clickable-skill" 
                style={{ 
                  animation: `slideInBottom 0.8s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => openModal(skill)}
              >
                {/* 光る装飾エフェクト */}
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  background: `linear-gradient(45deg, ${skill.color}, rgba(255,255,255,0.5), ${skill.color})`,
                  borderRadius: '20px',
                  opacity: 0,
                  zIndex: -1,
                  transition: 'opacity 0.3s ease',
                  animation: 'gradientShift 3s ease infinite',
                  backgroundSize: '200% 200%'
                }} className="skill-glow"></div>
                
                <h3 style={{ 
                  color: skill.color, 
                  marginBottom: '20px',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  textShadow: `0 0 10px ${skill.color}`
                }}>
                  {skill.title}
                </h3>
                
                <div className="progress-bar" style={{ marginTop: '20px' }}>
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: '120%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color})`
                    }}
                    data-progress={skill.future}
                  ></div>
                </div>
                
                {/* クリック促進ボタン */}
                <div style={{
                  marginTop: '15px',
                  padding: '10px 20px',
                  background: `linear-gradient(45deg, ${skill.color}, rgba(255,255,255,0.2))`,
                  borderRadius: '25px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  boxShadow: `0 4px 15px rgba(0,0,0,0.3), 0 0 20px ${skill.color}30`,
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  🚀 未来を見てみる
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* モーダル */}
      {selectedSkill && (
        <div 
          className="skill-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            style={{
              background: `linear-gradient(135deg, ${selectedSkill.color}20, rgba(15, 15, 30, 0.95))`,
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: `3px solid ${selectedSkill.color}`,
              boxShadow: `0 0 50px ${selectedSkill.color}50`,
              animation: 'modalSlideIn 0.5s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              ×
            </button>

            {/* タイトル */}
            <h2 style={{
              fontSize: '3rem',
              color: selectedSkill.color,
              textAlign: 'center',
              marginBottom: '30px',
              textShadow: `0 0 20px ${selectedSkill.color}`,
              animation: 'glow 2s ease-in-out infinite'
            }}>
              {selectedSkill.title}
            </h2>

            {/* 能力説明 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '25px',
              marginBottom: '30px',
              border: `2px solid ${selectedSkill.color}30`
            }}>
              <h3 style={{
                color: selectedSkill.color,
                fontSize: '1.8rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                ✨ この力の正体は？
              </h3>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.8',
                textAlign: 'center'
              }}>
                {selectedSkill.modalContent.power}
              </p>
            </div>

            {/* 日常での活用例 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '25px',
              marginBottom: '30px',
              border: `2px solid ${selectedSkill.color}30`
            }}>
              <h3 style={{
                color: selectedSkill.color,
                fontSize: '1.8rem',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                🎯 こんなところで役に立つ！
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '15px'
              }}>
                {selectedSkill.modalContent.applications.map((app, index) => (
                  <div key={index} style={{
                    background: `${selectedSkill.color}20`,
                    padding: '15px',
                    borderRadius: '10px',
                    border: `1px solid ${selectedSkill.color}50`,
                    fontSize: '1.1rem'
                  }}>
                    💡 {app}
                  </div>
                ))}
              </div>
            </div>

            {/* 将来への繋がり */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '25px',
              marginBottom: '30px',
              border: `2px solid ${selectedSkill.color}30`
            }}>
              <h3 style={{
                color: selectedSkill.color,
                fontSize: '1.8rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                🌟 未来への無限の可能性！
              </h3>
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.8',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                {selectedSkill.modalContent.futureConnections}
              </p>
            </div>

            {/* 夢の職業 */}
            <div style={{
              background: `linear-gradient(45deg, ${selectedSkill.color}30, ${selectedSkill.color}10)`,
              borderRadius: '15px',
              padding: '25px',
              marginBottom: '20px',
              border: `2px solid ${selectedSkill.color}`
            }}>
              <h3 style={{
                color: selectedSkill.color,
                fontSize: '1.8rem',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                🚀 こんな仕事に就けるかも！
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '10px'
              }}>
                {selectedSkill.modalContent.dreamJobs.map((job, index) => (
                  <div key={index} style={{
                    background: selectedSkill.color,
                    color: 'white',
                    padding: '10px 15px',
                    borderRadius: '25px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    boxShadow: `0 4px 15px ${selectedSkill.color}50`,
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`
                  }}>
                    {job}
                  </div>
                ))}
              </div>
            </div>

            {/* 体験申込みボタン */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <a
                href="#contact"
                onClick={closeModal}
                style={{
                  display: 'inline-block',
                  background: `linear-gradient(45deg, ${selectedSkill.color}, rgba(255,255,255,0.2))`,
                  color: 'white',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  boxShadow: `0 8px 25px ${selectedSkill.color}50`,
                  transition: 'all 0.3s ease',
                  animation: 'float 2s ease-in-out infinite'
                }}
              >
                🎯 この力を身につけたい！無料体験へ
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SixSkills;