'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { modules } from '@/data/modules';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user || data.user.user_metadata?.role !== 'admin') {
        router.push('/dashboard');
      } else {
        setUser(data.user);
      }
      setLoading(false);
    };
    checkUser();
  }, [router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;

  return (
    <div className="min-h-screen bg-exsora-cream">
      {/* Header */}
      <header className="bg-exsora-dark text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-serif font-bold">Administration</h1>
          <p className="text-gray-300 mt-2">Gestion des modules et contenus EXSORA</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Modules disponibles</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-exsora-dark text-white">
                <tr>
                  <th className="p-3">Titre</th>
                  <th className="p-3">Filière</th>
                  <th className="p-3">Leçons</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-bold">{module.title}</td>
                    <td className="p-3 text-sm text-exsora-gray">{module.filiere_id}</td>
                    <td className="p-3 text-sm">{module.lecons?.length || 0} leçons</td>
                    <td className="p-3">
                      <button className="px-3 py-1 bg-exsora-blue text-white rounded text-sm">
                        Modifier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-exsora-gray mt-6">
            💡 Actuellement, les modules sont chargés depuis le code. Pour les rendre éditables,
            il faut les enregistrer dans une base de données Supabase.
          </p>
        </div>
      </main>
    </div>
  );
}
