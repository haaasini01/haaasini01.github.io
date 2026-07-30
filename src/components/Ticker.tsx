const ITEMS = [
  'NLP',
  'Deep Learning',
  'Full Stack',
  'Blockchain',
  'Open Source',
  'B.Tech',
  'Bookworm',
];

const Ticker: React.FC = () => {
  // Duplicate items for seamless infinite scroll (same as hero.html)
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker-wrap">
      <div className="ticker" id="ticker">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            {item} <span className="ticker-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
