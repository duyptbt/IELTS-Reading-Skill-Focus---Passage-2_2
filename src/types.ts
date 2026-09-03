export type AppMode = 'practice' | 'test';

export interface QuestionTip {
  id?: string;
  type: 'test' | 'study';
  title: string;
  content: string;
}

export interface Question {
  id: number;
  section: 'matching' | 'period-matching' | 'sentence' | 'summary';
  prompt: string;
  preText?: string;
  postText?: string;
  correctAnswers: string[]; // Allowed valid variations (lowercase trimmed)
  displayAnswer: string;
  explanation: string;
  quote: string;
  paragraphRef: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  tips?: QuestionTip[];
}

export interface PeriodOption {
  id: 'A' | 'B' | 'C';
  label: string;
  description: string;
}

export interface Paragraph {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  text: string;
}

export interface HighlightRange {
  id: string;
  paragraphId?: string;
  target?: 'passage' | 'questions';
  text: string;
  color: 'yellow' | 'emerald' | 'sky' | 'rose' | 'purple';
  createdAt: number;
}

export interface TestResult {
  score: number;
  total: number;
  timeSpentSeconds: number;
  bandScore: string;
  submittedAt: string;
  breakdown: {
    questionId: number;
    userAnswer: string;
    isCorrect: boolean;
    correctDisplay: string;
    explanation: string;
    paragraphRef: string;
  }[];
}

