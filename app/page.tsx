import React from "react";
import "./css/styles.css";

const projects = [
  {
    name: "Virtual Try-On Chrome Extension",
    status: "In progress",
    link: "https://github.com/teagrambuilds/virtual-try-on-extention",
  },
  {
    name: "Content & Systems for Early-Career Devs",
    status: "Ideas & notes",
    link: "",
  },
];

const profilePicture = new URL("./images/profile.JPG",import.meta.url)

export default function Home() {
  return (
    <main className="page">
      <div className="page-inner">

        {/* ---- HERO ---- */}
        <header className="hero">

          <div className="hero-subsection">
            <p className="hero-overline">Hey, I&apos;m Tea 👋</p>
          
            <div className="hero-picture">
              <img src={profilePicture.href} />
            </div> 
          </div>

          <h1 className="hero-title">
            Software engineer building aestetic little projects
          </h1>

          <p className="hero-subtitle">
            Right now I&apos;m learning frontend, building a virtual try-on extention,
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
              href="https://www.instagram.com/teagramofficial"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Follow my build-in-public
            </a>
          </div>
        </header>

        {/* ---- PROJECTS ---- */}
        <section className="section">
          <h2 className="section-title">Projects</h2>

          <p className="section-subtitle">
            Small experiments that are helping me grow my skills and ship
            things the girls will actually use.
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
