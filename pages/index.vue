<template>
  <main class="page-main">
    <div class="cards-grid">

      <!-- ── Hero ─────────────────────────────────────────────────────── -->
      <section id="about" class="card card--hero card--span2" aria-label="About">
        <p class="card__label">Product Engineer</p>
        <p class="card__title">
          I build things where design and engineering meet.
        </p>
        <p class="card__body">
          Industrial designer turned product engineer. I move between the wireframe and the commit with equal comfort — most interested in the space where a well-crafted interface meets solid systems thinking.
        </p>
        <p class="card__body" style="margin-top: 8px;">
          Currently building web apps, open-source tools, and writing about what I learn.
        </p>
        <p class="status" style="margin-top: 14px;">
          <span class="status__dot" />
          Open to new opportunities
        </p>
      </section>

      <!-- Stack card -->
      <section class="card card--span2" aria-label="Tech stack">
        <p class="card__label">Stack</p>
        <div class="tags" style="margin-top: 6px;">
          <span class="tag tag--accent">Nuxt</span>
          <span class="tag tag--accent">Vue 3</span>
          <span class="tag tag--accent">TypeScript</span>
          <span class="tag tag--accent">Node.js</span>
          <span class="tag tag--accent">PostgreSQL</span>
          <span class="tag tag--accent">LLMs</span>
          <span class="tag tag--accent">AI</span>
          <span class="tag tag--accent">RAG</span>
        </div>
      </section>

      <!-- ── Projects ──────────────────────────────────────────────────── -->
      <div class="projects-strip">
        <div class="projects-strip__chrome">
          <p class="projects-strip__title">
            Projects <small>← swipe →</small>
          </p>
          <p class="projects-strip__hint">← Swipe to browse projects</p>
        </div>

        <div ref="projectsStripRef" class="projects-strip__scroll">
      <!-- AI Elements Nuxt (featured) -->
      <article id="projects" class="card card--span2">
        <p class="card__label">Open Source</p>
        <p class="card__title">AI Elements Nuxt</p>
        <p class="card__body">
          Headless Vue components for AI-native apps in Nuxt. Chat, tool calls, code blocks,
          voice, and workflow UIs that plug into any design system.
        </p>
        <div class="tags">
          <span class="tag tag--accent">Nuxt</span>
          <span class="tag tag--accent">Vue 3</span>
          <span class="tag">Open Source</span>
          <span class="tag">AI UI</span>
        </div>
        <div class="card__links">
          <a href="https://github.com/albegosu/ai-elements-nuxt" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="https://albegosu.github.io/albegosu/ai-elements-nuxt.html" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            More
          </a>
        </div>
      </article>

      <!-- Micrographic Skill -->
      <article class="card">
        <p class="card__label">Dev Tool</p>
        <p class="card__title">Micrographic Skill</p>
        <p class="card__body">
          Design-tool product for AI coding agents. Installs a micrographic UI system so
          generated interfaces look dense, technical, and schematic by default.
        </p>
        <div class="tags">
          <span class="tag">Open Source</span>
          <span class="tag">Dev Tool</span>
        </div>
        <div class="card__links">
          <a href="https://github.com/albegosu/micrographic-skill" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="https://www.npmjs.com/package/micrographic-skill" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            npm
          </a>
        </div>
      </article>

      <!-- Cursor guide -->
      <article class="card">
        <p class="card__label">Guide</p>
        <p class="card__title">Cursor — Model Selection & Token Efficiency</p>
        <p class="card__body">
          Key takeaways from two Cursor field engineering sessions: planning-first workflow,
          model routing, context hygiene, and caching traps.
        </p>
        <div class="tags">
          <span class="tag">AI</span>
          <span class="tag">LLMs</span>
        </div>
        <div class="card__links">
          <a href="https://albegosu.github.io/albegosu/cursor-token-efficiency.html" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Read
          </a>
        </div>
      </article>

      <!-- Hypar RAG -->
      <article class="card">
        <p class="card__label">In progress</p>
        <p class="card__title">Hypar · RAG from scratch</p>
        <p class="card__body">
          Step-by-step documentation for building RAG systems from zero. Practical,
          no shortcuts.
        </p>
        <div class="tags">
          <span class="tag tag--wip">WIP</span>
          <span class="tag">RAG</span>
          <span class="tag">Open Source</span>
        </div>
        <div class="card__links">
          <a href="https://github.com/albegosu/from-zero-rag" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </article>

      <!-- Olimpia Fisioterapia -->
      <article class="card">
        <p class="card__label">Client work · 2024</p>
        <img src="/olimpia.png" alt="Olimpia Fisioterapia website" class="card__img" />
        <p class="card__title">Olimpia Fisioterapia</p>
        <p class="card__body">
          Website for a new physiotherapy clinic. Angular frontend; Node/Express + MySQL
          backend for patient records and appointment scheduling.
        </p>
        <div class="tags">
          <span class="tag">Angular</span>
          <span class="tag">Node.js</span>
          <span class="tag">MySQL</span>
        </div>
      </article>

      <!-- TFM -->
      <article class="card">
        <p class="card__label">Academic · 2023</p>
        <img src="/tfm.png" alt="TFM UNIR logistics platform" class="card__img" />
        <p class="card__title">Logistics Platform — UNIR Master's</p>
        <p class="card__body">
          Team final project: a web platform for a transport company. Shipment management,
          warehouses, role-based access, employee onboarding.
        </p>
        <div class="tags">
          <span class="tag">Angular</span>
          <span class="tag">Java</span>
          <span class="tag">Spring</span>
        </div>
      </article>

      <!-- ── Workshops ──────────────────────────────────────────────────── -->
      <article class="card">
        <p class="card__label">Workshop</p>
        <p class="card__title">Problem Solving — Methodology for Survival</p>
        <p class="card__body">
          Structured problem-solving methodology inspired by Bruno Munari, designed for
          technical teams under real constraints.
        </p>
        <div class="tags">
          <span class="tag">Methodology</span>
          <span class="tag">Workshop</span>
        </div>
        <div class="card__links">
          <a href="https://albegosu.github.io/albegosu/problem-solving.html" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Read
          </a>
        </div>
      </article>

      <article class="card">
        <p class="card__label">Masterclass</p>
        <p class="card__title">UNIR — How to Survive the KIT</p>
        <p class="card__body">
          Career guidance on navigating the industrial design → web dev transition, evaluating
          masters, and growing professionally.
        </p>
        <div class="tags">
          <span class="tag">Career</span>
          <span class="tag">Workshop</span>
        </div>
        <div class="card__links">
          <a href="https://albegosu.github.io/albegosu/unir-masterclass/" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Read
          </a>
        </div>
      </article>
        </div>

        <div class="projects-strip__dots" aria-hidden="true">
          <span
            v-for="i in projectCount"
            :key="i"
            class="projects-strip__dot"
            :class="{ 'projects-strip__dot--active': activeProject === i - 1 }"
          />
        </div>
      </div>

      <!-- ── Work experience ───────────────────────────────────────────── -->
      <div id="work" class="section-label">Work Experience</div>

      <!-- Resizes: current, two roles -->
      <article class="card card--span2">
        <p class="card__subtitle">Resizes · Gijón, hybrid</p>
        <div class="role-list">
          <div class="role">
            <div class="role__header">
              <p class="role__title">Product Engineer</p>
              <p class="role__period">May 2026 — present</p>
            </div>
            <div class="tags">
              <span class="tag tag--accent">Nuxt</span>
              <span class="tag tag--accent">Vue 3</span>
              <span class="tag">RAG</span>
            </div>
          </div>
          <div class="role">
            <div class="role__header">
              <p class="role__title">Full Stack Engineer</p>
              <p class="role__period">Nov 2025 — present</p>
            </div>
            <p class="card__body">
              Working across the full product: what the user sees, the services that power it,
              the data it stores, and the environment where it runs. Prioritising security,
              good tests, documentation, and maintainability.
            </p>
            <div class="tags">
              <span class="tag">GitHub</span>
              <span class="tag">CI/CD</span>
              <span class="tag">TypeScript</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Minsait -->
      <article class="card">
        <p class="card__subtitle">Minsait · Gijón, hybrid</p>
        <div class="role-list">
          <div class="role">
            <div class="role__header">
              <p class="role__title">Consultant</p>
              <p class="role__period">Oct 2024 — Nov 2025</p>
            </div>
            <div class="tags">
              <span class="tag">Data analysis</span>
              <span class="tag">Systems</span>
            </div>
          </div>
          <div class="role">
            <div class="role__header">
              <p class="role__title">Analyst</p>
              <p class="role__period">Feb 2024 — Sep 2024</p>
            </div>
            <div class="tags">
              <span class="tag">Data analysis</span>
              <span class="tag">Systems</span>
            </div>
          </div>
        </div>
      </article>

      <article class="card">
        <p class="card__subtitle">Align Technology Inc.</p>
        <p class="card__title">Sr. Specialist CAD Designer</p>
        <p class="card__body">
          Led a team of 50 in a high-output global production environment. Goal-based
          organisation, inventory metrics, continuous improvement.
        </p>
        <p class="card__period">2018 — 2022</p>
      </article>

      <article class="card">
        <p class="card__subtitle">MyL Ideas</p>
        <p class="card__title">Production Manager</p>
        <p class="card__body">
          Managed audiovisual marketing projects from brief to delivery. Team of 15,
          production timelines, and quality control.
        </p>
        <p class="card__period">2022 — 2023</p>
      </article>

      <article class="card">
        <p class="card__subtitle">Estudio enPieza!</p>
        <p class="card__title">Industrial Designer</p>
        <p class="card__body">
          End-to-end furniture design: material research, geometry studies, functional
          prototypes, wood and metal fabrication.
        </p>
        <p class="card__period">2016 — 2017</p>
      </article>

      <!-- ── Education ─────────────────────────────────────────────────── -->
      <div class="section-label">Education</div>

      <article class="card">
        <p class="card__label">2023</p>
        <p class="card__subtitle">UNIR</p>
        <p class="card__title">M.Sc. Full Stack Developer</p>
        <p class="card__body">Angular, Bootstrap, SASS, MySQL, MongoDB.</p>
      </article>

      <article class="card">
        <p class="card__label">2023</p>
        <p class="card__subtitle">Factoría F5</p>
        <p class="card__title">Full Stack Bootcamp (850h)</p>
        <p class="card__body">Agile / Scrum, Vue 3, Java, Spring Boot, MySQL.</p>
      </article>

      <article class="card">
        <p class="card__label">2016</p>
        <p class="card__subtitle">Escuela Superior de Arte de Asturias</p>
        <p class="card__title">B.A. Product Design</p>
        <p class="card__body">Industrial design, materials, fabrication, product communication.</p>
      </article>

      <!-- ── Contact ───────────────────────────────────────────────────── -->
      <section id="contact" class="card card--span2" aria-label="Contact">
        <p class="card__label">Contact</p>
        <p class="card__body" style="margin-bottom: 16px;">
          Have a project in mind, an offer, or just want to say hi? Write to me.
        </p>
        <ContactForm />
      </section>

      <aside class="card" aria-label="Find me online">
        <p class="card__label">Find me</p>
        <div class="find-links">
          <a href="https://www.linkedin.com/in/albegosu/" target="_blank" rel="noopener noreferrer" class="find-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/albegosu" target="_blank" rel="noopener noreferrer" class="find-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            <span>GitHub</span>
          </a>
          <a href="https://albegosu.github.io/albegosu/" target="_blank" rel="noopener noreferrer" class="find-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>Notes & Guides</span>
          </a>
          <a href="https://albegosu.notion.site/Proyectos-0811234cd8fb457c82016d5a9b6ab8a8" target="_blank" rel="noopener noreferrer" class="find-link">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M3.258 3.117c.374.304.515.28.977.249l6.607-.397c.14 0 .024-.14-.023-.163L9.898.928c-.21-.163-.49-.35-1.028-.304L2.22 1.02c-.233.023-.28.14-.186.233zm.396 1.52v6.952c0 .374.187.514.608.49l7.262-.42c.42-.023.467-.28.467-.584V3.162c0-.303-.117-.467-.374-.443L3.888 4.17c-.28.024-.374.164-.374.467zm7.168.373c.047.21 0 .42-.21.444l-.35.07v5.132c-.304.163-.584.257-.817.257-.374 0-.468-.117-.748-.467l-2.288-3.593v3.476l.608.14s0 .42-.584.42l-1.611.093c-.047-.093 0-.327.163-.373l.42-.117V5.927L5.59 5.88c-.047-.21.07-.513.397-.537l1.728-.117 2.39 3.8V5.717l-.608-.07c-.047-.257.14-.443.373-.467zM.968.518l6.655-.49c.817-.07 1.028-.023 1.541.35l2.125 1.493c.35.257.467.327.467.607v8.19c0 .513-.187.817-.84.863l-7.729.467c-.49.023-.724-.047-.981-.374L.736 9.37C.457 9 .34 8.75.34 8.42V1.125C.34.89.527.565.968.518z"/></svg>
            <span>Notion</span>
          </a>
        </div>
      </aside>

    </div>
  </main>
</template>

<script setup lang="ts">
const projectsStripRef = ref<HTMLElement | null>(null)
const activeProject = ref(0)
const projectCount = 8

onMounted(() => {
  const strip = projectsStripRef.value
  if (!strip) return

  const onScroll = () => {
    activeProject.value = Math.round(strip.scrollLeft / strip.offsetWidth)
  }

  strip.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => strip.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.find-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 8px;
}

.find-link {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-grey);
  transition: color 0.12s ease;
}

.find-link:hover { color: var(--color-text); }

.find-link svg { flex-shrink: 0; }
</style>
