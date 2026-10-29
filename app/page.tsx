import Link from 'next/link';
import { puppies, SHOWROOM_IMAGE, whatsappLink } from '../data/puppies';
import { PuppyCard } from '../components/PuppyCard';

const faqs = [
  {
    q: 'Are your puppies vaccinated and health-checked?',
    a: 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.',
  },
  {
    q: 'Can I meet a puppy before I decide?',
    a: 'Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.',
  },
  {
    q: 'Can I take my puppy home the same day?',
    a: 'Local puppies are available immediately, so you can take your puppy home the same day.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">every puppy is family</p>
            <h1>Premium teacup puppies in Dubai</h1>
            <p>
              Meet your new best friend in our Dubai showroom, or order a rare miniature breed from
              trusted breeders worldwide.
            </p>
            <div className="cta-row">
              <Link className="btn" href="/puppies">View available puppies</Link>
              <a className="btn btn-light" href={whatsappLink("Hi TeddyPups! I'd love to know more about your puppies.")}>Enquire on WhatsApp</a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-img" src={puppies[0].image} alt="Max, male Maltipoo puppy" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">from Teddy&apos;s sketchbook</p>
          <h2>Available puppies</h2>
          <p className="lead">
            Every listing shows real photos of the actual puppy. Open a profile to see them all, then
            ask us about them on WhatsApp.
          </p>
          <div className="grid">
            {puppies.map((p) => (
              <PuppyCard key={p.slug} puppy={p} />
            ))}
          </div>
          <div className="cta-row">
            <Link className="btn" href="/puppies">Meet them all</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Two ways to meet your puppy</h2>
          <div className="two-col">
            <div className="panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SHOWROOM_IMAGE} alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom" />
              <h3>Puppies in Dubai</h3>
              <p>In our showroom</p>
              <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
              <Link className="btn" href="/puppies?origin=local">Meet local puppies</Link>
            </div>
            <div className="panel">
              <h3>Imported for you</h3>
              <p>Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders and let us handle the import.</p>
              <Link className="btn" href="/puppies?origin=imported">See imported puppies</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">a premium, step-by-step concierge experience</p>
          <h2>Your puppy journey</h2>
          <p className="lead">We make adoption simple, secure, and purely joyful.</p>
          <div className="steps">
            <div className="step"><div className="step-num">1</div><h3>Choose your breed</h3><p>Select your preferred breed or tell us what you&apos;re looking for. We&apos;ll guide you based on availability and your lifestyle.</p></div>
            <div className="step"><div className="step-num">2</div><h3>Get photos &amp; details</h3><p>Our team will share real photos, health details, and all necessary information directly on WhatsApp.</p></div>
            <div className="step"><div className="step-num">3</div><h3>Secure &amp; safe delivery</h3><p>Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.</p></div>
          </div>
          <div className="cta-row">
            <Link className="btn btn-light" href="/how-it-works">How it works</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trust">
            <div>✓ Vet-checked &amp; healthy — vaccinated, dewormed, with a verified health certificate.</div>
            <div>✓ Korea to Dubai, safely — trusted breeders, safe travel, premium care.</div>
            <div>✓ Support 24/7 — from choosing your puppy to post-delivery support.</div>
            <div>✓ Trusted by families worldwide — puppies delivered to loving homes all around the world.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote">
            <h2>Happy families &amp; puppies</h2>
            <blockquote>
              “TeddyPups truly made our dream a reality. They supported us at every step of the import
              journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7
              support throughout the process gave us complete peace of mind.”
            </blockquote>
            <p>Sarah M., Dubai, UAE</p>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <h2>Questions, answered</h2>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <div className="cta-row">
            <Link className="btn btn-light" href="/faq">Read all questions</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 style={{ marginTop: 0 }}>Ready to meet your new best friend?</h2>
              <p>
                Bring home a healthy, happy teacup or designer puppy with expert guidance every step
                of the way, and smooth, safe delivery across the UAE.
              </p>
            </div>
            <a className="btn btn-green" href={whatsappLink("Hi TeddyPups! I'd love to know more about your puppies.")}>
              Say hello on WhatsApp
            </a>
            <Link className="btn btn-light" href="/contact">Visit &amp; contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
