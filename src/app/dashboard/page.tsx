'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { modules, filieres } from '@/data/modules';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push('/auth/login');
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;

  return (
    <div className="min-h-screen bg-exsora-cream">
      {/* Header */}
      <header className="bg-exsora-dark text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold">Dashboard</h1>
            <p className="text-gray-300">Bienvenue, {user?.user_metadata?.name || user?.email}</p>
          </div>
          <div className="space-x-4">
            {user?.user_metadata?.role === 'admin' && (
              <Link href="/admin" className="px-4 py-2 bg-exsora-lime text-exsora-dark rounded font-bold">
                Admin
              </Link>
            )}
            <button onClick={handleLogout} className="px-4 py-2 border border-white rounded hover:bg-white/10">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Modules commencés</h3>
            <p className="text-3xl font-serif font-bold text-exsora-blue mt-2">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Modules validés</h3>
            <p className="text-3xl font-serif font-bold text-exsora-blue mt-2">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Temps d'apprentissage</h3>
            <p className="text-3xl font-serif font-bold text-exsora-blue mt-2">0h</p>
          </div>
        </div>

        {/* Modules */}
        <h2 className="text-3xl font-serif font-bold mb-6">Vos formations</h2>
        <div className="space-y-4">
          {modules.slice(0, 3).map((module) => (
            <div key={module.id} className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <span className="text-exsora-lime text-xs uppercase font-bold">
                  {filieres.find((f) => f.id === module.filiere_id)?.name}
                </span>
                <h3 className="text-xl font-serif font-bold mt-2">{module.title}</h3>
                <p className="text-exsora-gray text-sm mt-1">{module.duration_minutes} minutes • {module.level}</p>
              </div>
              <Link
                href={`/formations/${module.id}`}
                className="px-4 py-2 bg-exsora-blue text-white rounded hover:bg-exsora-blue/90"
              >
                Accéder
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-exsora-gray mt-8">
          <Link href="/formations" className="text-exsora-blue hover:underline font-bold">
            Voir tous les modules →
          </Link>
        </p>
      </main>
    </div>
  );
}
