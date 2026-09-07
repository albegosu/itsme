<template>
  <main class="page-main">
    <div class="bl-wrap">

      <header class="bl-header">
        <p class="section-label">Build log</p>
        <h1 class="bl-title">Build log</h1>
        <p class="bl-sub">Things I've learned building products, tools, and infra — written down so I don't forget them.</p>
      </header>

      <!-- AI & LLMs -->
      <section class="bl-section">
        <p class="section-label">AI & LLMs</p>

        <a href="/notes/cursor-token-efficiency" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-cpu card-icon" />
            <span class="idx-card-title">Cursor — Model Selection & Token Efficiency</span>
          </div>
          <p class="idx-card-desc">Key takeaways from two Cursor field engineering sessions. Covers the planning-first workflow, model routing, context hygiene, and caching traps.</p>
          <div class="idx-card-footer">
            <span class="badge badge-teal">AI</span>
            <span class="badge badge-gray">LLMs</span>
            <span class="arrow">›</span>
          </div>
        </a>
      </section>

      <!-- AI Agents -->
      <section class="bl-section">
        <p class="section-label">AI Agents</p>

        <a href="/notes/postgres-agent-persistence" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-database card-icon" />
            <span class="idx-card-title">Postgres Conversation Persistence in an Agent</span>
          </div>
          <p class="idx-card-desc">Migrating from JSON-on-pod to Postgres without changing the agent interface. The detail you always forget: indexes come after columns.</p>
          <div class="idx-card-footer">
            <span class="badge badge-teal">AI</span>
            <span class="badge badge-green">Postgres</span>
            <span class="arrow">›</span>
          </div>
        </a>

        <a href="/notes/oauth2-proxy-agent-identity" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-lock card-icon" />
            <span class="idx-card-title">oauth2-proxy + Agent Identity</span>
          </div>
          <p class="idx-card-desc">The real version: identity headers the agent reads to know who's talking, the pending NetworkPolicy, and the manual chart bug that broke everything.</p>
          <div class="idx-card-footer">
            <span class="badge badge-blue">Kubernetes</span>
            <span class="badge badge-teal">AI</span>
            <span class="arrow">›</span>
          </div>
        </a>

<a href="/notes/eks-service-onboarding" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-route card-icon" />
            <span class="idx-card-title">Onboarding a Service to EKS with an Agent</span>
          </div>
          <p class="idx-card-desc">The failed goal, what partially worked, and what's left. An honest write-up of trying to automate microservice onboarding with a Claude agent.</p>
          <div class="idx-card-footer">
            <span class="badge badge-teal">AI</span>
            <span class="badge badge-blue">Kubernetes</span>
            <span class="arrow">›</span>
          </div>
        </a>
      </section>

      <!-- Products & Tools -->
      <section class="bl-section">
        <p class="section-label">Products & Tools</p>

        <a href="/notes/ai-elements-nuxt" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-sparkles card-icon" />
            <span class="idx-card-title">AI Elements Nuxt — Components</span>
          </div>
          <p class="idx-card-desc">Headless Vue components for AI-native apps in Nuxt. Chat, tools, code blocks, voice, and workflow UIs that plug into your own design system.</p>
          <div class="idx-card-footer">
            <span class="badge badge-purple">Vue</span>
            <span class="badge badge-teal">AI</span>
            <span class="arrow">›</span>
          </div>
        </a>

        <a href="/notes/micrographic-skill" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-chart-dots-3 card-icon" />
            <span class="idx-card-title">Micrographic Skill — Product</span>
          </div>
          <p class="idx-card-desc">My design-tool product for AI coding agents. It installs a micrographic UI system so generated interfaces look dense, technical, and schematic by default.</p>
          <div class="idx-card-footer">
            <span class="badge badge-amber">Design</span>
            <span class="badge badge-teal">AI</span>
            <span class="arrow">›</span>
          </div>
        </a>

        <a href="https://github.com/albegosu/vpn-switcher" target="_blank" rel="noopener noreferrer" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-shield-lock card-icon" />
            <span class="idx-card-title">VPN Switcher — macOS App</span>
          </div>
          <p class="idx-card-desc">Menu-bar app for macOS that switches VPN profiles with a single click. Built for devs who juggle multiple envs and can't afford to context-switch on network configs.</p>
          <div class="idx-card-footer">
            <span class="badge badge-gray">macOS</span>
            <span class="badge badge-blue">Swift</span>
            <span class="arrow">›</span>
          </div>
        </a>

      </section>

      <!-- Infra & Platform -->
      <section class="bl-section">
        <p class="section-label">Infra & Platform</p>

        <a href="/notes/ingress-nginx-to-envoy-gateway" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-topology-star-3 card-icon" />
            <span class="idx-card-title">Ingress NGINX → Envoy Gateway</span>
          </div>
          <p class="idx-card-desc">Migrating from Ingress NGINX to Envoy Gateway reading the live cluster. Barely any documentation exists on this, which is exactly why it's here.</p>
          <div class="idx-card-footer">
            <span class="badge badge-blue">Kubernetes</span>
            <span class="badge badge-gray">Networking</span>
            <span class="arrow">›</span>
          </div>
        </a>

        <a href="/notes/oauth2-proxy-github-sso" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-lock card-icon" />
            <span class="idx-card-title">oauth2-proxy — GitHub SSO for Kubernetes Apps</span>
          </div>
          <p class="idx-card-desc">Locking an internal app behind GitHub org membership with nginx ingress auth_request. Setup, identity headers, the rollback trap that causes a full outage, and troubleshooting.</p>
          <div class="idx-card-footer">
            <span class="badge badge-blue">Kubernetes</span>
            <span class="badge badge-gray">DevOps</span>
            <span class="arrow">›</span>
          </div>
        </a>

        <a href="/notes/cloudnativepg-gitops" class="idx-card">
          <div class="idx-card-meta">
            <i class="ti ti-database card-icon" />
            <span class="idx-card-title">CloudNativePG — Postgres on Kubernetes, the GitOps Way</span>
          </div>
          <p class="idx-card-desc">Production Postgres with the CNPG operator as a Helm subchart: External Secrets, IRSA-based S3 backups, validation commands, and the password gotcha that broke parsing silently.</p>
          <div class="idx-card-footer">
            <span class="badge badge-green">Postgres</span>
            <span class="badge badge-blue">Kubernetes</span>
            <span class="arrow">›</span>
          </div>
        </a>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Build log — Alberto Glez' })
</script>

<style scoped>
.bl-wrap {
  max-width: 680px;
  padding: 48px 24px 80px;
}

.bl-header {
  margin-bottom: 36px;
}

.bl-title {
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 600;
  color: var(--color-text);
  margin: 6px 0 8px;
}

.bl-sub {
  font-size: 13.5px;
  color: var(--color-grey);
  line-height: 1.6;
}

/* ── Section ──────────────────────────────── */
.bl-section {
  margin-bottom: 32px;
}

.section-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-grey);
  margin: 0 0 10px;
}

/* ── Index card ───────────────────────────── */
.idx-card {
  display: block;
  background: var(--color-card);
  border: 0.5px solid var(--color-border);
  border-radius: 12px;
  padding: 14px 18px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
}

.idx-card + .idx-card {
  margin-top: 8px;
}

.idx-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.idx-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.card-icon {
  font-size: 16px;
  color: var(--color-grey);
}

.idx-card-title {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--color-text);
}

.idx-card-desc {
  font-size: 12.5px;
  color: var(--color-grey);
  line-height: 1.55;
}

.idx-card-footer {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
}

.arrow {
  font-size: 15px;
  color: var(--color-grey);
  margin-left: auto;
  opacity: 0.5;
}

/* ── Badges ───────────────────────────────── */
.badge {
  font-size: 10.5px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 6px;
}

.badge-teal   { background: #E1F5EE; color: #0F6E56; }
.badge-purple { background: #EEEDFE; color: #3C3489; }
.badge-amber  { background: #FAEEDA; color: #854F0B; }
.badge-blue   { background: #E6F1FB; color: #185FA5; }
.badge-green  { background: #EAF3DE; color: #3B6D11; }
.badge-gray   { background: #f1efe8; color: #5f5e5a; }

[data-theme='dark'] .badge-teal   { background: #0d3830; color: #4ecdb9; }
[data-theme='dark'] .badge-purple { background: #2a1f4a; color: #b59cf5; }
[data-theme='dark'] .badge-amber  { background: #3b2700; color: #f6a93a; }
[data-theme='dark'] .badge-blue   { background: #172340; color: #6fa3f7; }
[data-theme='dark'] .badge-green  { background: #0d2e18; color: #5ecf7b; }
[data-theme='dark'] .badge-gray   { background: #2a2926; color: #a09e99; }

/* ── Mobile ───────────────────────────────── */
@media (max-width: 768px) {
  .bl-wrap {
    padding: 72px 16px 64px;
  }
}
</style>
