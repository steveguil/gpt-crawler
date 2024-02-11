import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.tricitycyclists.org",
  match: "https://www.tricitycyclists.org/**",
  maxPagesToCrawl: 50,
  outputFileName: "tcc-output.json",
  maxTokens: 2000000,
};
