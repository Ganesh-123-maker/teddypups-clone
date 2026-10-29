'use client';

import { useState } from 'react';
import { puppies, PHONE_DISPLAY } from '../../data/puppies';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">get in touch with us</p>
        <h1>Visit &amp; contact</h1>
        <div className="two-col">
          <div className="panel">
            <h2>Dear TeddyPups,</h2>
            {sent ? (
              <div className="success">
                Thanks — your letter is noted in this demo. It was not sent or stored. For the
                quickest reply, use WhatsApp below.
              </div>
            ) : (
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input required placeholder="Your name *" aria-label="Your name" />
                <input required placeholder="Phone / WhatsApp *" aria-label="Phone number" />
                <input placeholder="Email (optional)" aria-label="Email" />
                <input placeholder="Area (optional)" aria-label="Area" />
                <select aria-label="Puppy you are interested in" defaultValue="">
                  <option value="">Any puppy</option>
                  {puppies.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.title} — {p.breed}
                    </option>
                  ))}
                </select>
                <textarea rows={4} placeholder="Your message (optional)" aria-label="Message" />
                <button className="btn" type="submit">Post my letter</button>
              </form>
            )}
          </div>
          <div className="panel">
            <h2>Visit us in Downtown Dubai</h2>
            <p>
              <strong>Phone / WhatsApp:</strong> {PHONE_DISPLAY}
            </p>
            <p>
              <strong>Email:</strong> teddypupsadmin@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Downtown Dubai, United Arab Emirates
            </p>
            <a className="btn btn-light" href="https://maps.google.com/?q=Downtown+Dubai">
              Open in Google Maps
            </a>
            <p className="meta" style={{ marginTop: 14 }}>
              Demo form only — it does not send or store anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
