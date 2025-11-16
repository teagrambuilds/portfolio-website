// app/page.tsx or app/page.js

const projects = [
  {
    name: "Virtual Try-On Extension",
    status: "In progress",
    description: "A Chrome extension that lets you virtually try on clothes while you shop online.",
    link: "https://github.com/teagrambuilds/virtual-try-on-extention",
  },
  {
    name: "90-Day GitHub Challenge",
    status: "Public log",
    description: "Documenting my journey of building a real developer portfolio in 90 days.",
    link: "https://github.com/teagrambuilds", // or a specific repo
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] flex justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Hero */}
        <header className="mb-10">
          <p className="text-sm text-gray-500 mb-2">Hey, I’m Tea 👋</p>
          <h1 className="text-4xl font-semibold mb-3">
            Software engineer building soft, clean tech for women.
          </h1>
          <p className="text-gray-600 mb-5">
            I’m documenting my journey: learning backend, shipping real projects,
            and building tools I’d actually use myself.
          </p>
          <a
            href="https://github.com/teagrambuilds"
            target="_blank"
            className="inline-block rounded-full border px-5 py-2 text-sm font-medium bg-black text-white hover:opacity-90"
          >
            View my GitHub
          </a>
        </header>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                className="block rounded-xl bg-white shadow-sm border px-5 py-4 hover:-translate-y-[2px] transition"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{project.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
