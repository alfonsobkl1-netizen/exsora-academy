import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });
  return { data, error };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  return { user: data?.user, error };
}

export async function getFilieres() {
  const { data, error } = await supabase
    .from('filieres')
    .select('*')
    .order('order', { ascending: true });
  return { data, error };
}

export async function getModules(filiere_id?: string) {
  let query = supabase
    .from('modules')
    .select('*')
    .order('order', { ascending: true });
  
  if (filiere_id) {
    query = query.eq('filiere_id', filiere_id);
  }
  
  const { data, error } = await query;
  return { data, error };
}

export async function getModule(id: string) {
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function getUserProgress(user_id: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', user_id);
  return { data, error };
}

export async function updateProgress(user_id: string, module_id: string, completed_lecons: string[]) {
  const { data: existing } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', user_id)
    .eq('module_id', module_id)
    .single();

  if (existing) {
    const { data, error } = await supabase
      .from('user_progress')
      .update({ completed_lecons })
      .eq('id', existing.id);
    return { data, error };
  } else {
    const { data, error } = await supabase
      .from('user_progress')
      .insert([
        {
          user_id,
          module_id,
          completed_lecons,
          started_at: new Date().toISOString(),
        },
      ]);
    return { data, error };
  }
}
