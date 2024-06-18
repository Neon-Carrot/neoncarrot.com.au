export type Source = {
  content: string;
  filename: string;
  page: number;
  score: number; // 0 - 1
};

export type Response = {
  query_text: string;
  response_text: string;
  sources: Source[];
};

export type History = {
  ai: string;
  human: string;
};
