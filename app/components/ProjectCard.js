export default function ProjectCard({ title, description, tech, link }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech">{tech}</div>

      <a href={link} target="_blank" rel="noreferrer">
        View Project →
      </a>
    </article>
  );
}