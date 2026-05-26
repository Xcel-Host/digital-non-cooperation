import Footer from '../components/Footer'

export function PrivacyPage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">Privacy Policy</h1>
        <p className="text-xs text-[#aaa] mb-8">Last updated: January 2025</p>

        {[
          { title: 'What we collect', content: 'This platform does not collect personal data. We do not require registration, login, or any personal information to use the site. The participation counter stores only a count — no names, no emails, no identifying information.' },
          { title: 'Cookies', content: 'We do not use tracking cookies. We do not use advertising cookies. We may use a single anonymous session cookie to remember your theme preference (dark/light mode). No third-party tracking.' },
          { title: 'Analytics', content: 'We may use privacy-respecting analytics (Vercel Analytics or similar) that provide aggregate page view counts only — no individual user tracking, no IP logging, no behavioral profiling.' },
          { title: 'Third-party services', content: 'The site uses Google Fonts (loaded from Google CDN) which may log font requests per their privacy policy. We have no advertising partners and receive no revenue from advertising.' },
          { title: 'Your data', content: 'Since we collect no personal data, there is nothing to request, delete, or export. If you have concerns, contact us at the email below.' },
          { title: 'Contact', content: 'For any privacy-related questions: privacy@digitalnoncooperation.in' },
        ].map(s => (
          <div key={s.title} className="mb-6">
            <h2 className="text-sm font-bold text-offwhite mb-2">{s.title}</h2>
            <p className="text-xs text-[#aaa] leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  )
}

export function TermsPage() {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black tracking-tight text-offwhite mb-2">Terms of Use</h1>
        <p className="text-xs text-[#aaa] mb-8">Last updated: January 2025</p>

        {[
          { title: 'Purpose', content: 'Digital Non-Cooperation is an independent civic transparency platform. It is not affiliated with any political party, religious organisation, or foreign entity. Its sole purpose is consumer and corporate transparency education.' },
          { title: 'Information accuracy', content: 'We make every effort to ensure data accuracy. Brand ownership information is sourced from company filings, Forbes/Bloomberg data, and verified public records. If you find an error, please contact us.' },
          { title: 'Not legal or financial advice', content: 'Nothing on this platform constitutes legal, financial, or investment advice. Information about corporate ownership is for educational purposes only.' },
          { title: 'Non-partisan', content: 'This platform does not endorse any political party or candidate. References to political figures are solely in the context of corporate power and accountability — not electoral advocacy.' },
          { title: 'Non-violent principles', content: 'This platform is committed to non-violence. Any use of this platform\'s content to incite violence, harassment, or illegal activity is strictly prohibited and contrary to our founding principles.' },
          { title: 'Intellectual property', content: 'Platform content is available under Creative Commons (CC BY-NC-SA 4.0) — free to share and adapt for non-commercial purposes with attribution. The caricature illustrations used are user-submitted for civic commentary purposes (fair use/parody).' },
          { title: 'Disclaimer', content: 'The platform does not claim that any company or individual has acted illegally. Descriptions of corporate concentration are based on publicly available data and are matters of public record.' },
          { title: 'Contact', content: 'For any questions: contact@digitalnoncooperation.in' },
        ].map(s => (
          <div key={s.title} className="mb-6">
            <h2 className="text-sm font-bold text-offwhite mb-2">{s.title}</h2>
            <p className="text-xs text-[#aaa] leading-relaxed">{s.content}</p>
          </div>
        ))}

        <div className="mt-8 p-4 rounded-xl text-xs text-[#aaa]"
          style={{ background: '#111', border: '0.5px solid #1e1e1e' }}>
          © 2025–2026 Digital Non-Cooperation. Not propaganda. Not rage. Just clarity.<br />
          Non-violence · Non-cooperation · India First
        </div>
      </div>
      <Footer />
    </main>
  )
}
