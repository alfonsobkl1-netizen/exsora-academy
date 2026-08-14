'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    checkUser();
  }, []);

  return (
    <div className="min-h-screen bg-exsora-cream">
      {/* Header */}
      <header className="bg-exsora-dark text-white">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">EXSORA</h1>
          <div className="space-x-4">
            <Link href="/formations" className="hover:text-exsora-lime">
              Formations
            </Link>
            {user ? (
              <>
                <Link href="/dashboard" className="hover:text-exsora-lime">
                  Dashboard
                </Link>
                {user.user_metadata?.role === 'admin' && (
                  <Link href="/admin" className="hover:text-exsora-lime">
                    Admin
                  </Link>
                )}
              </>
            ) : (
              <>
               <Link href="/auth/login" className="hover:text-exsora-lime">
                  Connexion
                </Link>
                <Link href="/auth/signup" className="btn-accent">
                  S'inscrire
                </Link>s
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-exsora-dark text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-exsora-lime text-sm uppercase tracking-widest mb-4">
            EXSORA — L'académie du recrutement et des talents
          </p>
          <h2 className="text-5xl font-serif font-bold mb-6">
            Recruter n'est pas un don. C'est une science.
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Apprenez Executive Search, sourcing, recrutement généraliste, Talent Acquisition. Des modules réels. Des cas pratiques. Des résultats mesurables.
          </p>
          <div className="space-x-4">
            <Link href="/formations" className="btn-accent inline-block">
              Découvrir les formations
            </Link>
            {!user && (
              <Link href="/auth/signup className="inline-block px-6 py-3 border...">
                Commencer gratuit
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Pourquoi EXSORA ?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-serif font-bold mb-3">Contenu réel</h4>
              <p className="text-exsora-gray">
                Rédigé par des praticiens qui recrutent en ce moment. Pas de théorie vide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-serif font-bold mb-3">Cas pratiques</h4>
              <p className="text-exsora-gray">
                Chaque module : exercices réels, études de cas, quizs avec correction expliquée.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-serif font-bold mb-3">Progressif</h4>
              <p className="text-exsora-gray">
                De débutant à expert. Choisissez votre rythme. Validez en quizz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-exsora-blue text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold mb-6">Prêt à apprendre ?</h3>
          <p className="text-xl mb-8">
            Inscrivez-vous et commencez votre premier module gratuit.
          </p>
          {!user ? (
            <Link href="/auth/signup className="btn-accent inline-block">
              Créer mon compte
            </Link>
          ) : (
            <Link href="/dashboard" className="btn-accent inline-block">
              Aller au dashboard
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-exsora-dark text-white py-10 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
          <p>© 2024 EXSORA. Formations professionnelles en recrutement et gestion des talents.</p>
        </div>
      </footer>
    </div>
  );
}
