"use client";

import {
  UserCircle,
  NotebookPen,
  Brain,
  Flower,
  Sparkles,
  Footprints,
} from "lucide-react";

export default function Servicios() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4 mt-10">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textPrimary max-w-3xl mx-auto">
            Un programa integral que acompaña el proceso de duelo gestacional
            desde una mirada emocional, física y simbólica.
          </p>
        </div>

        {/* Lista de servicios */}
        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <UserCircle className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Atención personalizada
              </h3>
              <p className="text-textPrimary">
                Adaptamos cada proceso a las necesidades únicas de cada mujer,
                brindando contención empática y acompañamiento respetuoso.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            <NotebookPen className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Registro del pensamiento
              </h3>
              <p className="text-textPrimary">
                Herramienta terapéutica que ayuda a identificar y comprender los
                patrones mentales, promoviendo el autoconocimiento.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            <Brain className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Terapia mindfulness
              </h3>
              <p className="text-textPrimary">
                Fomenta la atención plena y la presencia en el momento presente,
                favoreciendo la regulación emocional y la serenidad interior.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            <Footprints className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Cuidado físico y reconexión corporal
              </h3>
              <p className="text-textPrimary">
                Actividades como caminatas conscientes, movimiento corporal o
                danza libre emocional que facilitan la expresión emocional y la
                conexión con el cuerpo (previo alta médica).
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            <Flower className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Cosechas de esperanza
              </h3>
              <p className="text-textPrimary">
                Actividad simbólica que invita a reconocer y valorar los
                aprendizajes y avances personales a lo largo del proceso.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-6">
            <Sparkles className="w-12 h-12 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Ritual de cierre y renovación
              </h3>
              <p className="text-textPrimary">
                Espacio terapéutico para despedirse del dolor vivido con
                gratitud, renovar energía y abrirse con esperanza a una nueva
                etapa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
