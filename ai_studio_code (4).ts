export interface DesignSuggestion {
  category: string;
  currentIssue: string;
  recommendation: string;
  impact: 'High' | 'Medium' | 'Low';
  example?: string;
}

export interface ArticleAnalysis {
  title: string;
  formattedMarkdown: string;
  brandColors: string[];
  suggestions: DesignSuggestion[];
}

export interface PosterData {
  title: string;
  year: string;
  date: string;
  lunarDate: string;
  quote: string;
  author: string;
  illustrationPrompt: string;
  illustrationUrl?: string;
  logoUrl?: string;
}