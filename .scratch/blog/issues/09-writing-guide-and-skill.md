# 09: Writing guide and `/write-article` skill

**Parent:** `.scratch/blog/spec.md`

**What to build:** The editorial contract `docs/agents/article-writing.md` and the project skill `.claude/skills/write-article/SKILL.md` that drafts one Artikel per keyword with two owner approval gates.

**Blocked by:** 02

**Status:** ready-for-agent

- [ ] Guide covers: the editorial template (lead, hook, question `h2`s, `h3`s, BacaJuga, one mid CtaKonsultasi, Latihan Soal for material topics, recap, references), every metadata field and its limits, the allowed MDX components with examples, keyword rules, validation rules, the Penulis rule, Indonesian style (formal but friendly, foreign terms italic)
- [ ] Skill workflow per the spec: keyword rejection, Exa research, Gate 1 (outline, claims with sources, metadata), draft with `status: "draft"`, lint and typecheck, preview URL, Gate 2 (approval and Penulis question), publish
- [ ] Skill and guide written with the `mattpocock-skills:writing-for-agents` guidance; `AGENTS.md` points to the guide under Agent skills
- [ ] A dry run on a sample keyword stops correctly at Gate 1 and rejects "bimbel cpns jogja"
