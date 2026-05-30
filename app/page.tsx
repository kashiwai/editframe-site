"use client";

import { useState, useEffect } from "react";

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050508]/90 backdrop-blur-xl border-b border-white/5" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">
          Edit<span className="gradient-text">Frame</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          {["Features","Studio","Pricing","FAQ"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <a href="https://editframe.app" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold transition-colors flex items-center gap-2">
          Get Started <IconArrow />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="animate-fade-up mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/70">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{animation:"pulse 2s infinite"}} />
        SNSのMIKATA — AI Content Studio
      </div>

      <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6" style={{animationDelay:"0.1s"}}>
        Create.<br />
        <span className="gradient-text">Go Viral.</span><br />
        Sell.
      </h1>

      <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-3 animate-fade-up" style={{animationDelay:"0.2s"}}>
        SNSで売れるコンテンツを、AIが量産する。
      </p>
      <p className="text-sm text-white/30 max-w-xl mb-10 animate-fade-up" style={{animationDelay:"0.2s"}}>
        台本生成からUGC動画量産、投稿スケジューリングまで。あなたのSNSマーケティングを、丸ごと自動化。
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-up" style={{animationDelay:"0.3s"}}>
        <a href="https://editframe.app"
          className="group px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all"
          style={{background:"linear-gradient(135deg,#6366f1,#7c3aed)", boxShadow:"0 8px 32px rgba(99,102,241,0.3)"}}>
          無料で始める
          <span className="group-hover:translate-x-1 transition-transform inline-block"><IconArrow /></span>
        </a>
        <button className="px-8 py-4 rounded-xl glass font-semibold text-base text-white/70 hover:text-white flex items-center gap-2 transition-all">
          <IconPlay /> デモを見る
        </button>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 text-center animate-fade-up" style={{animationDelay:"0.4s"}}>
        {[["12+","AI Models"],["1/10","Cost vs Others"],["5min","Lipsync Support"]].map(([n,l]) => (
          <div key={l}>
            <div className="text-3xl md:text-4xl font-black gradient-text">{n}</div>
            <div className="text-xs text-white/35 mt-1 uppercase tracking-widest">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const MODELS = ["Kling v3","Sora 2","Veo 3.1","LTX 2.3","Wan 2.5","Midjourney","Flux Pro","Hailuo","Luma Ray","Dreamina","Ideogram","LatentSync"];
function ModelStrip() {
  const d = [...MODELS,...MODELS];
  return (
    <div className="py-12 border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-white/20 mb-6">Powered by the world's best AI models</p>
      <div className="flex animate-marquee whitespace-nowrap">
        {d.map((m,i) => (
          <span key={i} className="inline-flex items-center mx-8 text-sm font-semibold text-white/25 hover:text-white/50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mr-3" />{m}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({icon,title,sub,desc,tag}:{icon:string;title:string;sub:string;desc:string;tag?:string}) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
      {tag && <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">{tag}</span>}
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-indigo-300/80 font-medium mt-0.5">{sub}</p>
      </div>
      <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Everything you need</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          One platform.<br /><span className="gradient-text">Infinite content.</span>
        </h2>
        <p className="mt-4 text-white/35 max-w-lg mx-auto">SNSで勝つために必要なツールが、すべて揃っている。</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeatureCard icon="🎬" title="SNS Studio" sub="台本 → 動画 → 投稿、全自動" desc="テーマを入力するだけでバズる台本を生成。アバター動画化して投稿まで。フック・本題・CTAの構成も自動最適化。" tag="New" />
        <FeatureCard icon="🛒" title="Marketing Studio" sub="商品URL → UGC動画 × 10本" desc="商品URLを貼るだけでリアルな口コミ風UGC動画を量産。広告素材もキャプションも自動生成。A/Bテスト用バリエーションも一括で。" tag="Hot" />
        <FeatureCard icon="🔥" title="250名バズ設計" sub="近しい人から、バズを設計する" desc="近しい250名に刺さるコンテンツをAIが設計。250名が各フォロワーにシェアすることで指数関数的に広がるバズを仕組み化。" tag="Unique" />
        <FeatureCard icon="🎭" title="Lipsync Studio" sub="5分音声対応・チャンク自動分割" desc="LTXチャンクモードで最大5分の長尺リップシンクに対応。20秒ずつ自動分割して順番生成。シームレスな連続再生で確認も快適。" />
        <FeatureCard icon="⚡" title="AI Image & Video" sub="12+ モデルをワンプレイスで" desc="Kling・Sora・Veo・Flux・Midjourneyなど最新AIを一か所で。ポイント制で使った分だけ課金。モデルごとに別契約不要。" />
        <FeatureCard icon="🔄" title="Workflow Builder" sub="生成フローを自動化" desc="画像生成→動画化→リップシンクの連鎖をワークフローで自動化。バッチ処理で大量案件も並行処理。物販・EC連動にも対応。" />
      </div>
    </section>
  );
}

function StudioSection() {
  const steps = [
    {n:"01",title:"テーマ or 商品を入力",desc:"キーワードや商品URLを入れるだけ。"},
    {n:"02",title:"AIが台本を生成",desc:"フック・本題・CTAを自動設計。バイラル要素も組み込む。"},
    {n:"03",title:"動画に変換",desc:"アバターまたはUGCスタイルで即座に動画化。"},
    {n:"04",title:"投稿 & 分析",desc:"最適な時間にスケジュール投稿。パフォーマンスをAIが解析。"},
  ];
  return (
    <section id="studio" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">SNS Studio</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            From idea to post.<br /><span className="gradient-text-warm">In minutes.</span>
          </h2>
          <p className="mt-4 text-white/35 max-w-lg mx-auto">アイデアから投稿まで、数分で完結。</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {steps.map((s,i) => (
            <div key={s.n} className="relative">
              {i < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent z-10" />}
              <div className="glass rounded-2xl p-6">
                <div className="text-4xl font-black gradient-text opacity-40 mb-4">{s.n}</div>
                <h3 className="font-bold mb-2 text-sm">{s.title}</h3>
                <p className="text-sm text-white/40">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* UGC callout */}
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-indigo-500/20">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Why UGC?</span>
            <h3 className="text-3xl md:text-4xl font-black mt-3 mb-4">
              広告より、<span className="gradient-text-warm">口コミが売れる。</span>
            </h3>
            <p className="text-white/45 leading-relaxed mb-6">
              UGCスタイルの動画は、通常の広告の<span className="text-white font-bold">4〜8倍</span>のエンゲージメント。<br />
              EditFrameなら、そのUGC動画をAIで量産できる。
            </p>
            <ul className="flex flex-col gap-2">
              {["リアルな口コミ風の演出で信頼感UP","商品・サービスを自然に訴求","TikTok/Reels/Shortsに最適化済み"].map(t=>(
                <li key={t} className="flex items-center gap-2 text-sm text-white/50">
                  <span className="text-emerald-400"><IconCheck /></span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-shrink-0">
            {["😊 リアル感","📱 縦型対応","🔁 量産可能","💰 広告費削減"].map(t=>(
              <div key={t} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-semibold text-white/60 text-center">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {name:"Starter",price:"¥1,000",pts:"1,000P",bonus:"",items:["画像生成 約150枚分","動画生成 約50本分","リップシンク 約30本分","ポイント有効期限なし"],cta:"始める",hi:false},
    {name:"Creator",price:"¥5,000",pts:"5,300P",bonus:"+6% ボーナス",items:["画像生成 約800枚分","動画生成 約260本分","リップシンク 約160本分","全AIモデル使い放題"],cta:"一番人気",hi:true},
    {name:"Pro",price:"¥20,000",pts:"23,000P",bonus:"+15% ボーナス",items:["画像生成 約3,400枚分","動画生成 約1,150本分","商用利用OK","優先サポート"],cta:"最大効率",hi:false},
  ];
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Pay as you go.<br /><span className="gradient-text">No subscriptions.</span>
          </h2>
          <p className="mt-4 text-white/35">月額なし。使った分だけ。ポイントの有効期限なし。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(p=>(
            <div key={p.name} className={`rounded-2xl p-7 flex flex-col gap-6 relative ${p.hi ? "border border-indigo-500/40" : "glass"}`}
              style={p.hi ? {background:"linear-gradient(160deg,rgba(99,102,241,0.15),rgba(124,58,237,0.1))",boxShadow:"0 0 40px rgba(99,102,241,0.1)"} : {}}>
              {p.hi && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full bg-indigo-600 text-white">Most Popular</span>}
              <div>
                <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">{p.name}</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-white/30 text-sm">/ 一括</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-bold gradient-text">{p.pts}</span>
                  {p.bonus && <span className="text-xs text-emerald-400 font-bold">{p.bonus}</span>}
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 flex-1">
                {p.items.map(item=>(
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/50">
                    <span className="text-emerald-400 flex-shrink-0"><IconCheck /></span>{item}
                  </li>
                ))}
              </ul>
              <a href="https://editframe.app"
                className={`text-center py-3 rounded-xl font-bold text-sm transition-all ${p.hi ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-white/8 hover:bg-white/12 text-white"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white/20 mt-8">ポイントに有効期限なし • 月額料金なし • 購入後すぐに使えます</p>
      </div>
    </section>
  );
}

const FAQS = [
  {q:"LTXリップシンクは何分まで対応していますか？",a:"最大5分まで対応。20秒チャンクに自動分割して生成・連続再生するので、長い台本でもそのまま使えます。"},
  {q:"UGC動画は商用利用できますか？",a:"Creatorプラン以上で商用利用OK。広告やSNS投稿に自由にお使いいただけます。"},
  {q:"どのAIモデルが使えますか？",a:"Kling・Sora・Veo・Flux・Midjourney・LTXなど12以上のモデルに対応。モデルごとに別契約不要で、ポイントを消費して使えます。"},
  {q:"ポイントの有効期限はありますか？",a:"ポイントに有効期限はありません。購入後はいつでもご利用いただけます。"},
  {q:"250名バズ設計機能とは何ですか？",a:"近しい250名（友人・フォロワー・同僚）に刺さるコンテンツをAIが設計。250名が各フォロワーにシェアすることで指数関数的な拡散を仕組み化します。"},
];
function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-white/25 text-sm uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-black">よくある質問</h2>
      </div>
      <div className="flex flex-col gap-2">
        {FAQS.map((f,i)=>(
          <div key={i} className="glass rounded-2xl overflow-hidden">
            <button onClick={()=>setOpen(open===i?null:i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left text-sm font-semibold hover:text-indigo-300 transition-colors">
              {f.q}
              <span className={`ml-4 flex-shrink-0 text-lg transition-transform duration-200 ${open===i?"rotate-45":""}`}>+</span>
            </button>
            {open===i && (
              <div className="px-6 pb-5 text-sm text-white/45 leading-relaxed border-t border-white/5 pt-4">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none" />
      <div className="max-w-2xl mx-auto text-center relative">
        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Your SNS.<br /><span className="gradient-text">Supercharged.</span>
        </h2>
        <p className="text-white/35 text-lg mb-10">今すぐ始めて、AIがあなたのSNSを変える。</p>
        <a href="https://editframe.app"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all"
          style={{background:"linear-gradient(135deg,#6366f1,#7c3aed)",boxShadow:"0 12px 40px rgba(99,102,241,0.35)"}}>
          無料で始める
          <span className="group-hover:translate-x-1 transition-transform inline-block"><IconArrow /></span>
        </a>
        <p className="mt-4 text-xs text-white/20">クレジットカード不要 • 登録30秒</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/20">
        <span className="font-bold text-white/50">Edit<span className="gradient-text">Frame</span></span>
        <span>© 2025 EditFrame. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy","Terms","Contact"].map(l=>(
            <a key={l} href={`/${l.toLowerCase()}`} className="hover:text-white/40 transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ModelStrip />
        <Features />
        <StudioSection />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
