"use client";

import { Phone, MessageSquareText } from "lucide-react";

export default function Contacto() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4 mt-10">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textPrimary max-w-2xl mx-auto">
            Estamos disponibles para escucharte y acompañarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Líneas de atención
            </h3>
            <p className="text-textSecondary">
              Puedes comunicarte con nuestro equipo para recibir contención y
              orientación.
            </p>
            <p className="mt-4 text-lg text-primary font-semibold">
              Llama al: <a href="tel:+11234567890">+1 123 456 7890</a>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <MessageSquareText className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="text-xl font-semibold text-secondary mb-2">
              Chat directo
            </h3>
            <p className="text-textSecondary">
              Habilitamos un espacio de conversación segura para responder tus
              inquietudes en tiempo real.
            </p>
            {/* Aquí podrías agregar un botón para abrir el chat */}
          </div>
        </div>
      </div>
    </section>
  );
}
