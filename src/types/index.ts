export interface User {
  id: string;
  email: string;
  name: string;
  role: 'apprenant' | 'formateur' | 'admin';
  created_at: string;
}

export interface Filiere {
  id: string;
  slug: string;
  name: string;
  description: string;
  order: number;
}

export interface Module {
  id: string;
  filiere_id: string;
  slug: string;
  title: string;
  description: string;
  level: 'fondations' | 'professionnel' | 'senior' | 'expert';
  duration_minutes: number;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Lecon {
  id: string;
  module_id: string;
  slug: string;
  title: string;
  content: string; // HTML enrichi
  order: number;
  created_at: string;
}

export interface Quiz {
  id: string;
  module_id: string;
  title: string;
  questions: Question[];
  passing_score: number;
}

export interface Question {
  id: string;
  text: string;
  type: 'multichoice' | 'essay' | 'truefalse';
  options?: string[];
  correct_answer?: string | number;
  explanation: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  module_id: string;
  completed_lecons: string[];
  quiz_score?: number;
  completed_at?: string;
  started_at: string;
}

export interface Certificate {
  id: string;
  user_id: string;
  filiere_id: string;
  issued_at: string;
  score: number;
  verified_url: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan: 'free' | 'pro_monthly' | 'pro_yearly' | 'enterprise';
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  status: 'active' | 'cancelled' | 'past_due';
  current_period_start: string;
  current_period_end: string;
  created_at: string;
}
