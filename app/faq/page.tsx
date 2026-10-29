'use client';

import { useState } from 'react';

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
  {
    q: 'What comes with every Teddy Pup?',
    a: 'Vaccinated, dewormed, verified health certificate, and thoroughly checked by licensed vets.',
  },
  {
    q: 'How does ordering an imported puppy work?',
    a: 'Reserve your puppy, have a personalized consultation, then we manage health checks, travel arrangements and documentation before a welcome-home handover.',
  },
  {
    q: 'Do you deliver outside Dubai?',
    a: 'Yes — delivery within Dubai, safe international cargo, and worldwide delivery are all part of the service.',
  },
];

export default function FaqPage() {
  const [query, setQuery] = useState('');
  const filtered = faqs.filter(
    (f) => !query || `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">questions &amp; answers</p>
        <h1>Questions, answered</h1>
        <div className="filters">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Sniff out a question…"
            aria-label="Search questions"
          />
        </div>
        {filtered.length === 0 ? (
          <p>No questions match that search — try a different word.</p>
        ) : (
          filtered.map((f) => (
            <details key={f.q} open>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))
        )}
      </div>
    </section>
  );
}
