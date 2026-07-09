import { useState } from 'react';

interface FaqItem { q: string; a: string; }
interface Props { faqs: FaqItem[]; }

export default function DuaFAQAccordion({ faqs }: Props) {
  const [open, setOpen] = useState(0);
  return (
    <ul className="dua-faq-list">
      {faqs.map((f, i) => (
        <li key={i} className={open === i ? 'open' : ''}>
          <button className="dfq" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span className="dfnum">{String(i + 1).padStart(2, '0')}</span>
            <span>{f.q}</span>
            <span className="dfchev" aria-hidden="true">{open === i ? '−' : '+'}</span>
          </button>
          <div className="dfa"><p>{f.a}</p></div>
        </li>
      ))}
    </ul>
  );
}
