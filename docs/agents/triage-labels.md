# Triage Labels

## Default vocabulary

All five canonical roles use their default label names:

| Role | Label | Description |
|------|-------|-------------|
| Needs triage | `needs-triage` | Maintainer needs to evaluate |
| Needs info | `needs-info` | Waiting on reporter for more information |
| Ready for agent | `ready-for-agent` | Fully specified, AFK-ready (an agent can pick it up with no human context) |
| Ready for human | `ready-for-human` | Needs human implementation |
| Won't fix | `wontfix` | Will not be actioned |

## Usage

These labels are applied by the `triage` skill when processing incoming issues through its state machine. No overrides have been configured — the labels match their canonical names exactly.
