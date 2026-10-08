import Reveal from './Reveal.jsx';

export default function PageHeader({ label, title, lede, children }) {
  return (
    <section className="wrap pb-12 pt-14 sm:pt-20 lg:pb-16">
      <Reveal className="max-w-3xl">
        {label && <p className="label">{label}</p>}
        <h1 className="h1 mt-4">{title}</h1>
        {lede && <p className="lede mt-6 max-w-prose">{lede}</p>}
        {children}
      </Reveal>
    </section>
  );
}
