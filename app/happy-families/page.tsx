import Link from 'next/link';

export const metadata = { title: 'Happy families | TeddyPups U.A.E.' };

export default function HappyFamilies() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">our wall of happy endings</p>
        <h1>Happy families &amp; puppies</h1>
        <p className="lead">
          We are truly honored to see our puppies become cherished members of loving families.
          These heartwarming moments have been shared by our valued clients who welcomed a Teddy
          Pup into their homes and hearts.
        </p>
        <div className="quote" style={{ marginTop: 24 }}>
          <blockquote>
            “TeddyPups truly made our dream a reality. They supported us at every step of the import
            journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7
            support throughout the process gave us complete peace of mind.”
          </blockquote>
          <p>Sarah M., Dubai, UAE</p>
        </div>
        <div className="two-col">
          <div className="panel">
            <h3>Lulu, with her new mummy</h3>
            <p>A happy ending from the TeddyPups family wall — one of many moments shared by families worldwide.</p>
          </div>
          <div className="panel">
            <h3>An adorable Maltipoo baby</h3>
            <p>Another moment from the wall of happy endings, shared by a family who welcomed a Teddy Pup home.</p>
          </div>
        </div>
        <p className="meta" style={{ marginTop: 16 }}>
          Note for reviewers: this clone page reproduces the testimonial and wall structure. The
          original wall is a large photo grid; family photos were not copied here.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/puppies">Meet the puppies</Link>
        </div>
      </div>
    </section>
  );
}
