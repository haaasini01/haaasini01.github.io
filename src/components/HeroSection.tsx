import { useEffect, useRef, useCallback } from 'react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // ── Parallax on mouse move ──
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const img = imgRef.current;
    if (!img) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    img.style.transform = `translateY(${dy * -8}px) rotate(${dx * 2 - 1}deg)`;
    img.style.transition = 'transform 0.15s ease';
  }, []);

  const handleMouseLeave = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transform = 'translateY(0) rotate(-1deg)';
    img.style.transition = 'transform 0.9s ease';
  }, []);

  // ── Fit PORTFOLIO title to full width ──
  const fitPortfolioTitle = useCallback(() => {
    const h2 = titleRef.current;
    if (!h2) return;

    const container = h2.parentElement;
    if (!container) return;

    const style = getComputedStyle(container);
    const available =
      container.clientWidth -
      parseFloat(style.paddingLeft) -
      parseFloat(style.paddingRight);

    // Reset before measuring
    h2.style.transform = 'scaleX(1)';
    h2.style.fontSize = '100px';

    // Width of the text at 100px
    const textWidth = h2.getBoundingClientRect().width;

    // Scale needed to fill container
    const scale = available / textWidth;
    const heightScale = 1.5;

    h2.style.transform = `scale(${scale}, ${heightScale})`;
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
      heroEl.addEventListener('mouseleave', handleMouseLeave);
    }

    // Fit title on load + resize, ensuring fonts are loaded first
    document.fonts.ready.then(() => {
      fitPortfolioTitle();
    });
    window.addEventListener('resize', fitPortfolioTitle);

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', handleMouseMove);
        heroEl.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', fitPortfolioTitle);
    };
  }, [handleMouseMove, handleMouseLeave, fitPortfolioTitle]);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Vertical deco lines */}
      <div
        className="deco-line-v"
        style={{ left: '10%', top: '80px', height: '70%' }}
      />

      {/* GIANT PORTFOLIO TEXT */}
      <div className="portfolio-title">
        <h2 ref={titleRef}>Portfolio</h2>
      </div>

      {/* BODY GRID */}
      <div className="hero-body">
        {/* Left: portrait */}
        <div className="portrait-col">
          <img
            src="assets/1234.png"
            alt="Hasini"
            id="hero-img"
            ref={imgRef}
          />
        </div>

        {/* Right: name + desc */}
        <div className="text-col">
          <div className="hero-name" id="hero-name">
            hasini
          </div>

          <p className="hero-desc">
            I am a <strong>developer</strong> and{' '}
            <strong>ML engineer</strong> with a love for building things that
            actually matter — from NLP systems and blockchain-based platforms
            to full-stack web applications. I bring curiosity, precision, and
            an obsessive attention to detail to every project I touch.
            Currently focused on Natural Language Processing and always open
            to exciting new challenges. Oh, and I can finish a 400-page book
            in 8 hours. <em>Wink.</em>
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-p" id="see-work-btn">
              See My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://github.com/haaasini01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-o"
              id="github-btn"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
