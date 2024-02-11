import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://help.clubexpress.com/Content/Home.htm",
  match: "https://help.clubexpress.com/Content/**",
  selector: `.body-container`,
  maxPagesToCrawl: 2000,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
