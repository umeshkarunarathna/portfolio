/*
  HOW TO ADD A NEW PROJECT

  1. Copy one full project block below.
  2. Paste it inside the PROJECTS array.
  3. Change title, category, description, highlights, tags, and links.
  4. Save and push to GitHub.

  This keeps the website easy to update without touching index.html.
*/

const PROJECTS = [
  {
    title: "Evaluating the Effectiveness of Gamified Training in Enhancing User Resilience Against Spear Phishing Attacks",
    category: "Cybersecurity Research",
    period: "May 2025 – Jun 2025",
    associatedWith: "Douglas College",
    image: "images/gamified-research.png",
    description:
      "A cybersecurity research study investigating whether gamified training improves users’ ability to detect and respond to spear phishing attacks compared with traditional video-based awareness training.",
    highlights: [
      "Designed a between-subjects study with 40 non-technical student participants",
      "Compared gamified training against a traditional video-based module",
      "Measured accuracy, confidence, response time, and post-training feedback",
      "Found higher detection accuracy for the gamified group: 7.75 vs. 6.38",
      "Found higher confidence for the gamified group: 3.51 vs. 2.92"
    ],
    tags: ["Spear Phishing", "Gamification", "Cybersecurity Awareness", "Research", "Data Analysis"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  },
  {
    title: "Gamified Outlook-Style Phishing Detection Module",
    category: "Cybersecurity Training Tool",
    period: "2025",
    associatedWith: "Douglas College / Student Research Day",
    image: "images/phishing-module.png",
    description:
      "An interactive Outlook-style phishing detection module built to simulate realistic email review. Users enter their name and college email, preview customized emails, identify phishing indicators, and receive feedback through a gamified training experience.",
    highlights: [
      "Created realistic inbox-style phishing and legitimate email scenarios",
      "Added name and college email customization for a more realistic experience",
      "Designed interactive preview, answer selection, feedback, and scoring flow",
      "Used gamified elements to improve engagement during phishing awareness training",
      "Prepared the module for demonstration during Student Research Day activities"
    ],
    tags: ["HTML", "CSS", "JavaScript", "Phishing Detection", "Training Module", "Gamification"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  },
  {
    title: "LLM-Powered SOC Assistant",
    category: "AI + Cybersecurity",
    period: "2025",
    associatedWith: "Douglas College",
    image: "images/soc-logo.png",
    description:
      "A natural language SOC assistant that allows analysts to query security logs in plain English. The prototype integrates Wazuh log collection, PostgreSQL storage, FastAPI backend APIs, and local LLM support using Ollama/Mistral.",
    highlights: [
      "Built natural-language to SQL workflow for SOC log analysis",
      "Integrated Wazuh alerts, PostgreSQL, FastAPI, and Vue.js dashboard",
      "Designed analytics for failed logins, top attacker IPs, and security trends"
    ],
    tags: ["Wazuh", "FastAPI", "PostgreSQL", "Ollama", "Vue.js", "SOC"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  },
  {
    title: "Android Forensic Analysis Using Open-Source Tools",
    category: "Mobile Cybersecurity",
    period: "2025",
    associatedWith: "Douglas College",
    image: "images/android-forensics.png",
    description:
      "A mobile forensic analysis project using ADB, ALEAPP, MobSF, Drozer, and JADX to examine Android application artifacts, cached media, timestamps, permissions, exported components, and security posture.",
    highlights: [
      "Extracted Dropbox and Instagram Lite app data using ADB",
      "Parsed Android artifacts and timelines with ALEAPP",
      "Used MobSF, Drozer, and JADX for static and dynamic security analysis"
    ],
    tags: ["Android", "ADB", "ALEAPP", "MobSF", "Drozer", "JADX"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  },
  {
    title: "Enterprise Ubuntu Server Hardening & Monitoring",
    category: "Linux Security",
    period: "2025",
    associatedWith: "Douglas College",
    image: "images/ubuntu-server.png",
    description:
      "An enterprise-grade Ubuntu 22.04 LTS hardening project focused on account security, sudo restrictions, SSH hardening, firewall configuration, Fail2ban, audit rules, kernel hardening, AppArmor, AIDE, and system monitoring.",
    highlights: [
      "Implemented defense-in-depth hardening for a multi-user Linux server",
      "Configured UFW, SSH restrictions, Fail2ban, auditd, AIDE, and sysctl controls",
      "Validated controls using brute-force, privilege, firewall, and audit testing"
    ],
    tags: ["Ubuntu", "Linux", "UFW", "Fail2ban", "auditd", "AIDE", "AppArmor"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  },
  {
    title: "DeskWell+ Android Wellness App",
    category: "Android Development",
    period: "2025",
    associatedWith: "Douglas College",
    image: "images/deskwellplus.png",
    description:
      "Android application designed for desk workers with wellness reminders, notification scheduling, Firebase integration, completion tracking, and location-aware hydration support.",
    highlights: [
      "Built time-based reminder scheduling with Done and Skip actions",
      "Used Firebase Authentication and Firestore for user data",
      "Designed a clean mobile UI for wellness tracking"
    ],
    tags: ["Kotlin", "Firebase", "Android", "Notifications"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  },
  {
    title: "Active Directory Home Lab",
    category: "IT Infrastructure",
    period: "2025",
    associatedWith: "Personal Lab",
    image: "images/active-directory.png",
    description:
      "Practical Windows Server lab focused on domain setup, users, groups, organizational units, Group Policy Objects, permissions, and endpoint management fundamentals.",
    highlights: [
      "Configured Windows Server and Active Directory basics",
      "Practiced user, group, OU, and GPO administration",
      "Documented common IT support and system administration workflows"
    ],
    tags: ["Windows Server", "Active Directory", "GPO", "IT Support"],
    links: [
      { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
    ]
  }
];

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((project) => {
    const highlights = project.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");

    const tags = project.tags
      .map((tag) => `<span>${tag}</span>`)
      .join("");

    const links = project.links
      .map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`)
      .join("");

    const meta = [project.period, project.associatedWith].filter(Boolean).join(" • ");
    const image = project.image || "images/placeholder-project.jpg";

    return `
      <article class="project-card">
        <div class="project-image-wrapper">
          <img src="${image}" alt="${project.title}" class="project-image" />
        </div>
        <p class="project-category">${project.category}</p>
        <h3>${project.title}</h3>
        ${meta ? `<p class="project-meta">${meta}</p>` : ""}
        <p>${project.description}</p>
        <ul class="project-highlights">${highlights}</ul>
        <div class="tags">${tags}</div>
        <div class="project-links">${links}</div>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
