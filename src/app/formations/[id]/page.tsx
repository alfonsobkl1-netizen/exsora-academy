'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { modules, filieres } from '@/data/modules';

export default function ModuleDetailPage({ params }: { params: { id: string } }) {
  const module = modules.find((m) => m.id === params.id);
  const [currentLecon, setCurrentLecon] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);

  if (!module) {
    return (
      <div className="min-h-screen bg-exsora-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Module non trouvé</h1>
          <Link href="/formations" className="text-exsora-blue hover:underline">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  const filiere = filieres.find((f) => f.id === module.filiere_id);
  const lecons = module.lecons || [];
  const quiz = module.quiz;
  const currentLec = lecons[currentLecon];

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const submitQuiz = () => {
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (quizAnswers[i] === q.correct_answer) {
        score++;
      }
    });
    const percentage = (score / quiz.questions.length) * 100;
    alert(`Résultat: ${score}/${quiz.questions.length} (${percentage.toFixed(0)}%)`);
  };

  return (
    <div className="min-h-screen bg-exsora-cream">
      {/* Header */}
      <header className="bg-exsora-dark text-white p-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/formations" className="text-exsora-lime hover:underline">
            ← Retour aux formations
          </Link>
          <span className="text-exsora-lime text-xs uppercase font-bold tracking-widest mt-4 inline-block">
            {filiere?.name}
          </span>
          <h1 className="text-3xl font-serif font-bold mt-2">{module.title}</h1>
          <p className="text-gray-300 mt-2">{module.description}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
              <h3 className="font-bold text-lg mb-4">Leçons ({lecons.length})</h3>
              <div className="space-y-2">
                {lecons.map((lecon, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentLecon(index);
                      setShowQuiz(false);
                    }}
                    className={`text-left w-full px-3 py-2 rounded text-sm transition ${
                      currentLecon === index && !showQuiz
                        ? 'bg-exsora-blue text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}. {lecon.title}
                  </button>
                ))}
                <button
                  onClick={() => setShowQuiz(true)}
                  className={`text-left w-full px-3 py-2 rounded text-sm transition ${
                    showQuiz
                      ? 'bg-exsora-lime text-exsora-dark font-bold'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  🎯 Quiz
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            {!showQuiz && currentLec ? (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-serif font-bold mb-6">{currentLec.title}</h2>
                <div className="rich-content">
                  <div dangerouslySetInnerHTML={{ __html: currentLec.content }} />
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-10 pt-6 border-t">
                  <button
                    onClick={() => setCurrentLecon(Math.max(0, currentLecon - 1))}
                    disabled={currentLecon === 0}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    ← Précédent
                  </button>
                  {currentLecon < lecons.length - 1 ? (
                    <button
                      onClick={() => setCurrentLecon(currentLecon + 1)}
                      className="px-4 py-2 bg-exsora-blue text-white rounded"
                    >
                      Suivant →
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowQuiz(true)}
                      className="px-4 py-2 bg-exsora-lime text-exsora-dark rounded font-bold"
                    >
                      Voir le Quiz →
                    </button>
                  )}
                </div>
              </div>
            ) : showQuiz && quiz ? (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-serif font-bold mb-6">{quiz.title}</h2>
                <div className="space-y-6">
                  {quiz.questions.map((question, qIndex) => (
                    <div key={qIndex} className="border-b pb-6">
                      <h4 className="font-bold mb-3">{qIndex + 1}. {question.text}</h4>
                      {question.type === 'multichoice' && question.options && (
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <label key={oIndex} className="quiz-answer flex items-center">
                              <input
                                type="radio"
                                name={`q-${qIndex}`}
                                value={oIndex}
                                checked={quizAnswers[qIndex] === oIndex}
                                onChange={() => handleQuizAnswer(qIndex, oIndex)}
                                className="mr-3"
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      )}
                      {question.type === 'truefalse' && (
                        <div className="space-y-2">
                          {['Vrai', 'Faux'].map((option, oIndex) => (
                            <label key={oIndex} className="quiz-answer flex items-center">
                              <input
                                type="radio"
                                name={`q-${qIndex}`}
                                value={oIndex}
                                checked={quizAnswers[qIndex] === oIndex}
                                onChange={() => handleQuizAnswer(qIndex, oIndex)}
                                className="mr-3"
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-exsora-gray mt-3 italic">
                        Explication: {question.explanation}
                      </p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={submitQuiz}
                  className="mt-6 px-6 py-3 bg-exsora-blue text-white rounded font-bold"
                >
                  Soumettre le quiz
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
