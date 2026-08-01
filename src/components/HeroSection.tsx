const HeroSection: React.FC = () => {
  return (
    <section 
      className="hero" 
      id="hero" 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 0,
        margin: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <img
        src="assets/new_hero.jpeg"
        alt="Hasini Hero"
        style={{
          width: '100%',
          height: '110%',
          objectFit: 'cover',
          animation: 'floatImg 6s ease-in-out infinite',
        }}
      />
    </section>
  );
};

export default HeroSection;
