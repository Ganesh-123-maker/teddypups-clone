import { notFound } from 'next/navigation';
import Link from 'next/link';
import { puppies, whatsappLink } from '../../../data/puppies';
import { EnquiryForm } from '../../../components/EnquiryForm';

export function generateStaticParams() {
  return puppies.map((p) => ({ slug: p.slug }));
}

export default function PuppyPage({ params }: { params: { slug: string } }) {
  const puppy = puppies.find((p) => p.slug === params.slug);
  if (!puppy) notFound();
  const index = puppies.indexOf(puppy);
  const prev = index > 0 ? puppies[index - 1] : undefined;
  const next = index < puppies.length - 1 ? puppies[index + 1] : undefined;

  return (
    <section className="section">
      <div className="container">
        <p className="meta">
          <Link href="/puppies">Available puppies</Link> / {puppy.title}
        </p>
        <div className="detail-grid" style={{ marginTop: 18 }}>
          <div>
            <p className="eyebrow">hello, it&apos;s me</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="detail-img" src={puppy.image} alt={`${puppy.title}, ${puppy.breed} puppy`} />
          </div>
          <div>
            <h1 style={{ margin: '6px 0' }}>
              {puppy.title}, {puppy.breed} puppy
            </h1>
            <div className="spec">
              <div><b>Breed</b>{puppy.breed}</div>
              <div><b>Sex</b>{puppy.sex}</div>
              <div><b>Age</b>{puppy.ageLabel}</div>
            </div>
            <p className="meta">
              <strong>Where:</strong>{' '}
              {puppy.origin === 'imported' ? 'Imported for you' : 'In our Dubai showroom'}
            </p>
            <span className="badge">Available</span>
            {puppy.hasVideo && <span className="badge badge-video">▶ with video</span>}
            <p>
              {puppy.origin === 'imported'
                ? 'Exclusive Korean teacup puppy, delivered. We handle the import, health checks and documentation.'
                : 'Available in our Downtown Dubai showroom — come meet this puppy before you decide.'}
            </p>
            <ul>
              <li>Vet-checked &amp; healthy — vaccinated, dewormed, verified health certificate</li>
              <li>Real photos of the actual puppy</li>
              <li>Support 24/7, from choosing to post-delivery</li>
            </ul>
            <a className="btn btn-green" href={whatsappLink(`Hi TeddyPups! I'd love to know more about ${puppy.title} (${puppy.breed}, ${puppy.sex}, ${puppy.ageLabel}).`)}>
              Ask about {puppy.title} on WhatsApp
            </a>{' '}
            <a className="btn btn-light" href="#enquiry">Send an enquiry</a>
          </div>
        </div>

        <div style={{ marginTop: 44 }}>
          <p className="eyebrow">what comes with {puppy.title}</p>
          <h2>Every Teddy Pup comes</h2>
          <ul>
            <li>Vaccinated</li>
            <li>Dewormed</li>
            <li>Verified health certificate</li>
            <li>Thoroughly checked</li>
          </ul>
        </div>

        <div style={{ marginTop: 44 }}>
          <p className="eyebrow">the way home</p>
          <h2>Coming home from abroad</h2>
          <ol className="steps-list">
            <li><strong>Reserve your puppy</strong> — Tell us which puppy has captured your heart.</li>
            <li><strong>Personalized consultation</strong> — We finalize details with you and share updates on your puppy&apos;s journey.</li>
            <li><strong>Import and arrival</strong> — We manage health checks, travel arrangements, and documentation.</li>
            <li><strong>Welcome home</strong> — We help your new puppy settle in and ensure a smooth transition into your home.</li>
          </ol>
        </div>

        <div style={{ marginTop: 36 }} id="enquiry">
          <p className="eyebrow">dear TeddyPups…</p>
          <h2>Ask about {puppy.title}</h2>
          <p>Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.</p>
          <EnquiryForm puppyTitle={puppy.title} />
        </div>

        <div className="cta-row" style={{ marginTop: 32 }}>
          {prev && <Link className="btn btn-light" href={`/puppies/${prev.slug}`}>← Previous pup: {prev.title}</Link>}
          {next && <Link className="btn btn-light" href={`/puppies/${next.slug}`}>Next pup: {next.title} →</Link>}
        </div>
      </div>
    </section>
  );
}
