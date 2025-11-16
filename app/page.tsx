const projects = [
  {
    name: "Virtual Try-On Chrome Extension",
    status: "In progress",
    link: "https://github.com/teagrambuilds", // change to exact repo
  },
  {
    name: "90-Day GitHub Portfolio Challenge",
    status: "Public log",
    link: "https://github.com/teagrambuilds", // or a dedicated repo
  },
  {
    name: "Content & Systems for Early-Career Devs",
    status: "Ideas & notes",
    link: "https://github.com/teagrambuilds", // placeholder
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="page-inner">
        <header className="hero">
          <p className="hero-overline">Hey, I&apos;m Tea 👋</p>
          <h1 className="hero-title">
            Software engineer building soft, clean tech for women.
          </h1>
          <p className="hero-subtitle">
            Right now I&apos;m learning backend, building a virtual try-on tool,
            and documenting the messy in-between of growing as a developer.
          </p>

          <div className="hero-links">
            <a
              href="https://github.com/teagrambuilds"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View my GitHub
            </a>
            <a
              href="https://www.instagram.com/____" // your IG / link in bio
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Follow my build-in-public
            </a>
          </div>
        </header>

        <section className="section">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Small experiments that are helping me grow my skills and ship
            things I&apos;d actually use.
          </p>

          <div className="project-list">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-chip"
              >
                <span className="project-chip-name">{project.name}</span>
                <span className="project-chip-status">{project.status}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
