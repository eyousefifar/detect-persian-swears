import { search } from "./search";
import { detectLanguage } from "./detectLanguage";
import { persianSwears } from "./persianDataSet";
import { pinglishDataSet } from "./pinglishDataSet";

import type { ISearchResult } from "./types";

export function detectPersianSwears(sentence: string): ISearchResult {
  const language = detectLanguage(sentence);
  if (language === "persian") {
    return search({ swears: persianSwears, sentence });
  }
  if (language === "pinglish") {
    return search({ swears: pinglishDataSet, sentence });
  }
  if (language === "persian-pinglish") {
    const persianResult = search({ swears: persianSwears, sentence });
    const pinglishResult = search({ swears: pinglishDataSet, sentence });
    return persianResult.isMatch ? persianResult : pinglishResult;
  }
  return {
    isMatch: false,
    score: 0,
    swear: "",
    sentence,
  };
}
