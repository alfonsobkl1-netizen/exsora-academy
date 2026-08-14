'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { filieres, modules } from '@/data/modules';

export default function FormationsPage() {
  const [selectedFiliere, setSelectedFiliere] = useState<string | null>(null);

  const filteredModules = selectedFiliere
    ? modules.filter((m) => m.filiere_id === selectedFiliere)
    : modules;

  return (
    <div className="min-h-screen bg-exsora-cream">
      <header className="bg-exsora-dark text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-exsora-lime hover:underline mb-4 inline-block">
            ← Accueil
          </Link>
          <h1 className="text-4xl font-serif font-bold">Les formations EXSORA</h1>
          <p className="text-gray-300 mt-2">10 modules complèts couvrant Executive Search et Fondamentaux du recrutement.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="mb-10">
          <h3 className="text-lg font-bold mb-4">Filtrer par filière</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFiliere(null)}
              className={`px-4 py-2 rounded transition ${
                selectedFiliere === null
                  ? 'bg-exsora-blue text-white'
                  : 'bg-white border border-exsora-gray'
              }`}
            >
              Toutes
            </button>
            {filieres.map((filiere) => (
              <button
                key={filiere.id}
                onClick={() => setSelectedFiliere(filiere.id)}
                className={`px-4 py-2 rounded transition ${
                  selectedFiliere === filiere.id
                    ? 'bg-exsora-blue text-white'
                    : 'bg-white border border-exsora-gray'
                }`}
              >
                {filiere.name}
              </button>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <Link
              key={module.id}
              href={`/formations/${module.id}`}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <span className="text-exsora-lime text-xs uppercase font-bold tracking-widest">
                {filieres.find((f) => f.id === module.filiere_id)?.name}
              </span>
              <h3 className="text-xl font-serif font-bold mt-3 mb-3 text-exsora-black line-clamp-2">
                {module.title}
              </h3>
              <p className="text-exsora-gray text-sm mb-4 line-clamp-2">
                {module.description}
              </p>
              <div className="flex justify-between text-xs text-exsora-gray">
                <span>{module.duration_minutes} min</span>
                <span>{module.level}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
