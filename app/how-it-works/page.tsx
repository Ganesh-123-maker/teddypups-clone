import Link from 'next/link';

export const metadata = { title: 'How it works | TeddyPups U.A.E.' };

function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="steps-list">
      {items.map((s, i) => (
        <li key={s.title}>
          <strong>Step {i + 1} — {s.title}</strong>
          <br />
          {s.text}
        </li>
      ))}
    </ol>
  );
}

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">choose your way</p>
        <h1 id="two-ways">Two ways home</h1>
        <p className="meta">
          <a href="#two-ways">1 Two ways home</a> · <a href="#promise">2 Our premium puppy promise</a> ·{' '}
          <a href="#delivery">3 Delivery &amp; collection</a> · <a href="#why">4 Why choose us</a>
        </p>
        <div className="two-col">
          <div className="panel">
            <h2>Meet your puppy in person</h2>
            <p>
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy
              face-to-face. We source healthy, well-socialized puppies from trusted local breeders,
              ensuring they&apos;re raised with care, proper nutrition, and veterinary checks.
            </p>
            <Steps
              items={[
                { title: 'Explore our puppies', text: 'Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information.' },
                { title: 'Choose your puppy', text: 'Once you find a puppy you love, open their profile for more information or to enquire further.' },
                { title: 'Meet before you choose', text: 'Spend time bonding before making your decision.' },
                { title: 'Pick-up or delivery', text: 'Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable.' },
              ]}
            />
          </div>
          <div className="panel">
            <h2>Order upon request</h2>
            <p>
              Looking for a truly exceptional companion? Our Order Upon Request service gives you
              access to some of the world&apos;s most sought-after teacup breeds — ethically sourced
              from the most reputable, certified breeders across Europe, Korea, and beyond.
            </p>
            <Steps
              items={[
                { title: 'Reserve your puppy', text: 'Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart.' },
                { title: 'Personalized consultation', text: 'Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy\'s journey.' },
                { title: 'Import and arrival', text: 'We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation.' },
                { title: 'Welcome home', text: 'Upon arrival, we provide support to help your new puppy acclimate to their new environment.' },
              ]}
            />
          </div>
        </div>

        <h2 style={{ marginTop: 40 }} id="promise">Our premium puppy promise</h2>
        <ul>
          <li><strong>Hand-selected breeders</strong> — We work only with breeders who uphold the highest ethical and health standards.</li>
          <li><strong>Full transparency</strong> — Photos, videos, and health certificates are shared before your puppy travels.</li>
          <li><strong>Safe, stress-free delivery</strong> — We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you.</li>
        </ul>

        <h2 id="delivery">Delivery &amp; collection</h2>
        <p>From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.</p>
        <div className="steps">
          <div className="step"><h3>Take your puppy home the same day</h3><p>Local puppies are available immediately — visit, fall in love, and go home together.</p></div>
          <div className="step"><h3>Delivery within Dubai</h3><p>Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably.</p></div>
          <div className="step"><h3>Safe international cargo</h3><p>We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free.</p></div>
        </div>
        <p style={{ marginTop: 20 }}>We safely deliver puppies to loving homes all around the world.</p>

        <h2 id="why">Why choose us</h2>
        <p>
          We&apos;re here to help you find a new family member. From the moment you visit our site to
          the joyful day your puppy arrives at your door, we&apos;re with you every step of the way.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/puppies">Meet the puppies</Link>
        </div>
      </div>
    </section>
  );
}
