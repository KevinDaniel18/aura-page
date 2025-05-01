import {
  Target,
  Heart,
  MessageCircle,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function Objetivos() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary mb-4 mt-10">
          Objetivos
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <p className="text-lg text-textPrimary mb-6 leading-relaxed">
                Brindar apoyo a aquellas mujeres que enfrentan la pérdida de un
                embarazo. Reconocemos que el impacto emocional y psicológico de
                un embarazo puede ser difícil de enfrentar, por lo que nos
                comprometemos a crear un espacio seguro y empático donde las
                mujeres puedan expresar sus sentimientos, recibir información
                clara y acceder a recursos de salud mental.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-textSecondary">
                    Creación de un espacio seguro y empático para expresión
                    emocional
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-textSecondary">
                    Acceso a información clara y recursos de salud mental
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-textSecondary">
                    Acompañamiento profesional en el proceso de duelo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Círculo decorativo principal */}
              <div className="absolute inset-0 rounded-full bg-background border-4 border-primary"></div>

              {/* Iconos en círculos pequeños alrededor */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-accent">
                <Target className="h-8 w-8 text-primary" />
              </div>

              <div className="absolute top-1/4 -right-6 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-accent">
                <Heart className="h-8 w-8 text-primary" />
              </div>

              <div className="absolute bottom-1/4 -right-6 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-accent">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-accent">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>

              <div className="absolute top-1/4 -left-6 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-accent">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>

              {/* Texto central */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <h3 className="text-xl font-bold text-secondary">
                  Nuestro Compromiso
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-accent bg-opacity-10 rounded-lg p-6 border-l-4 border-primary">
          <p className="text-textPrimary italic">
            &quot;Creemos firmemente que cada mujer merece un apoyo adecuado
            durante el proceso de duelo gestacional, respetando su
            individualidad y acompañándola en su camino hacia la sanación.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
