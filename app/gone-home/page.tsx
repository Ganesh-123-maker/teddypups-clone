import Link from 'next/link';

export const metadata = { title: 'Gone home | TeddyPups U.A.E.' };

const goneHome = ['Ace', 'Leo', 'Mia', 'Sadie', 'Ollie', 'Bruno'];

export default function GoneHome() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">one ticket home</p>
        <h1>Gone home</h1>
        <p className="lead">
          Puppies who have already found their families — with love from TeddyPups, in Dubai and
          around the world.
        </p>
        <div className="grid">
          {goneHome.map((name) => (
            <div className="panel" key={name}>
              <h3>{name}</h3>
              <span className="badge">gone home ♥</span>
            </div>
          ))}
        </div>
        <p className="meta" style={{ marginTop: 16 }}>
          Note for reviewers: names are from the original gone-home listing at the time of checking;
          family photos were not copied here.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/puppies">See available puppies</Link>
        </div>
      </div>
    </section>
  );
}
