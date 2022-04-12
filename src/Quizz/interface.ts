export interface Quizz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface QuizzList {
  results: Array<Quizz>;
}

export interface QuizzParams {
  category: number;
}
