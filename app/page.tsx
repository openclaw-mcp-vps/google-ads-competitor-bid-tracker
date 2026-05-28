export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          PPC Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Track Competitor Google Ads{" "}
          <span className="text-[#58a6ff]">Bidding Strategies</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor competitor ad positions and estimate their bid amounts across your target keywords. Spot trends, outmaneuver rivals, and stop wasting budget on losing bids.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Ad Position Monitoring", desc: "See exactly where competitors rank for every keyword you care about, updated daily." },
            { title: "Bid Estimation Engine", desc: "Reverse-engineer competitor max CPC bids using position and Quality Score signals." },
            { title: "Trend Analysis", desc: "Historical charts reveal budget shifts, seasonal patterns, and campaign pauses." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Up to 500 tracked keywords",
              "Daily position & bid snapshots",
              "90-day trend history",
              "CSV export",
              "Email alerts on bid changes",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does bid estimation work?",
              a: "We analyze ad positions across multiple searches and apply Google's Ad Rank formula in reverse, factoring in average Quality Scores for your industry to estimate competitor max CPC bids."
            },
            {
              q: "How often is data refreshed?",
              a: "Keywords are scraped daily by default. High-priority keywords can be set to refresh every 6 hours on the Pro plan."
            },
            {
              q: "Is this against Google's Terms of Service?",
              a: "AdBidTracker uses publicly visible search result data only — the same information any user sees in a browser. No private Google Ads account data is accessed."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} AdBidTracker. All rights reserved.
      </footer>
    </main>
  );
}
