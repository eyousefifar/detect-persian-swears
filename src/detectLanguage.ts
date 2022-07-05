import { englishAlphabet } from "./englishAlphabet";
import { persianAlphabet } from "./persianAlphabet";

export function detectLanguage(
  sentence: string
): "pinglish" | "persian" | "persian-pinglish" {
  const len = sentence.length;
  const q1Index = Math.floor(len / 4);
  const first = sentence[0];
  const last = sentence[len - 1];
  const q1 = sentence[q1Index];
  const q2 = sentence[Math.floor(len / 4)];
  const q3 = sentence[len - q1Index];
  const persian =
    persianAlphabet[first] &&
    persianAlphabet[q1] &&
    persianAlphabet[q2] &&
    persianAlphabet[q3] &&
    persianAlphabet[last];
  if (persian) return "persian";

  const english =
    englishAlphabet[first] &&
    englishAlphabet[q1] &&
    englishAlphabet[q2] &&
    englishAlphabet[q3] &&
    englishAlphabet[last];
  if (english) return "pinglish";
  return "persian-pinglish";
}
