# Issue Tracker

**Type:** Local markdown (transitional — switch to GitHub when a remote is added)

## Current setup

- Issues are stored as markdown files under `.scratch/<feature-name>/`
- Each issue is a single `.md` file
- The filename serves as the issue title (e.g., `hero-section.md`)
- Frontmatter is used for metadata: status, labels, assignee

## Future: GitHub

When a GitHub remote is added, switch to GitHub Issues. The `gh` CLI will be used for create/read/update operations.

## PRs as a request surface

External PRs should also be treated as a triage surface (once GitHub is configured).

## Label mapping (GitHub-ready)

| Role | Label |
|------|-------|
| Needs triage | `needs-triage` |
| Needs info | `needs-info` |
| Ready for agent | `ready-for-agent` |
| Ready for human | `ready-for-human` |
| Won't fix | `wontfix` |
