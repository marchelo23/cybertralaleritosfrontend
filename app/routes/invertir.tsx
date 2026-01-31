import type { Route } from "./+types/invertir";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beneficios para Inversionistas | Mi BiLLULLO" },
    {
      name: "description",
      content:
        "Haz crecer tu capital con impacto social. Invierte en microcréditos y obtén rendimientos del 3.6% mensual.",
    },
  ];
}

export default function Invertir() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                Mi BiLLULLO
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/solicitar"
                className="hidden sm:inline text-sm text-gray-400 hover:text-white transition-colors"
              >
                Necesito un préstamo
              </Link>
              <a
                href="#"
                className="text-sm sm:text-base font-medium border border-white/30 px-4 py-2 rounded-lg hover:bg-white hover:text-dark transition-all duration-300"
              >
                Iniciar Sesión
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-gray-400 border border-gray-600 px-3 py-1 rounded-full mb-6">
            PARA INVERSIONISTAS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Tu dinero trabaja para ti
            <span className="block mt-2 text-gray-400">
              y para tu comunidad.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Invierte en microcréditos y obtén retornos mientras ayudas a
            formalizar la economía salvadoreña. Impacto social con rentabilidad
            real.
          </p>
          <a href="#empezar" className="btn-primary inline-block">
            Hacer crecer mi capital
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">3.6%</div>
              <div className="text-gray-400 text-sm">Rendimiento mensual</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">$200</div>
              <div className="text-gray-400 text-sm">Inversión mínima</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Monitoreo en tiempo real</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-400 text-sm">Transparencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Por qué invertir con nosotros?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Beneficios diseñados para inversionistas que buscan rentabilidad
              con propósito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Rendimientos atractivos</h3>
              <p className="text-gray-400 leading-relaxed">
                Obtén hasta <span className="text-white font-semibold">3.6% mensual</span> sobre
                tu inversión. Mejor que cualquier cuenta de ahorro tradicional.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Riesgo diversificado</h3>
              <p className="text-gray-400 leading-relaxed">
                Tu inversión se distribuye en múltiples microcréditos, reduciendo
                la exposición a impagos individuales.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
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
              <h3 className="text-xl font-bold mb-3">Dashboard en tiempo real</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitorea tus inversiones, rendimientos y el estado de cada
                préstamo desde tu celular o computadora.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Liquidez flexible</h3>
              <p className="text-gray-400 leading-relaxed">
                Recibe pagos mensuales de intereses. Reinvierte automáticamente
                o retira cuando lo necesites.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Impacto social real</h3>
              <p className="text-gray-400 leading-relaxed">
                Cada dólar invertido ayuda a familias salvadoreñas a escapar del
                ciclo de préstamos informales abusivos.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reportes detallados</h3>
              <p className="text-gray-400 leading-relaxed">
                Recibe reportes mensuales con métricas claras: rendimiento,
                morosidad, proyecciones y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for investors */}
      <section className="py-24 px-4 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Cómo funciona
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Empieza a invertir en menos de 10 minutos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Crea tu cuenta",
                desc: "Regístrate con tu DUI y completa la verificación de identidad.",
              },
              {
                step: 2,
                title: "Deposita fondos",
                desc: "Transfiere desde tu banco o billetera digital. Mínimo $200.",
              },
              {
                step: 3,
                title: "Elige tu estrategia",
                desc: "Inversión automática o selecciona manualmente los préstamos.",
              },
              {
                step: 4,
                title: "Recibe rendimientos",
                desc: "Cobra intereses mensuales y monitorea tu portafolio 24/7.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white text-dark flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="empezar" className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para hacer crecer tu capital?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Únete a la comunidad de inversionistas que están transformando el
            acceso al crédito en El Salvador.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary w-full sm:w-auto">
              Empezar a invertir
            </a>
            <Link to="/" className="btn-secondary w-full sm:w-auto">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Link to="/" className="text-2xl font-bold mb-2 inline-block">
                Mi BiLLULLO
              </Link>
              <p className="text-gray-500 text-sm">
                Justicia financiera para El Salvador
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                to="/solicitar"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Necesito un préstamo
              </Link>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Login
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © 2026 Mi BiLLULLO. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
