import Link from 'next/link';
import { PHONE_DISPLAY, whatsappLink } from '../data/puppies';

export function Header() {
  return (
    <header className="site">
      <div className="container nav">
        <Link href="/" className="logo">
          TeddyPups <small>U.A.E.</small>
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/puppies">Puppies</Link>
          <Link href="/happy-families">Happy families</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Visit &amp; contact</Link>
          <a className="btn btn-green" href={whatsappLink("Hi TeddyPups! I'd love to know more about your puppies.")}>
            WhatsApp us
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site">
      <div className="container">
        <h3 style={{ marginBottom: 4 }}>Home, at last.</h3>
        <p>
          TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium
          services and worldwide shipping.
        </p>
        <p>
          <strong>Explore:</strong>{' '}
          <Link href="/puppies">Available puppies</Link> · <Link href="/gone-home">Gone home</Link> ·{' '}
          <Link href="/happy-families">Happy families</Link> · <Link href="/how-it-works">How it works</Link> ·{' '}
          <Link href="/how-it-works#delivery">Delivery &amp; collection</Link> · <Link href="/faq">FAQ</Link> ·{' '}
          <Link href="/contact">Visit &amp; contact</Link>
        </p>
        <p>
          <strong>Say hello:</strong> WhatsApp {PHONE_DISPLAY} · teddypupsadmin@gmail.com · Downtown
          Dubai, United Arab Emirates
        </p>
        <p>
          <a href="https://www.instagram.com/teddypups.worldwide/">Instagram</a> ·{' '}
          <a href="https://www.tiktok.com/@teddypupsuae">TikTok</a> ·{' '}
          <a href="https://www.facebook.com/profile.php?id=61567496944539">Facebook</a>
        </p>
        <p>© 2026 TeddyPups U.A.E. — every puppy is family</p>
        <p>
          Clone built as a take-home assignment for Insta Biz Web. Layout and copy structure recreate
          the reference site; code is original.
        </p>
      </div>
    </footer>
  );
}
