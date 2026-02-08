import { terminal } from "../createInputLine";
type Project = {
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    github: string;
    link?: string
    status: string
};

const projects: Project[] = [
  {
    name: "Terminal Portfolio",
    tagline: "Interaktives Portfolio im CLI-Stil",

    description: `
    Ein terminal-inspiriertes Portfolio. Ich wollte ein
    Portfolio machen, das persönlicher ist. Da mein Interesse
    eher im Backend als im Frontend liegt, habe ich mich gefragt,
    wie ich das am besten umsetzen kann. Und hier sind wir :)
    `,

    tech: [
      "TypeScript",
      "Vite",
    ],
    github: "https://github.com/davidngy/TerminalPortfolio",
    status: "done(for now)"
  },
  {
    name: "Restaurant Order System",
    tagline: "Full-Stack Bestellsystem für Restaurants",

     description: `
    Dieses Projekt entstand aus persönlicher Erfahrung.
    Meine Familie arbeitet in der Gastronomie und ich
    habe dort direkt gesehen, wie frustrierend bestehende
    Bestellsoftware sein kann.

    Ich dachte mir, wie schwer kann sowas schon sein?
    Also habe ich mich hingesetzt und angefangen.
    Gar nicht so einfach, hahah, aber es macht Spaß.
    `,

    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "React",
      "Vite",
      "TypeScript"
    ],

    github: "https://github.com/davidngy/OrderSystem",
    status: "ongoing"
  },
  {
    name: "KeyVault",
    tagline: "Ein CLI Passwortmanager",

    description: `
    Mein erstes Duo-Hackathon. Mein Freund Alex und ich hatten
    vier Tage Zeit, um etwas zu entwickeln. Dabei habe ich viel
    gelernt und gemerkt, wie viel Spaß es mir macht, unter Druck
    zu lernen und zu arbeiten.

    Das gesamte Projekt haben wir in einem Video festgehalten.
    Hier kannst du es anschauen.
    `,

    tech: [
      "python"
    ],
    link: "https://x.com/QuanDNgy/status/1949761684643397763?s=20",
    github: "https://github.com/davidngy/KeyVault",
    status: "done"
  },
  {
    name: "Kaffeeklatsch",
    tagline: "Eine Kaffee-Webseite",

    description: `
    Ich wollte besser im Umgang mit Tailwind werden und habe
    deshalb diese Webseite gebaut. Durch dieses Projekt durfte
    ich tatsächlich Webseiten für einige Restaurants umsetzen.
    `,

    tech: [
        "React",
        "Vite",
        "Tailwind CSS"
    ],
    link: "https://kaffeklatsch.netlify.app/",
    github: "https://github.com/davidngy/Kaffeeklatsch",
    status: "finished"
    },
];


export function renderProjects() {
  for (const p of projects) {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h4");
    title.className = "project-title";
    title.textContent = p.name;

    const desc = document.createElement("div");
    desc.textContent = p.description;

    const tech = document.createElement("div");
    tech.className = "project-tech";
    tech.textContent = "Tech: " + p.tech.join(" · ");

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = p.github;
    link.textContent = "GitHub →";
    link.target = "_blank";

    const status = document.createElement("div");
    status.className = "project-tech";
    status.textContent = "Status: " + p.status;

    
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tech);
    card.appendChild(link);
    
    if (p.link) {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = p.link;
        link.textContent = "Video →";
        link.target = "_blank";

        card.appendChild(link);
    }
    card.appendChild(status);
    terminal.appendChild(card);
  }
  return ""
}
