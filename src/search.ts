import Fuse from "fuse.js";
import type { ISearch, ISearchResult } from "./types";
const fuse = new Fuse<string>([], {
  includeScore: true,
  distance: 8,
  threshold: 0.15,
});

export function search(args: ISearch): ISearchResult {
  const { swears, sentence } = args;
  fuse.setCollection([sentence]);
  for (let index = 0; index < swears.length; index++) {
    const swear = swears[index];
    const result = fuse.search(swear);
    const isMatch = result.length > 0;
    if (isMatch) {
      return {
        isMatch,
        score: result[0]?.score || 0,
        swear,
        sentence,
      };
    }
  }
  return {
    isMatch: false,
    score: 0,
    swear: "",
    sentence,
  };
}
