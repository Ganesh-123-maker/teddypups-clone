'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { puppies } from '../../data/puppies';
import { PuppyCard } from '../../components/PuppyCard';

type Origin = 'all' | 'local' | 'imported';

function List() {
  const params = useSearchParams();
  const initial = params.get('origin') === 'imported' ? 'imported' : params.get('origin') === 'local' ? 'local' : 'all';
  const [origin, setOrigin] = useState<Origin>(initial);
  const [query, setQuery] = useState('');
  const [sex, setSex] = useState('all');
  const [breed, setBreed] = useState('all');

  const filtered = useMemo(() => {
    return puppies.filter((p) => {
      if (origin !== 'all' && p.origin !== origin) return false;
      if (sex !== 'all' && p.sex !== sex) return false;
      if (breed !== 'all' && !p.breed.includes(breed)) return false;
      if (query && !`${p.breed} ${p.title}`.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [origin, query, sex, breed]);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">from Teddy&apos;s sketchbook</p>
        <h1>Available puppies</h1>
        <p className="lead">
          Every listing shows real photos of the actual puppy. Open a profile to see them all, then
          ask us about them on WhatsApp.
        </p>
        <div className="filters">
          <button className={`chip ${origin === 'all' ? 'active' : ''}`} onClick={() => setOrigin('all')}>All</button>
          <button className={`chip ${origin === 'local' ? 'active' : ''}`} onClick={() => setOrigin('local')}>In Dubai</button>
          <button className={`chip ${origin === 'imported' ? 'active' : ''}`} onClick={() => setOrigin('imported')}>Imported</button>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search breed, e.g. Maltipoo" aria-label="Search breed" />
          <select value={breed} onChange={(e) => setBreed(e.target.value)} aria-label="Filter by breed">
            <option value="all">Any breed</option>
            <option value="Maltipoo">Maltipoo</option>
            <option value="Pomeranian">Pomeranian</option>
            <option value="Poodle">Poodle</option>
            <option value="Cavapoo">Cavapoo</option>
            <option value="Shih Tzu">Shih Tzu</option>
          </select>
          <select value={sex} onChange={(e) => setSex(e.target.value)} aria-label="Filter by sex">
            <option value="all">Any sex</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
            <option value="Boy & Girl">Boy &amp; Girl</option>
          </select>
        </div>
        <p>{filtered.length} {filtered.length === 1 ? 'puppy' : 'puppies'} available</p>
        {filtered.length === 0 ? (
          <p>No puppies match that search yet — try clearing the breed or sex filter.</p>
        ) : (
          <div className="grid">
            {filtered.map((p) => (
              <PuppyCard key={p.slug} puppy={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function PuppiesPage() {
  return (
    <Suspense>
      <List />
    </Suspense>
  );
}
