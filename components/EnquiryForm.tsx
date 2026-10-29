'use client';

import { useState } from 'react';
import { whatsappLink } from '../data/puppies';

export function EnquiryForm({ puppyTitle }: { puppyTitle: string }) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="success">
        Thanks — your enquiry about {puppyTitle} is noted in this demo. For the quickest reply, message
        us on WhatsApp below.
      </div>
    );
  }
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input required placeholder="Your name" aria-label="Your name" />
      <input required placeholder="Phone / WhatsApp number" aria-label="Phone number" />
      <textarea rows={4} placeholder={`Hi, I'd love to know more about ${puppyTitle}.`} aria-label="Message" />
      <button className="btn" type="submit">Ask about {puppyTitle}</button>
      <a className="btn btn-green" href={whatsappLink(`Hi TeddyPups! I'd love to know more about ${puppyTitle}.`)}>
        Message on WhatsApp instead
      </a>
      <p className="meta">Demo form only — it does not send or store anything. WhatsApp opens a real chat link.</p>
    </form>
  );
}
