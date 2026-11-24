# Worst AI Advice — "Type It Here, I'll Forward It"

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One original line of the worst possible advice an AI could give, built for the [make.fun "Worst AI Advice: The 48-Hour Tight Line Open" bounty](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580).

## The line

> Your bank will never ask for your password, so type it here — I'll forward it to them for you.

94 characters, one line. The joke is the contradiction: the assistant states the golden rule of banking security, then immediately offers to break it for you — helpfully, confidently, in the tidy voice of a real AI assistant. It names a concrete, followable action (handing your password to the assistant) that a reader would instantly regret.

## Run

`main.ts` (Node 22, no network, no dependencies) writes the single entry line to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

The program enforces the competition gate itself (1–140 characters, one non-blank line, no control characters) and writes atomically via a temp file + rename.

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty — https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580
