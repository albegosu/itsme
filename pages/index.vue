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
          Building in public
        </p>
      </section>

      <!-- Stack card -->
      <section class="card card--span2-mobile" aria-label="Tech stack">
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

      <!-- ── GitHub activity ───────────────────────────────────────────── -->
      <section id="github" class="card card--span3" aria-label="GitHub activity">
        <ClientOnly>
          <ContributionGraph />
          <template #fallback>
            <p class="card__label">GitHub</p>
            <p class="card__title">Last 12 months</p>
          </template>
        </ClientOnly>
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

      <!-- Hypar -->
      <article class="card">
        <p class="card__label">Lab</p>
        <p class="card__title">Hypar</p>
        <p class="card__body">
          AI interaction research lab. Embryos — living units of knowledge — and an
          agent that collaborates by asking one hard question at a time.
        </p>
        <div class="tags">
          <span class="tag tag--wip">WIP</span>
          <span class="tag tag--accent">Nuxt</span>
          <span class="tag">AI</span>
        </div>
        <div class="card__links">
          <a href="https://github.com/albegosu/hypar" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="https://albegosu.github.io/hypar/" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Docs
          </a>
        </div>
      </article>

      <!-- Honest Arch Diagrams -->
      <article class="card">
        <p class="card__label">Open Source</p>
        <p class="card__title">Honest Arch Diagrams</p>
        <p class="card__body">
          Agent skill for request-path diagrams that separate verified hops from
          inferred companions — and never invent topology.
        </p>
        <div class="tags">
          <span class="tag">Open Source</span>
          <span class="tag">Agent Skill</span>
        </div>
        <div class="card__links">
          <a href="https://github.com/albegosu/honest-arch-diagrams" target="_blank" rel="noopener noreferrer" class="card__link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </article>

      <!-- VPN Switcher -->
      <article class="card">
        <p class="card__label">macOS</p>
        <p class="card__title">VPN Switcher</p>
        <p class="card__body">
          One menu bar for every client’s VPN — Tailscale, WireGuard, native, or
          any CLI — from a single YAML file.
        </p>
        <div class="tags">
          <span class="tag">macOS</span>
          <span class="tag">Swift</span>
        </div>
        <div class="card__links">
          <a href="https://github.com/albegosu/vpn-switcher" target="_blank" rel="noopener noreferrer" class="card__link">
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

      <article class="card card--span2-mobile">
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
            <p class="card__body">
              I own the product surface: how it looks, how it behaves, and the
              systems behind it. Design and engineering in the same loop — from
              the wireframe to what ships.
            </p>
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

      <article class="card card--span2-mobile">
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

      <aside class="card card--span2-mobile" aria-label="Find me online">
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
          <a :href="githubProjectUrl" target="_blank" rel="noopener noreferrer" class="find-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>
            <span>Public roadmap</span>
          </a>
          <a href="https://albegosu.github.io/albegosu/" target="_blank" rel="noopener noreferrer" class="find-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>Notes & Guides</span>
          </a>
        </div>
      </aside>

    </div>
  </main>
</template>

<script setup lang="ts">
const { public: { githubProjectUrl } } = useRuntimeConfig()
const projectsStripRef = ref<HTMLElement | null>(null)
const activeProject = ref(0)
const projectCount = 10

onMounted(() => {
  const strip = projectsStripRef.value
  if (!strip) return

  const cards = strip.querySelectorAll<HTMLElement>('.card')

  const updateActiveProject = () => {
    const stripRect = strip.getBoundingClientRect()
    const focusX = stripRect.left + stripRect.width * 0.35

    let closest = 0
    let minDist = Infinity

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect()
      const cardFocus = rect.left + rect.width * 0.15
      const dist = Math.abs(focusX - cardFocus)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })

    activeProject.value = closest
    cards.forEach((card, i) => {
      card.classList.toggle('card--active', i === closest)
    })
  }

  strip.addEventListener('scroll', updateActiveProject, { passive: true })
  updateActiveProject()
  onBeforeUnmount(() => strip.removeEventListener('scroll', updateActiveProject))
})
</script>

<style scoped>
#github {
  min-width: 0;
}

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
