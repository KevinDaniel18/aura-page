import {
  primary,
  background,
  secondary,
  textPrimary,
} from "../../../constants/colors";

export default function QuienesSomos() {
  return (
    <main
      style={{ backgroundColor: background }}
      className="min-h-screen pb-16"
    >
      <div className="text-center mb-12">
        <div style={{ background: secondary, padding: 20 }}>
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: background }}
          >
            Quiénes Somos
          </h1>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded"
            style={{ backgroundColor: primary }}
          ></div>
        </div>
      </div>
      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-5">
            {/* Imagen o ilustración */}
            <div className="md:col-span-2">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: `${primary}20` }}
                >
                  <div className="p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-full w-full"
                      style={{ color: primary }}
                    >
                      <path d="M16 16c1.2-1.2 2-2.7 2-4.5 0-3.6-3-6.5-6.5-6.5S5 7.9 5 11.5c0 1.8.8 3.4 2 4.5" />
                      <path d="M9 15h6" />
                      <path d="M12 18v-3" />
                      <path d="M12 3v2" />
                      <path d="M3 12h2" />
                      <path d="M19 12h2" />
                      <path d="m18.364 5.636-1.414 1.414" />
                      <path d="m7.05 16.95-1.414 1.414" />
                      <path d="m7.05 7.05-1.414-1.414" />
                      <path d="m18.364 18.364-1.414-1.414" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto principal */}
            <div className="md:col-span-3">
              <div
                className="rounded-lg p-8 shadow-md"
                style={{ backgroundColor: "white" }}
              >
                <h2
                  className="mb-6 text-2xl font-bold"
                  style={{ color: secondary }}
                >
                  QUIENES SOMOS
                </h2>

                <div
                  className="space-y-4 text-base leading-relaxed"
                  style={{ color: textPrimary }}
                >
                  <p>
                    Somos un grupo de psicólogas que queremos contribuir a la
                    adaptación saludable de una mujer con pérdida gestacional,
                    ya que en la actualidad no se preocupan por cómo la persona
                    llevará su duelo.
                  </p>

                  <p>
                    Esta falta de atención termina por empeorar la situación, ya
                    que un duelo no tratado podría generar patologías que
                    afectan directamente el día a día de una mujer con pérdida
                    gestacional.
                  </p>
                </div>

                <div
                  className="mt-8 flex items-center rounded-lg p-4"
                  style={{ backgroundColor: `${primary}10` }}
                >
                  <div
                    className="mr-4 flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ backgroundColor: primary }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                      style={{ color: "white" }}
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: textPrimary }}
                  >
                    Creemos firmemente que con el apoyo adecuado, es posible
                    atravesar el proceso de duelo de manera saludable y
                    encontrar fortaleza después de una pérdida gestacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
