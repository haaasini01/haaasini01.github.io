import React from 'react';
import '../styles/experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: '2021',
      title: 'B.Tech Computer Science',
      subtitle: 'Example University',
      points: [
        'Pursuing Computer Science & Engineering (2021 – 2025)',
        'Built a rigorous foundation in core CS disciplines from day one',
        'Maintained a high GPA while participating in technical clubs'
      ],
      skills: ['Data Structures & Algorithms', 'Object Oriented Programming', 'Operating Systems', 'Computer Networks']
    },
    {
      year: '2023',
      title: 'Full Stack Intern',
      subtitle: 'Tech Innovations Inc.',
      points: [
        'Developed scalable web applications using React and Node.js',
        'Collaborated with designers to implement intuitive user interfaces',
        'Optimized database queries, reducing load times by 20%'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      year: '2024',
      title: 'ML Research Intern',
      subtitle: 'AI Research Labs',
      points: [
        'Trained deep learning models for NLP tasks achieving 90% accuracy',
        'Processed and analyzed large datasets for training',
        'Co-authored a paper on optimization techniques for transformers'
      ],
      skills: ['Python', 'PyTorch', 'NLP', 'Transformers']
    }
  ];

  return (
    <section className="experience-section" id="work">
      <h2 className="experience-title">Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
              <div className="timeline-card">
                <div className="timeline-year">{exp.year}</div>
                <h3 className="timeline-card-title">{exp.title}</h3>
                <div className="timeline-card-subtitle">{exp.subtitle}</div>
                
                <ul className="timeline-list">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="timeline-skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
