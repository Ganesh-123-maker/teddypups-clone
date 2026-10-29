import Link from 'next/link';
import type { Puppy } from '../data/puppies';

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  return (
    <Link href={`/puppies/${puppy.slug}`} className="card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={puppy.image} alt={`${puppy.title}, ${puppy.breed} puppy`} loading="lazy" />
      <div className="card-body">
        <h3>{puppy.title}</h3>
        <p className="meta">
          {puppy.breed} · {puppy.sex} · {puppy.ageLabel}
        </p>
        <span className="badge">Available</span>
        {puppy.hasVideo && <span className="badge badge-video">▶ with video</span>}
        <p className="meta" style={{ marginTop: 8 }}>
          {puppy.origin === 'imported' ? 'Imported for you' : 'In our Dubai showroom'}
        </p>
      </div>
    </Link>
  );
}
