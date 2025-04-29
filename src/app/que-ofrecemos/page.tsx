"use client";

import { useState } from "react";
import { Heart, Users, Brain, Shield, ArrowRight } from "lucide-react";
import { background, primary, secondary } from "../../../constants/colors";

export default function QueOfrecemos() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Heart className="h-12 w-12 text-primary mb-4" />,
      title: "Apoyo Emocional",
      description:
        "Brindamos acompañamiento para facilitar una adaptación saludable frente a la experiencia del duelo por pérdida gestacional.",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary mb-4" />,
      title: "Prevención",
      description:
        "Minimizamos los riesgos de desarrollar trastornos como depresión o ansiedad que pueden surgir tras un evento traumático.",
    },
    {
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      title: "Desarrollo de Resiliencia",
      description:
        "Ayudamos a desarrollar habilidades de afrontamiento y resiliencia para enfrentar futuras adversidades.",
    },
    {
      icon: <Users className="h-12 w-12 text-primary mb-4" />,
      title: "Enfoque Sistémico",
      description:
        "Consideramos los diferentes contextos y niveles de influencia, incluyendo comunidad, familia y entorno cultural.",
    },
  ];

  return (
    <section className=" bg-background">
      <div className="text-center mb-12">
        <div style={{ background: secondary, padding: 20 }}>
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: background }}
          >
            Qué Ofrecemos
          </h1>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded"
            style={{ backgroundColor: primary }}
          ></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-12" style={{ padding: 20 }}>
          <p
            className="text-lg text-textPrimary max-w-3xl mx-auto"
            style={{ textAlign: "justify" }}
          >
            Nuestro programa se enfoca en facilitar una adaptación saludable
            frente a la experiencia del duelo, minimizando riesgos y promoviendo
            la resiliencia a través de un enfoque integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 py-16 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform:
                  hoveredCard === index ? "translateY(-10px)" : "translateY(0)",
                borderTop: `4px solid ${
                  hoveredCard === index ? "#4CAF50" : "transparent"
                }`,
              }}
            >
              {service.icon}
              <h3
                className="text-xl font-semibold text-secondary mb-3"
                style={{ color: secondary }}
              >
                {service.title}
              </h3>
              <p className="text-textSecondary">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Transformando la Experiencia
              </h3>
              <p className="text-textPrimary mb-4 text-justify">
                El acompañamiento psicológico que proponemos tiene la capacidad
                de transformar la experiencia de estas mujeres, promoviendo una
                adaptación positiva y previniendo posibles trastornos
                psicológicos a largo plazo.
              </p>
              <p className="text-textPrimary text-justify">
                Ayudamos a construir una red de apoyo sólida, considerando la
                importancia de la comunidad, la familia y el entorno cultural en
                el proceso de recuperación y crecimiento personal.
              </p>
              <button className="mt-6 bg-primary hover:bg-accent text-white py-2 px-6 rounded-full flex items-center transition-all duration-300 group">
                Conoce más sobre nuestro enfoque
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
