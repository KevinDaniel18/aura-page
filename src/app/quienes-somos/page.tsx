import { Users, Heart, Star, Shield } from "lucide-react";

export default function QuienesSomos() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4 mt-10">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textPrimary max-w-3xl mx-auto">
            Conoce al equipo detrás de nuestra misión de acompañamiento y apoyo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Imagen/Ilustración en formato móvil aparece primero */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary" />
                </div>
              </div>

              {/* Elementos decorativos alrededor */}
              <div className="absolute -top-4 right-4 w-12 h-12 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>

              <div className="absolute bottom-4 right-0 w-10 h-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                <Star className="h-5 w-5 text-primary" />
              </div>

              <div className="absolute top-1/2 -left-4 w-10 h-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                NUESTRO EQUIPO
              </h3>

              <div className="space-y-4 text-textPrimary">
                <p className="leading-relaxed">
                  Somos un grupo de psicólogas que queremos contribuir a la
                  adaptación saludable de una mujer con pérdida gestacional, ya
                  que en la actualidad no se preocupan por cómo la persona
                  llevará su duelo.
                </p>

                <p className="leading-relaxed">
                  Esta falta de atención termina por empeorar la situación, ya
                  que un duelo no tratado podría generar patologías que afectan
                  directamente el día a día de una mujer con pérdida
                  gestacional.
                </p>
              </div>

              <div className="mt-8 bg-white rounded-lg p-6 shadow-md border-l-4 border-primary">
                <div className="flex items-center">
                  <div className="mr-4 flex-shrink-0">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-textPrimary italic">
                    Creemos firmemente que con el apoyo adecuado, es posible
                    atravesar el proceso de duelo de manera saludable y
                    encontrar fortaleza después de una pérdida gestacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección adicional con valores */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-secondary text-center mb-3">
              Empatía
            </h4>
            <p className="text-center text-textSecondary">
              Nos acercamos a cada mujer con sensibilidad y comprensión,
              reconociendo la singularidad de su experiencia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-secondary text-center mb-3">
              Profesionalismo
            </h4>
            <p className="text-center text-textSecondary">
              Nuestro equipo cuenta con la preparación y experiencia para
              ofrecer un acompañamiento psicológico de calidad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary">
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-secondary text-center mb-3">
              Compromiso
            </h4>
            <p className="text-center text-textSecondary">
              Nos dedicamos plenamente al bienestar emocional y la recuperación
              integral de cada mujer que acompañamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
