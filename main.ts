import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Zorp's trip from Kepler-442b: Earth gets one star — gravity stole my luggage, traffic stole my afternoon, the airport queue stole my soul, but the sate ayam with peanut sauce almost made me stay.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
