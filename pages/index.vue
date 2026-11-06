<template>
  <main class="page-main editorial home">

    <!-- ── Intro ─────────────────────────────────────────────────────────── -->
    <section id="about" class="intro" aria-labelledby="intro-title">
      <p class="intro__eyebrow">
        <span>Product Engineer</span>
        <span class="intro__status">
          <span class="intro__dot" aria-hidden="true" />
          Building in public
        </span>
      </p>

      <h1 id="intro-title" class="intro__title">
        <span class="intro__title-muted">I build things where</span>
        design and engineering meet.
      </h1>

      <div class="intro__cols">
        <div class="intro__bio">
          <p>
            Industrial designer turned product engineer. I move between the wireframe and
            the commit with equal comfort — most interested in the space where a
            well-crafted interface meets solid systems thinking.
          </p>
          <p>Currently building web apps, open-source tools, and writing about what I learn.</p>
        </div>

        <dl class="facts">
          <div class="facts__row">
            <dt>Now</dt>
            <dd>Product Engineer at Resizes</dd>
          </div>
          <div class="facts__row">
            <dt>Based</dt>
            <dd>Gijón, Asturias</dd>
          </div>
          <div class="facts__row">
            <dt>Stack</dt>
            <dd>{{ stack.join(' · ') }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ── Selected work ─────────────────────────────────────────────────── -->
    <section id="projects" class="section" aria-labelledby="selected-title">
      <header class="section__head">
        <span class="section__num">01</span>
        <h2 id="selected-title" class="section__title">Selected work</h2>
        <span class="section__count">{{ pad(featured.length) }}</span>
      </header>

      <article v-for="(p, i) in featured" :key="p.title" ref="featureEls" class="feature">
        <span class="feature__num meta-mono">{{ pad(i + 1) }}</span>

        <div class="feature__text">
          <p class="kind">{{ p.kind }}</p>
          <h3 class="feature__title">{{ p.title }}</h3>
          <p class="feature__desc">{{ p.description }}</p>
          <p class="meta">{{ p.tags.join(' · ') }}</p>
          <ProjectLinks :links="p.links" class="feature__links" />
        </div>

        <figure class="plate">
          <img
            :src="p.image.src"
            :alt="p.image.alt"
            :width="p.image.width"
            :height="p.image.height"
            loading="lazy"
          />
        </figure>
      </article>
    </section>

    <!-- ── More projects ─────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="more-title">
      <header class="section__head">
        <span class="section__num">02</span>
        <h2 id="more-title" class="section__title">More projects</h2>
        <span class="section__count">{{ pad(more.length) }}</span>
      </header>

      <ul class="index" role="list">
        <li v-for="p in more" :key="p.title" class="index__row">
          <div class="index__name">
            <h3 class="index__title">
              {{ p.title }}
              <span v-if="p.wip" class="wip">WIP</span>
            </h3>
            <p class="kind">{{ p.kind }}</p>
          </div>
          <p class="index__desc">{{ p.description }}</p>
          <ProjectLinks :links="p.links" class="index__meta index__links" />
        </li>
      </ul>
    </section>

    <!-- ── Talks & workshops ─────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="talks-title">
      <header class="section__head">
        <span class="section__num">03</span>
        <h2 id="talks-title" class="section__title">Talks &amp; workshops</h2>
        <span class="section__count">{{ pad(talks.length) }}</span>
      </header>

      <ul class="index" role="list">
        <li v-for="t in talks" :key="t.title" class="index__row">
          <div class="index__name">
            <h3 class="index__title">{{ t.title }}</h3>
            <p class="kind">{{ t.kind }}</p>
          </div>
          <p class="index__desc">{{ t.description }}</p>
          <ProjectLinks :links="t.links" class="index__meta index__links" />
        </li>
      </ul>
    </section>

    <!-- ── Experience ────────────────────────────────────────────────────── -->
    <section id="work" class="section" aria-labelledby="xp-title">
      <header class="section__head">
        <span class="section__num">04</span>
        <h2 id="xp-title" class="section__title">Experience</h2>
      </header>

      <ol class="index" role="list">
        <li v-for="r in experience" :key="r.role + r.period" class="index__row">
          <div class="index__name">
            <h3 class="index__title">{{ r.role }}</h3>
            <p class="timeline__org">{{ r.org }}</p>
          </div>
          <p class="index__meta meta-mono">{{ r.period }}</p>
          <div class="index__desc">
            <p v-if="r.description">{{ r.description }}</p>
            <p v-if="r.tags" class="meta">{{ r.tags.join(' · ') }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- ── Education ─────────────────────────────────────────────────────── -->
    <section class="section" aria-labelledby="edu-title">
      <header class="section__head">
        <span class="section__num">05</span>
        <h2 id="edu-title" class="section__title">Education</h2>
      </header>

      <ol class="index" role="list">
        <li v-for="e in education" :key="e.title" class="index__row">
          <div class="index__name">
            <h3 class="index__title">{{ e.title }}</h3>
            <p class="timeline__org">{{ e.school }}</p>
          </div>
          <p class="index__meta meta-mono">{{ e.year }}</p>
          <div class="index__desc">
            <p>{{ e.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- ── Activity ──────────────────────────────────────────────────────── -->
    <section id="github" class="section" aria-labelledby="activity-title">
      <header class="section__head">
        <span class="section__num">06</span>
        <h2 id="activity-title" class="section__title">Activity</h2>
      </header>

      <div class="activity">
        <ClientOnly>
          <ContributionGraph />
          <template #fallback>
            <p class="card__label">GitHub</p>
            <p class="card__title">Last 12 months</p>
          </template>
        </ClientOnly>
      </div>
    </section>

    <!-- ── Contact ───────────────────────────────────────────────────────── -->
    <section id="contact" class="section" aria-labelledby="contact-title">
      <header class="section__head">
        <span class="section__num">07</span>
        <h2 id="contact-title" class="section__title">Contact</h2>
      </header>

      <div class="contact">
        <div class="contact__intro">
          <p class="contact__lead">
            Have a project in mind, an offer, or just want to say hi?
            <span class="intro__title-muted">Write to me.</span>
          </p>

          <div class="mail">
            <a :href="`mailto:${email}`" class="mail__address">{{ email }}</a>
            <button type="button" class="mail__copy" @click="copyEmail">
              {{ copied ? 'Copied' : 'Copy' }}
            </button>
            <span class="sr-only" aria-live="polite">{{ copied ? 'Email address copied' : '' }}</span>
          </div>
        </div>

        <ul class="elsewhere" role="list" aria-label="Find me online">
          <li v-for="l in elsewhere" :key="l.label">
            <a
              :href="l.href"
              :target="l.external ? '_blank' : undefined"
              :rel="l.external ? 'noopener noreferrer' : undefined"
              class="elsewhere__link"
            >
              {{ l.label }} <span aria-hidden="true">{{ l.external ? '↗' : '→' }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
import type { ProjectLink } from '~/components/ProjectLinks.vue'

interface Project {
  title: string
  kind: string
  description: string
  tags: string[]
  links: ProjectLink[]
  wip?: boolean
  image?: { src: string, alt: string, width: number, height: number }
}

const { public: { githubProjectUrl } } = useRuntimeConfig()

// Project images rest in greyscale and regain colour on hover. Touch screens have no
// hover, so there the image in the middle of the viewport takes the colour instead.
const featureEls = shallowRef<HTMLElement[]>([])

onMounted(() => {
  if (!window.matchMedia('(hover: none)').matches || !('IntersectionObserver' in window)) return
  const io = new IntersectionObserver(
    entries => entries.forEach(e => e.target.classList.toggle('is-inview', e.isIntersecting)),
    { rootMargin: '-35% 0px -35% 0px' },
  )
  featureEls.value.forEach(el => io.observe(el))
  onBeforeUnmount(() => io.disconnect())
})

const pad = (n: number) => String(n).padStart(2, '0')

const gh = (repo: string): ProjectLink => ({ label: 'GitHub', href: `https://github.com/albegosu/${repo}` })
const npm = (pkg: string): ProjectLink => ({ label: 'npm', href: `https://www.npmjs.com/package/${pkg}` })

const stack = ['Nuxt', 'Vue 3', 'TypeScript', 'Node.js', 'Python', 'Swift', 'PostgreSQL', 'Kubernetes', 'LLMs', 'RAG']

const featured: (Project & { image: NonNullable<Project['image']> })[] = [
  {
    title: 'Second Brain',
    kind: 'Open source',
    description:
      'Save UI inspiration from any app. A vision model curates it into a private wiki and turns your taste into a DESIGN.md your coding agent builds from.',
    tags: ['AI', 'Python', 'Vision LLM'],
    links: [gh('second-brain'), { label: 'Read', href: '/notes/second-brain' }],
    image: {
      src: '/second-brain.png',
      alt: 'Second Brain: save UI inspiration from any app. A DESIGN.md token card and a Paper and Ink sample card float beside the Save, Curate, DESIGN.md and Build steps.',
      width: 1280,
      height: 640,
    },
  },
  {
    title: 'Micrographic Skill',
    kind: 'Agent skill',
    description:
      'Dense, technical, schematic UI for AI coding agents. Ships as a SKILL.md for Cursor, Claude Code and Codex, and as a DESIGN.md for any tool that reads one.',
    tags: ['Open source', 'Design system'],
    links: [gh('micrographic-skill'), npm('micrographic-skill')],
    image: {
      src: '/micrographic-dark.png',
      alt: 'Micrographic Skill spec plate in its dark HUD reading: MICRO GRAPHIC display type, the formats it ships as, and the spec read from DESIGN.md',
      width: 1920,
      height: 800,
    },
  },
  {
    title: 'Olimpia Fisioterapia',
    kind: 'Client work · 2024 · Updated 2026',
    description: 'Website for a physiotherapy clinic in Gijón, redesigned and rebuilt in Nuxt.',
    tags: ['Nuxt', 'Vue 3'],
    links: [{ label: 'Visit', href: 'https://olimpiafisioterapia.es/' }],
    image: {
      src: '/olimpia.webp',
      alt: 'Olimpia Fisioterapia home: “Tu bienestar, nuestra prioridad”, with a photo of the clinic reception inside an organic shape',
      width: 1920,
      height: 960,
    },
  },
]

const more: Project[] = [
  {
    title: 'AI Elements Nuxt',
    kind: 'Open source',
    description:
      'Nuxt/Vue complement to Vercel AI Elements: headless components for chat, tool calls, code blocks, voice and workflow UIs. v1.5 adds an MCP server, an agent skill and a component registry.',
    tags: ['Nuxt', 'Vue 3', 'AI UI'],
    links: [
      gh('ai-elements-nuxt'),
      { label: 'Docs', href: 'https://albegosu.github.io/ai-elements-nuxt/' },
      npm('ai-elements-nuxt'),
    ],
  },
  {
    title: 'Honest Arch Diagrams',
    kind: 'Agent skill · CLI',
    description:
      'Request-path diagrams derived from real evidence — Kubernetes, GitOps, Terraform, OpenTelemetry traces. A hop nobody can prove fails the lint and is never drawn.',
    tags: ['Open source', 'CLI'],
    links: [gh('honest-arch-diagrams'), npm('honest-arch-diagrams')],
  },
  {
    title: 'Hypar',
    kind: 'Lab',
    wip: true,
    description:
      'AI interaction research lab. Embryos — living units of knowledge — and an agent that collaborates by asking one hard question at a time.',
    tags: ['Nuxt', 'AI'],
    links: [gh('hypar'), { label: 'Docs', href: 'https://albegosu.github.io/hypar/' }],
  },
  {
    title: 'VibeTranslator',
    kind: 'macOS',
    description:
      'Write in Spanish, send natural English. One shortcut translates your draft in place — in Discord or any app — and turns rough requests into clear AI prompts.',
    tags: ['Swift', 'LLMs'],
    links: [gh('vibe-translator')],
  },
  {
    title: 'VPN Switcher',
    kind: 'macOS',
    description:
      'One menu bar for every client’s VPN — Tailscale, WireGuard, native, or any CLI — from a single YAML file.',
    tags: ['Swift'],
    links: [gh('vpn-switcher')],
  },
  {
    title: 'Logistics Platform',
    kind: 'UNIR Master’s · 2023',
    description:
      'Team final project: a web platform for a transport company. Shipment management, warehouses, role-based access, employee onboarding.',
    tags: ['Angular', 'Java', 'Spring'],
    links: [],
  },
]

const talks: Omit<Project, 'tags'>[] = [
  {
    title: 'Problem Solving — Methodology for Survival',
    kind: 'Workshop',
    description:
      'Structured problem-solving methodology inspired by Bruno Munari, designed for technical teams under real constraints.',
    links: [{ label: 'Read', href: '/notes/problem-solving' }],
  },
  {
    title: 'How to Survive the KIT',
    kind: 'Masterclass · UNIR',
    description:
      'Career guidance on navigating the industrial design → web dev transition, evaluating masters, and growing professionally.',
    links: [{ label: 'Read', href: 'https://albegosu.github.io/albegosu/unir-masterclass/' }],
  },
]

const experience = [
  {
    period: 'May 2026 — Present',
    role: 'Product Engineer',
    org: 'Resizes · Gijón, hybrid',
    description:
      'I own the product surface: how it looks, how it behaves, and the systems behind it. Design and engineering in the same loop — from the wireframe to what ships.',
    tags: ['Nuxt', 'Vue 3', 'RAG'],
  },
  {
    period: 'Nov 2025 — May 2026',
    role: 'Full Stack Engineer',
    org: 'Resizes · Gijón, hybrid',
    description:
      'Working across the full product: what the user sees, the services that power it, the data it stores, and the environment where it runs. Prioritising security, good tests, documentation, and maintainability.',
    tags: ['GitHub', 'CI/CD', 'TypeScript'],
  },
  {
    period: 'Oct 2024 — Nov 2025',
    role: 'Consultant',
    org: 'Minsait · Gijón, hybrid',
    tags: ['Data analysis', 'Systems'],
  },
  {
    period: 'Feb 2024 — Sep 2024',
    role: 'Analyst',
    org: 'Minsait · Gijón, hybrid',
    tags: ['Data analysis', 'Systems'],
  },
  {
    period: '2022 — 2023',
    role: 'Production Manager',
    org: 'MyL Ideas',
    description:
      'Managed audiovisual marketing projects from brief to delivery. Team of 15, production timelines, and quality control.',
  },
  {
    period: '2018 — 2022',
    role: 'Sr. Specialist CAD Designer',
    org: 'Align Technology Inc.',
    description:
      'Led a team of 50 in a high-output global production environment. Goal-based organisation, inventory metrics, continuous improvement.',
  },
  {
    period: '2016 — 2017',
    role: 'Industrial Designer',
    org: 'Estudio enPieza!',
    description:
      'End-to-end furniture design: material research, geometry studies, functional prototypes, wood and metal fabrication.',
  },
] as { period: string, role: string, org: string, description?: string, tags?: string[] }[]

const education = [
  {
    year: '2023',
    title: 'M.Sc. Full Stack Developer',
    school: 'UNIR',
    description: 'Angular, Bootstrap, SASS, MySQL, MongoDB.',
  },
  {
    year: '2023',
    title: 'Full Stack Bootcamp (850h)',
    school: 'Factoría F5',
    description: 'Agile / Scrum, Vue 3, Java, Spring Boot, MySQL.',
  },
  {
    year: '2016',
    title: 'B.A. Product Design',
    school: 'Escuela Superior de Arte de Asturias',
    description: 'Industrial design, materials, fabrication, product communication.',
  },
]

const email = 'hi@albertoglez.es'
const copied = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

// mailto: opens whatever mail app is set as default, often one nobody uses; copying is the fallback
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    return // no clipboard access (insecure context, denied): the mailto link still works
  }
  copied.value = true
  clearTimeout(copiedTimer)
  copiedTimer = setTimeout(() => { copied.value = false }, 2000)
}

onBeforeUnmount(() => clearTimeout(copiedTimer))

const elsewhere = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/albegosu/', external: true },
  { label: 'GitHub', href: 'https://github.com/albegosu', external: true },
  { label: 'Public roadmap', href: githubProjectUrl, external: true },
  { label: 'Build log', href: '/notes', external: false },
]
</script>

<style scoped>
/* Section scaffold, index rows and mono labels are shared with the build log:
   they live in main.css under "Editorial pages". */

/* ─── Intro ──────────────────────────────────────────────────────────────── */
.intro { padding-bottom: 104px; }

.intro__eyebrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-grey);
  margin-bottom: 28px;
}

.intro__status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-transform: none;
  letter-spacing: 0;
}

.intro__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: hsl(142, 72%, 46%);
  animation: pulse 2.5s infinite;
}

@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

.intro__title {
  font-size: clamp(36px, 5.2vw, 66px);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: var(--color-text);
  max-width: 16ch;
  text-wrap: balance;
}

.intro__title-muted { color: var(--color-grey); }

.intro__cols {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: 56px;
  margin-top: 52px;
}

.intro__bio p {
  font-size: 16px;
  line-height: 1.65;
  color: var(--color-text-2);
  max-width: 52ch;
}

.intro__bio p + p { margin-top: 12px; }

.facts { border-top: 1px solid var(--rule); }

.facts__row {
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 16px;
  padding: 11px 0;
  border-bottom: 1px solid var(--color-border);
}

.facts dt {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-grey);
  padding-top: 3px;
}

.facts dd { font-size: 14px; line-height: 1.55; color: var(--color-text); }

/* ─── Featured projects ──────────────────────────────────────────────────── */
.feature {
  display: grid;
  grid-template-columns: var(--col-num) minmax(0, 5fr) minmax(0, 7fr);
  column-gap: var(--gutter);
  padding: 36px 0;
}

.feature + .feature { border-top: 1px solid var(--color-border); }

.feature__num { padding-top: 2px; }

.feature__text { display: flex; flex-direction: column; }

.feature__title {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin: 10px 0 12px;
  color: var(--color-text);
}

.feature__desc {
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-text-2);
}

.feature__links { margin-top: 24px; }

.plate {
  background: var(--color-card);
  border-radius: 14px;
  padding: 12px;
  transition: var(--t);
}

/* Each image keeps its own proportions: nothing is cropped. In greyscale they read
   as one family on the page; hovering the project brings the colour back. */
.plate img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  filter: grayscale(1) contrast(1.04) brightness(var(--img-brightness));
  transition: filter 0.5s ease;
}

@media (hover: hover) {
  .feature:hover .plate img { filter: none; }
}

@media (hover: none) {
  .feature.is-inview .plate img { filter: none; }
}

@media (prefers-reduced-motion: reduce) {
  .plate img { transition: none; }
}

/* ─── Rows that only exist on the home ───────────────────────────────────── */
.timeline__org {
  font-size: 13px;
  color: var(--color-grey);
  margin-top: 3px;
}

.wip {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  vertical-align: 2px;
  margin-left: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  color: hsl(38, 75%, 42%);
  background: color-mix(in srgb, hsl(38, 92%, 55%) 14%, transparent);
}

/* ─── Activity ───────────────────────────────────────────────────────────── */
.activity {
  min-width: 0;
  padding: 24px 0 0 calc(var(--col-num) + var(--gutter));
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
.contact {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: 56px;
  align-items: end;
  padding: 32px 0 0 calc(var(--col-num) + var(--gutter));
}

.contact__lead {
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
  color: var(--color-text);
  max-width: 18ch;
}

.mail {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  margin-top: 28px;
}

.mail__address {
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--color-text);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--rule);
  text-underline-offset: 8px;
  transition: text-decoration-color 0.15s ease;
}

.mail__address:hover { text-decoration-color: currentColor; }

.mail__copy {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-grey);
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  min-width: 76px;
  transition: color 0.12s ease, border-color 0.12s ease;
}

.mail__copy:hover { color: var(--color-text); border-color: var(--rule); }
.mail__copy:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }

.elsewhere {
  list-style: none;
  border-top: 1px solid var(--color-border);
}

.elsewhere li { border-bottom: 1px solid var(--color-border); }

.elsewhere__link {
  display: flex;
  justify-content: space-between;
  padding: 11px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-grey);
  transition: color 0.12s ease;
}

.elsewhere__link:hover { color: var(--color-text); }

/* ─── Responsive ─────────────────────────────────────────────────────────── */
@media (max-width: 1100px) {
  .feature { grid-template-columns: var(--col-num) minmax(0, 1fr) minmax(0, 1fr); }
  .contact { grid-template-columns: minmax(0, 1fr); gap: 40px; }
}

/* Too narrow for text beside the image: stack them */
@media (max-width: 860px) {
  .feature { grid-template-columns: var(--col-num) minmax(0, 1fr); row-gap: 24px; }
  .feature__text { grid-column: 2; grid-row: 1; }
  .feature .plate { grid-column: 2; grid-row: 2; max-width: 560px; }
}

@media (max-width: 640px) {
  .intro { padding-bottom: 72px; }
  .intro__eyebrow { margin-bottom: 20px; }
  .intro__cols { grid-template-columns: minmax(0, 1fr); gap: 32px; margin-top: 36px; }

  .feature { grid-template-columns: minmax(0, 1fr); row-gap: 20px; padding: 28px 0; }
  .feature__num { display: none; }
  .feature .plate { grid-column: 1; grid-row: 1; }
  .feature__text { grid-column: 1; grid-row: 2; }

  .activity,
  .contact { padding-left: 0; }
}
</style>
