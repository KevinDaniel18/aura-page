"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  background, // Café claro
  primary, // Verde
  secondary, // Café oscuro
  textPrimary, // Gris oscuro
  textSecondary, // Gris medio
  accent, // Verde suave
} from "../../../constants/colors";
import Lottie from "lottie-react";
import heroAnimation from "../../../public/animations/helping-hands.json";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Fondo con animación Lottie */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Lottie
            animationData={heroAnimation}
            loop={false}
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(1.1)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${primary}60 0%, ${secondary}40 100%)`,
              backdropFilter: "blur(3px)",
            }}
          ></div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div
        className="absolute left-0 top-0 h-32 w-32 opacity-20 md:h-64 md:w-64"
        style={{
          background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
          transform: "translate(-30%, -30%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 h-40 w-40 opacity-20 md:h-80 md:w-80"
        style={{
          background: `radial-gradient(circle, ${secondary} 0%, transparent 70%)`,
          transform: "translate(30%, 30%)",
        }}
      ></div>

      {/* Contenido del hero */}
      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{
              color: textPrimary, // Texto más oscuro
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <span className="block">Creciendo después</span>
            <span className="block">de la pérdida</span>
          </h1>
          <p
            className="mb-8 max-w-xl text-lg sm:text-xl"
            style={{
              color: textSecondary, // Gris medio para el texto
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Recursos para la adaptación saludable después de una pérdida
            gestacional
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-md px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
              style={{
                backgroundColor: secondary,
                color: background, // Texto en blanco para contrastar con el fondo oscuro
              }}
            >
              Contáctanos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/recursos"
              className="inline-flex items-center rounded-md border-2 px-6 py-3 text-base font-medium transition-colors hover:bg-white/10"
              style={{
                borderColor: secondary, // Borde en color café
                color: secondary, // Texto en color café
                backgroundColor: "transparent", // Fondo transparente
              }}
            >
              Explorar recursos
            </Link>
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 w-full"
        style={{
          background: `linear-gradient(to top, ${background} 0%, transparent 100%)`,
        }}
      ></div>
    </section>
  );
}
