export interface ISearch {
  swears: string[];
  sentence: string;
}
export interface ISearchResult {
  score: number;
  isMatch: boolean;
  swear: string;
  sentence: string;
}
