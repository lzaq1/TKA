export type QuestionType = 'multiple-choice' | 'visual-pattern' | 'riddle';

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  imageUrl?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
}

export interface PuzzlePack {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  imageUrl: string;
  challengesCount: number;
  questions: Question[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isLocked?: boolean;
  requiredLevel?: number;
  progress?: number;
}

export type Screen = 'home' | 'pack-selection' | 'quiz' | 'result';

export interface QuizState {
  currentPack: PuzzlePack | null;
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  startTime: number;
  endTime: number | null;
}
