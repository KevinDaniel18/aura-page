import { Download } from "lucide-react";

export default function Recursos() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4 p-10">
            Recursos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-textPrimary max-w-3xl mx-auto">
            Descarga nuestra aplicación móvil para acceder a recursos exclusivos
            y herramientas útiles.
          </p>
        </div>

        {/* APK Download Resource */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="mb-4">
            <Download className="h-12 w-12 text-primary" />
          </div>
          <h4 className="text-xl font-bold text-secondary mb-2">
            Descargar APK
          </h4>
          <p className="text-textSecondary mb-4">
            Descarga nuestra aplicación para obtener acceso completo a los
            recursos y herramientas.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1av-qI-SGpMvK9RdtDV9FptYy_mdGYQm3" // Enlace de descarga directo de Google Drive
            className="inline-flex items-center rounded-md border-2 px-6 py-3 text-base font-medium transition-colors hover:bg-primary hover:text-white"
            style={{
              borderColor: "#4CAF50", // o color primario
              color: "#4CAF50", // o color primario
            }}
            download="miapp.apk" // Esto indica que se descargue el archivo cuando se haga clic
          >
            Descargar
          </a>
        </div>
      </div>
    </section>
  );
}
