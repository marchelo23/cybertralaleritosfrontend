import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mi BiLLULLO - Tu Pisto APP | Microcréditos Inteligentes" },
    {
      name: "description",
      content:
        "Justicia financiera al alcance de un clic. Microcréditos seguros para salvadoreños trabajadores. Alternativa formal a los préstamos informales.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                Mi BiLLULLO
              </span>
              <span className="hidden sm:inline text-xs text-gray-400 border border-gray-600 px-2 py-0.5 rounded">
                BETA
              </span>
            </div>
            <Link
              to="/login"
              className="text-sm sm:text-base font-medium border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-dark transition-all duration-300"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-50" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">
              Alternativa segura y formal
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Tu dinero cuando lo necesitas:
            <span className="block mt-2 text-gray-400">
              Justicia financiera al alcance de un clic.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Una alternativa segura frente a los préstamos informales.
            Microcréditos inteligentes para salvadoreños trabajadores.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/solicitar" className="btn-primary w-full sm:w-auto">
              Solicitar mi primer BiLLULLO
            </Link>
            <Link to="/invertir" className="btn-secondary w-full sm:w-auto">
              Quiero invertir
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>100% Formal</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Desembolso rápido</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Tasas justas</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="relative py-12 border-y border-white/10 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-6xl font-bold">$1,251.5M</span>
              <span className="text-left text-sm text-gray-400 max-w-[200px]">
                se mueven anualmente en préstamos informales
              </span>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <p className="text-gray-400 max-w-md text-lg">
              Es momento de{" "}
              <span className="text-white font-semibold">
                cambiar las reglas.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cómo funciona
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tres pasos simples para obtener tu microcrédito de forma segura y
              transparente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="glass rounded-2xl p-8 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-dark rounded-xl flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Registro rápido</h3>
                <p className="text-gray-400 leading-relaxed">
                  Crea tu cuenta en minutos usando solo tu DUI. Sin papeleo
                  innecesario, sin filas.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass rounded-2xl p-8 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-dark rounded-xl flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Evaluación IA</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nuestra inteligencia artificial evalúa tu perfil de forma
                  justa, sin sesgos ni burocracia bancaria.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass rounded-2xl p-8 relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-dark rounded-xl flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="pt-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Desembolso inmediato</h3>
                <p className="text-gray-400 leading-relaxed">
                  Recibe tu dinero directamente en tu cuenta o billetera digital
                  en minutos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Growth Section */}
      <section id="solicitar" className="py-24 px-4 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-gray-400 border border-gray-600 px-3 py-1 rounded-full mb-6">
                MODELO PROGRESIVO
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Crece con nosotros,
                <span className="text-gray-400"> paso a paso.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Empezamos con préstamos pequeños de{" "}
                <span className="text-white font-semibold">$40</span> para
                construir confianza mutua. A medida que demuestras
                responsabilidad, tu límite crece hasta{" "}
                <span className="text-white font-semibold">$500</span> o más.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Sin garantías ni avales para empezar
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Tasas fijas y transparentes (8% mensual)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Construyes historial crediticio real
                  </span>
                </div>
              </div>

              <Link to="/solicitar" className="btn-primary inline-block">
                Solicitar mi primer BiLLULLO
              </Link>
            </div>

            {/* Visual representation */}
            <div className="relative">
              <div className="glass rounded-3xl p-8 sm:p-10">
                <div className="space-y-6">
                  {/* Progress levels */}
                  {[
                    { level: 1, amount: "$40", label: "Primer préstamo" },
                    { level: 2, amount: "$80", label: "Nivel 2" },
                    { level: 3, amount: "$150", label: "Nivel 3" },
                    { level: 4, amount: "$300", label: "Nivel 4" },
                    { level: 5, amount: "$500+", label: "Nivel máximo" },
                  ].map((item, index) => (
                    <div key={item.level} className="relative">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                            index === 0
                              ? "bg-white text-dark"
                              : "bg-white/10 text-gray-400"
                          }`}
                        >
                          {item.level}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">
                              {item.label}
                            </span>
                            <span className="font-bold text-xl">
                              {item.amount}
                            </span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-white rounded-full transition-all duration-500 ${
                                index === 0 ? "w-full" : "w-0"
                              }`}
                              style={{
                                width: index === 0 ? "100%" : `${20 * index}%`,
                                opacity: index === 0 ? 1 : 0.3,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="invertir" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <span className="inline-block text-sm font-medium text-gray-400 border border-gray-600 px-3 py-1 rounded-full mb-6">
              PARA INVERSIONISTAS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Haz crecer tu capital
              <span className="text-gray-400"> con impacto social.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Invierte en microcréditos y obtén retornos mientras ayudas a
              formalizar la economía salvadoreña. Tu dinero trabaja para ti y
              para tu comunidad.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-4xl font-bold mb-2">3.6%</div>
                <div className="text-gray-400 text-sm">Rendimiento mensual</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-4xl font-bold mb-2">$200</div>
                <div className="text-gray-400 text-sm">Inversión mínima</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoreo en tiempo real</div>
              </div>
            </div>

            <Link to="/invertir" className="btn-secondary inline-block">
              Hacer crecer mi capital
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Mi BiLLULLO</div>
              <p className="text-gray-500 text-sm">
                Justicia financiera para El Salvador
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link
                to="/solicitar"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Necesito préstamo
              </Link>
              <Link
                to="/invertir"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Quiero invertir
              </Link>
              <Link
                to="/login"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © 2026 Mi BiLLULLO. Todos los derechos reservados.
            <br />
            <span className="text-xs">
              Datos sobre préstamos informales: La Prensa Gráfica, El Salvador.
            </span>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Mobile */}
      <div className="sticky-footer md:hidden">
        <Link
          to="/solicitar"
          className="btn-primary w-full block text-center text-base"
        >
          Empieza ahora
        </Link>
      </div>
    </div>
  );
}
