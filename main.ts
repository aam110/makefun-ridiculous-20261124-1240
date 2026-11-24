import * as fs from "node:fs";

const sentence =
  "We sell bottled fog to haunted houses by the crate, because a ghost tour without fog is a shed charging admission.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence, "utf8");
