export type BadgeColor = 'teal' | 'purple' | 'amber' | 'blue' | 'green' | 'gray'

export interface Note {
  /** Internal note: rendered from /public/notes/<slug>.html at /notes/<slug> */
  slug?: string
  /** External entry: opens in a new tab instead */
  href?: string
  title: string
  /** First published, YYYY-MM */
  date: string
  description: string
  icon: string
  badges: { label: string; color: BadgeColor }[]
}

export interface NoteSection {
  label: string
  notes: Note[]
}

export const noteSections: NoteSection[] = [
  {
    label: 'AI & LLMs',
    notes: [
      {
        slug: 'cursor-token-efficiency',
        title: 'Cursor — Model Selection & Token Efficiency',
        date: '2026-05',
        description: 'Key takeaways from two Cursor field engineering sessions. Covers the planning-first workflow, model routing, context hygiene, and caching traps.',
        icon: 'ti-cpu',
        badges: [{ label: 'AI', color: 'teal' }, { label: 'LLMs', color: 'gray' }],
      },
    ],
  },
  {
    label: 'AI Agents',
    notes: [
      {
        slug: 'postgres-agent-persistence',
        title: 'Postgres Conversation Persistence in an Agent',
        date: '2026-09',
        description: 'Migrating from JSON-on-pod to Postgres without changing the agent interface. The detail you always forget: indexes come after columns.',
        icon: 'ti-database',
        badges: [{ label: 'AI', color: 'teal' }, { label: 'Postgres', color: 'green' }],
      },
      {
        slug: 'oauth2-proxy-agent-identity',
        title: 'oauth2-proxy + Agent Identity',
        date: '2026-09',
        description: "The real version: identity headers the agent reads to know who's talking, the pending NetworkPolicy, and the manual chart bug that broke everything.",
        icon: 'ti-lock',
        badges: [{ label: 'Kubernetes', color: 'blue' }, { label: 'AI', color: 'teal' }],
      },
      {
        slug: 'eks-service-onboarding',
        title: 'Onboarding a Service to EKS with an Agent',
        date: '2026-09',
        description: "The failed goal, what partially worked, and what's left. An honest write-up of trying to automate microservice onboarding with a Claude agent.",
        icon: 'ti-route',
        badges: [{ label: 'AI', color: 'teal' }, { label: 'Kubernetes', color: 'blue' }],
      },
    ],
  },
  {
    label: 'Products & Tools',
    notes: [
      {
        slug: 'second-brain',
        title: 'Second Brain — Product',
        date: '2026-09',
        description: 'Save UI inspiration from any app. A vision model curates it into a private wiki and turns your taste into a DESIGN.md your coding agent builds from.',
        icon: 'ti-brain',
        badges: [{ label: 'AI', color: 'teal' }, { label: 'Design', color: 'amber' }],
      },
      {
        slug: 'ai-elements-nuxt',
        title: 'AI Elements Nuxt — Components',
        date: '2026-06',
        description: 'Headless Vue components for AI-native apps in Nuxt. Chat, tools, code blocks, voice, and workflow UIs that plug into your own design system.',
        icon: 'ti-sparkles',
        badges: [{ label: 'Vue', color: 'purple' }, { label: 'AI', color: 'teal' }],
      },
      {
        slug: 'micrographic-skill',
        title: 'Micrographic Skill — Product',
        date: '2026-05',
        description: 'My design-tool product for AI coding agents. It installs a micrographic UI system so generated interfaces look dense, technical, and schematic by default.',
        icon: 'ti-chart-dots-3',
        badges: [{ label: 'Design', color: 'amber' }, { label: 'AI', color: 'teal' }],
      },
      {
        href: 'https://github.com/albegosu/vpn-switcher',
        title: 'VPN Switcher — macOS App',
        date: '2026-08',
        description: "One menu bar for every client's VPN — Tailscale, WireGuard, native macOS or any CLI — driven by a single declarative YAML file. Built for devs who juggle several clients' networks.",
        icon: 'ti-shield-lock',
        badges: [{ label: 'macOS', color: 'gray' }, { label: 'Swift', color: 'blue' }],
      },
    ],
  },
  {
    label: 'Infra & Platform',
    notes: [
      {
        slug: 'ingress-nginx-to-envoy-gateway',
        title: 'Ingress NGINX → Envoy Gateway',
        date: '2026-09',
        description: "Migrating from Ingress NGINX to Envoy Gateway reading the live cluster. Barely any documentation exists on this, which is exactly why it's here.",
        icon: 'ti-topology-star-3',
        badges: [{ label: 'Kubernetes', color: 'blue' }, { label: 'Networking', color: 'gray' }],
      },
      {
        slug: 'oauth2-proxy-github-sso',
        title: 'oauth2-proxy — GitHub SSO for Kubernetes Apps',
        date: '2026-07',
        description: 'Locking an internal app behind GitHub org membership with nginx ingress auth_request. Setup, identity headers, the rollback trap that causes a full outage, and troubleshooting.',
        icon: 'ti-lock',
        badges: [{ label: 'Kubernetes', color: 'blue' }, { label: 'DevOps', color: 'gray' }],
      },
      {
        slug: 'cloudnativepg-gitops',
        title: 'CloudNativePG — Postgres on Kubernetes, the GitOps Way',
        date: '2026-07',
        description: 'Production Postgres with the CNPG operator as a Helm subchart: External Secrets, IRSA-based S3 backups, validation commands, and the password gotcha that broke parsing silently.',
        icon: 'ti-database',
        badges: [{ label: 'Postgres', color: 'green' }, { label: 'Kubernetes', color: 'blue' }],
      },
    ],
  },
  {
    label: 'Workshops',
    notes: [
      {
        slug: 'problem-solving',
        title: 'Problem Solving — Methodology for Survival',
        date: '2025-12',
        description: 'Structured methodology for solving problems in tech teams, inspired by Bruno Munari. Common patterns, practical techniques, and a real-world example.',
        icon: 'ti-bulb',
        badges: [{ label: 'Methodology', color: 'amber' }, { label: 'Workshop', color: 'gray' }],
      },
      {
        href: 'https://albegosu.github.io/albegosu/unir-masterclass/',
        title: 'UNIR Masterclass — How to Survive the KIT',
        date: '2026-01',
        description: 'From industrial design to web development: career path, choosing a master vs a bootcamp, the first job, and soft skills.',
        icon: 'ti-school',
        badges: [{ label: 'Career', color: 'purple' }, { label: 'Workshop', color: 'gray' }],
      },
    ],
  },
]

export function formatNoteDate(date: string): string {
  return new Date(`${date}-01T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
}

export function findNote(slug: string): Note | undefined {
  for (const section of noteSections) {
    const note = section.notes.find(n => n.slug === slug)
    if (note) return note
  }
}
