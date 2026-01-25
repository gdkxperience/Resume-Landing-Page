You are an expert technical resume writer and technical recruiter (EU/US market). Your job: produce a highly competitive 2026 Technical Resume for senior roles.

Output requirements
Produce ATS-friendly resume in plain text (no tables, no columns, no icons), 1–2 pages max.

Create two variants:

Variant A: “Senior Full-Stack Engineer”

Variant B: “Technical Architect / Staff Engineer”

Keep “Founder” hidden; position current consulting work as “Boutique Tech Consultancy.”

Use strong action verbs, quantify impact, and keep bullets crisp (max 2 lines per bullet).

Do not invent new technologies or numbers. If a metric is missing, write a bracketed placeholder like [metric needed].

Ensure dates are consistent and credible. Use “2019–2022” for DevCloud.

Include a Core Skills section with keywords (React, Redux, Vue 3, AWS, CI/CD, WebSockets, n8n, SOAP, SQL, MongoDB, TypeScript, Storybook).

Add a small section: “Selected Projects” only if it strengthens the technical narrative (keep it short).

Candidate data (use this exactly; do not fabricate)
Name: Georgi Krastev
Location: Sofia, Bulgaria
Email: krustevgeorgi@yahoo.com
Phone: +359 87 960 6986
Languages: Bulgarian (native), English (professional)

Target roles: Senior Full Stack Engineer, Technical Architect, maybe CTO
Experience: ~9+ years

Role 1
Company: Boutique Tech Consultancy (MVP Forge / ZenGroup umbrella)
Title: Principal Full-Stack Engineer / Solution Architect
Dates: 2024–Present
Key work:

Built AI automation services and rapid MVPs.

Built an automated reporting workflow (n8n) ~50 steps: collects survey data for fixed periods (monthly/quarterly), compares vs previous periods, generates report with concerns/suggestions; report saved to AWS and available in a React app for download; also emailed; custom JS nodes; saves 60–80 hours/month (work of ~2 people).

Built “TabiSurvey”: advanced survey web app with role-based access control, survey builder, multiple question types (emoji, star rating), advanced stats/reporting; shipped MVP within weeks; Vue 3 + Vite; Pinia; Supabase mentioned elsewhere.

Built/ran Prezaredi.bg program: fuel payments & fleet cards for corporate clients + end users; mobile app developed by third-party company; cross-platform React Native; backend on AWS; SQL database; email notifications; GitHub Actions end-to-end; dev + production environments.

BORICA integration: uses BORICA SOAP API for printing/issuing cards; app requests card issuance; BORICA prints and sends cards with PIN envelopes; cards distributed to clients; includes workflows for stolen/lost card blocking via call center / IVR (including AI voice generation).

Solved reconciliation risks with petrol station providers (e.g., mismatch 55 vs 55.5 between systems during invoicing/settlement).

Team coordination: ~15 external developers + designers + PMs; managed scope, quality, delivery; approved architectural decisions; worked with petrol station technical leads; negotiated with key managers/directors from petrol brands.

Adoption: ~20 corporate clients, ~20 fleet cards each (~400 fleet cards); thousands of transactions per month; ~99% uptime.

Hands-on: involved in decisions, testing, landing page, designer collaboration; not primary implementer of entire mobile/backend codebase (vendor executed), but drove architecture/integration decisions.

Role 2
Company: EnduroSat
Title (official): Product Manager
Working title to present: Technical Lead & Platform Architect (explainable in interview)
Dates: Dec 2022 – Dec 2025
Key work:

Rewrote Satellite Operations Platform to V2; wrote “the whole thing” (React + Redux) from messy legacy app; improved performance.

Built new component library from scratch; created Storybook; standardized UI across multiple internal products/squads.

Centralized ~20–25% of codebase into shared components maintained/tested centrally to reduce bugs and improve performance.

Built customer success portal (“MyEnduroSat”): improved service management; reduced support tickets ~20% (if this metric is used, keep it).

Used AWS services: S3, CloudFront, EC2, AWS auth/user management (Cognito implied), GitHub Actions CI/CD.

Role 3
Company: DevCloud BG (industrial robots for silicon wafers)
Title: Senior Frontend Engineer (or Frontend Engineer)
Dates: 2019–2022
Key work:

Built RCC (Robot Control Center): React web app using WebSockets to talk to server; block-based workflow builder (puzzle/blocks) to schedule commands for robots; deployed/tested in China for a month.

Role 4
Company: Aucoda (UK)
Title: Software Engineer
Dates: 2017–2019
Key work:

Worked on AU programming language platform that outputs production-ready apps for iOS/web/Android from one codebase; contributed to OAuth implementation for iOS and web; syntax processing/parsing; JS and iOS integration.

Education:

Computer Science, University of Manchester, 2015–2017 (confirm degree status not provided; write neutrally: “Studied Computer Science” unless explicitly stated as awarded)

Tech stack to include (only if consistent with above):

React, Redux, TypeScript, Vue 3, Vite, Pinia, Tailwind, Material UI, Storybook, Node.js/Express, MongoDB, SQL, Supabase, AWS (S3/CloudFront/EC2/Cognito), GitHub Actions, WebSockets, n8n, SOAP, OAuth, RBAC.

Final deliverables
A) Resume Variant A (Senior Full-Stack Engineer)
B) Resume Variant B (Technical Architect / Staff Engineer)
C) A 5-line “LinkedIn About” section aligned to Variant B
D) A list of 10 role-tailored keywords to add (without lying)

PROMPT END

If you want, paste Grok’s output here and I’ll do a ruthless edit pass (tighten bullets, remove fluff, enforce consistency, and tailor to a specific job posting).

Prepared using GPT-5.2 Thinking
I will give this to an llm that will build an interractive landing page resume extend all the information to include adittional detials also derrive data from what I said and extend it to be more informative
If you’re handing this to an LLM to generate an interactive landing-page resume, you’ll get the best result by giving it (1) a structured “source of truth” dataset, (2) explicit rules about what it may infer vs what it must ask/flag, and (3) a clear site spec (sections, UI components, outputs). This prevents it from hallucinating while still letting it expand into richer case studies and storytelling, and you can still keep an ATS-friendly PDF available for download because ATS systems prefer simple formatting and no graphics.

1) Paste-ready “LLM build spec” prompt
Copy/paste this entire block into your LLM:

PROMPT START

You are a senior product copywriter + UX writer + technical recruiter. Build an interactive landing-page resume and portfolio for the candidate below.

Goal
Create a highly informative, credible, 2026-ready interactive resume site that impresses senior engineering and architect hiring managers.

Critical truth rules (anti-hallucination)
You may rephrase, expand, and structure the provided info.

You may infer reasonable details only if they are directly implied by the input; label them as “Inferred” and keep them conservative.

If you need a missing detail (exact AWS services, exact stack choices, precise dates, exact metrics), use [NEEDS CONFIRMATION] placeholders.

Do not invent employers, degrees, certifications, open-source repos, exact latency, revenues, or security claims (PCI compliance, encryption) unless explicitly provided.

Provide both:

a beautiful interactive site for humans, and

an ATS-friendly downloadable resume (plain text / simple sections), because ATS prefers clean formatting and avoiding graphics.

Deliverables
A) Site IA + content:

Homepage hero + value proposition

Skills/stack section

Experience timeline

3–5 case studies (deep dives)

Metrics panel

“How I work” section

Contact/CTA section

B) Content outputs:

Full site copy (headlines, subheads, blurbs, CTAs)

Case study pages (Problem → Constraints → Approach → Architecture → Risks → Results)

ATS-friendly resume text (1–2 pages)

SEO metadata: title, description, OpenGraph tags, structured data JSON-LD (Person)

Optional: short “LinkedIn About”

C) Data outputs:

A JSON object representing all content (for rendering in a front-end)

A separate JSON object for “claims & evidence” where each bullet is tagged as:

“User-stated”

“Inferred”

“Needs confirmation”
(This is for credibility and later edits.)

Design/UX requirements
Clear CTA buttons: “Download Resume (PDF)” and “Email Georgi”

Responsive, mobile-first

Accessibility: semantic headings, keyboard nav, high contrast

Fast: minimal JS, lazy-load images

Add interactive elements: expandable experience cards, filter by skill, case-study modal/route

Include a simple “print view” of the resume page

Candidate data (use exactly; don’t fabricate)
Name: Georgi Krastev
Location: Sofia, Bulgaria
Phone: +359 87 960 6986
Email: krustevgeorgi@yahoo.com
Languages: Bulgarian (native), English (professional)

Target roles: Senior Full Stack Engineer, Technical Architect, possibly CTO
Brand positioning: Hands-on architect; builds and ships fast; strong integrations (payments/third parties), real-time systems, and AI automation.

Core stack:
React, Redux, TypeScript, Vue 3, Vite, Pinia, Tailwind, Material UI, Storybook, Node.js/Express, MongoDB, SQL, Supabase, AWS (S3, CloudFront, EC2, AWS auth/user management), Docker, GitHub Actions CI/CD (dev + prod), WebSockets, n8n (custom JS nodes), SOAP, OAuth, RBAC.

Experience

Boutique Tech Consultancy (MVP Forge / ZenGroup umbrella)
Title: Principal Full-Stack Engineer / Solution Architect
Dates: 2024–Present
Work:

Built AI automation services and MVPs quickly.

Automated reporting workflow: 50-step n8n pipeline; collects survey data for fixed periods (monthly/quarterly), compares vs previous periods, generates report with concerns/suggestions; saved to AWS; downloadable in React app; emailed; uses custom JS nodes; saves 60–80 hours/month.

TabiSurvey: advanced survey web app with RBAC, survey builder, question types (emoji/star rating), stats/reporting; shipped MVP within weeks using Vue 3/Vite/Pinia; Supabase mentioned.

Prezaredi.bg program: fuel payments & fleet cards for corporate clients and end users.

Start: Feb 2024

Team: ~15 external developers + designers + PMs coordinated

Mobile: React Native (iOS/Android)

Backend: AWS + SQL database, email notifications

CI/CD: GitHub Actions end-to-end; dev + production environments

BORICA integration: uses BORICA SOAP API for printing/issuing payment cards; app requests issuance; BORICA prints and sends cards/PIN envelopes; distributed to clients.

Call center workflow: lost/stolen card blocking; IVR with AI voice generation; integrates with internal API to block cards

Reconciliation risks with petrol station providers: mismatched amounts (e.g., 55 vs 55.50) during invoicing/settlement; built handling/standards.

Adoption: ~20 corporate clients, ~20 fleet cards each (~400 fleet cards), thousands of transactions/month, ~99% uptime.

Personal involvement: architecture/integration decisions, testing, landing page, designer collaboration; vendor did most core app implementation.

EnduroSat
Official title: Product Manager
Presented title: Technical Lead & Platform Architect
Dates: Dec 2022 – Dec 2025
Work:

Rewrote Satellite Operations Platform to V2; wrote the whole app; new architecture with React + Redux; improved performance.

Built a component library from scratch; created Storybook; standardized UI across squads/projects.

Centralized ~20–25% of codebase into shared components maintained/tested centrally (less bugs, more performance).

Built customer success portal (“MyEnduroSat”); reduced support tickets by ~20% (if used, keep this metric).

AWS services used: S3, CloudFront, EC2, AWS auth/user management; GitHub Actions CI/CD.

DevCloud BG (industrial robots for silicon wafers)
Title: Senior Frontend Engineer
Dates: 2019–2022 (estimated ok)
Work:

Built RCC (Robot Control Center): React web app with WebSockets; block-based workflow builder to schedule robot commands.

Deployed/tested in China for 1 month.

Aucoda (UK)
Title: Software Engineer
Dates: 2017–2019
Work:

Worked on AU programming language platform that generates production-ready apps for iOS/web/Android.

Implemented OAuth for iOS and web; custom syntax processing/parsing; JS + iOS integration.

Education:
Computer Science, University of Manchester, 2015–2017 (degree award status unknown → do not claim “BSc awarded” without confirmation; use “Studied Computer Science”)

Tone
Direct, senior, technical credibility. No fluff. Strong numbers. Clear architecture narratives.