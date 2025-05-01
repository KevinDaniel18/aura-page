import { Compass, Eye, ArrowRight } from "lucide-react";

export default function MisionVision() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4 mt-10">
            Nuestra Esencia
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textPrimary max-w-3xl mx-auto">
            Definimos quiénes somos y hacia dónde vamos, con un propósito claro
            de servicio y apoyo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Misión */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="h-2 bg-primary w-full"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <Compass className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Misión</h3>
              </div>

              <p className="text-textPrimary text-lg leading-relaxed mb-6">
                Brindar apoyo emocional y psicológico a mujeres con pérdida
                gestacional, ofreciendo un espacio seguro, recursos educativos y
                acompañamiento, para una adaptación saludable.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-accent mr-3" />
                  <span className="text-textSecondary">
                    Espacio seguro de expresión
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-accent mr-3" />
                  <span className="text-textSecondary">
                    Recursos educativos especializados
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-accent mr-3" />
                  <span className="text-textSecondary">
                    Acompañamiento integral
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="h-2 bg-secondary w-full"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <Eye className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Visión</h3>
              </div>

              <p className="text-textPrimary text-lg leading-relaxed mb-6">
                Convertirnos en un referente de Cartagena, como un espacio
                esencial de apoyo emocional y psicológico, para mujeres con
                pérdida gestacional, ofreciendo recursos especializados y
                fomentando una comunidad empática.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-accent mr-3" />
                  <span className="text-textSecondary">
                    Referente regional en apoyo
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-accent mr-3" />
                  <span className="text-textSecondary">
                    Recursos especializados de calidad
                  </span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-accent mr-3" />
                  <span className="text-textSecondary">
                    Comunidad empática y solidaria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md border-l-4 border-accent">
          <p className="text-center text-lg text-textPrimary italic">
            &quot;Juntas, construimos un camino de sanación y fortaleza para
            todas las mujeres que enfrentan la pérdida gestacional&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
