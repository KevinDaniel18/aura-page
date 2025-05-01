"use client";

import { Heart, Shield, HandHeart, Lock } from "lucide-react";
import { useState } from "react";

export default function Valores() {
  const [, setHoveredValue] = useState<number | null>(null);

  const valores = [
    {
      icon: <HandHeart className="h-12 w-12 text-primary" />,
      title: "Respeto",
      description:
        "Reconocer y valorar la experiencia única de cada mujer que ha sufrido una pérdida gestacional.",
      color: "#4CAF50", // primary
    },
    {
      icon: <Lock className="h-12 w-12 text-primary" />,
      title: "Responsabilidad",
      description:
        "Garantizar la confidencialidad y privacidad de la información compartida por las mujeres participantes.",
      color: "#4CAF50", // primary
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Compromiso",
      description:
        "Demostrar un compromiso genuino con la salud mental y el bienestar de las mujeres que han sufrido una pérdida gestacional.",
      color: "#4CAF50", // primary
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Empatía",
      description:
        "Comprender y compartir los sentimientos y emociones de las mujeres que han sufrido una pérdida gestacional.",
      color: "#4CAF50", // primary
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4 mt-10">
            Nuestros Valores
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textPrimary max-w-3xl mx-auto">
            Los pilares que guían nuestro compromiso con cada mujer que
            acompañamos
          </p>
        </div>

        {/* Grid de valores para todas las resoluciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ borderTop: `4px solid ${valor.color}` }}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{valor.icon}</div>
                <h4 className="text-xl font-bold text-secondary mb-2">
                  {valor.title}
                </h4>
                <p className="text-textSecondary">{valor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cita inspiradora */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg text-center">
          <p className="text-xl text-secondary italic font-light mb-4">
            &quot;Nuestros valores nos guían para crear un entorno seguro donde
            cada mujer pueda encontrar apoyo, comprensión y fortaleza para
            superar su pérdida.&quot;
          </p>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
