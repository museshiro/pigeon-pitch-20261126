import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Pigeons waste wingbeats guessing lunch crowds; CrumbFutures sells " +
  "tomorrow's bagel-drop forecasts, and we're raising 30,000 crumbs before the gulls become institutional investors.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
