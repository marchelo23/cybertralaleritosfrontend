import type { Route } from "./+types/solicitar";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Solicita tu Préstamo | Mi BiLLULLO" },
    {
      name: "description",
      content:
        "Microcréditos justos y accesibles. Sin filas, sin papeleo, sin abusos. Tu primer préstamo desde $40.",
    },
  ];
}

export default function Solicitar() {
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
                to="/invertir"
                className="hidden sm:inline text-sm text-gray-400 hover:text-white transition-colors"
              >
                Quiero invertir
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
            NECESITO UN PRÉSTAMO
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Tu dinero cuando lo necesitas,
            <span className="block mt-2 text-gray-400">
              sin abusos ni letra pequeña.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Olvídate de los préstamos de la calle con tasas abusivas.
            Microcréditos justos, rápidos y 100% formales para salvadoreños
            trabajadores.
          </p>
          <a href="#solicitar" className="btn-primary inline-block">
            Solicitar mi primer BiLLULLO
          </a>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 border-y border-white/10 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <h3 className="text-xl font-bold mb-4 text-red-400">
                ❌ Préstamos informales
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Tasas de interés del 20-30% mensual
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Amenazas y cobros agresivos
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Sin transparencia en los cobros
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Ciclo de deuda interminable
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                ✓ Mi BiLLULLO
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  Tasa fija y transparente del 8% mensual
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  100% digital, sin presiones
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  Todo documentado y transparente
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  Construyes historial crediticio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Beneficios de pedir con nosotros
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Diseñado para salvadoreños que merecen acceso justo al crédito.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Aprobación en minutos</h3>
              <p className="text-gray-400 leading-relaxed">
                Nuestra IA evalúa tu solicitud al instante. Sin semanas de
                espera ni burocracia bancaria.
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sin papeleo</h3>
              <p className="text-gray-400 leading-relaxed">
                Solo necesitas tu DUI. Olvídate de recibos de agua, constancias
                de trabajo y fiadores.
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tasas justas</h3>
              <p className="text-gray-400 leading-relaxed">
                8% mensual fijo. Sin cargos ocultos, sin penalizaciones
                sorpresa, sin letra pequeña.
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Creces con nosotros</h3>
              <p className="text-gray-400 leading-relaxed">
                Empieza con $40 y llega hasta $500+. Tu límite aumenta mientras
                demuestras responsabilidad.
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Construyes historial</h3>
              <p className="text-gray-400 leading-relaxed">
                Cada pago puntual mejora tu perfil crediticio. Abre puertas a
                mejores oportunidades financieras.
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">100% desde tu celular</h3>
              <p className="text-gray-400 leading-relaxed">
                Solicita, firma y recibe tu dinero sin salir de casa. Todo el
                proceso es digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive Model */}
      <section className="py-24 px-4 bg-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-medium text-gray-400 border border-gray-600 px-3 py-1 rounded-full mb-6">
                MODELO PROGRESIVO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Empieza pequeño,
                <span className="text-gray-400"> llega lejos.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                No necesitas garantías ni avales para tu primer préstamo.
                Construimos confianza juntos, paso a paso.
              </p>

              <div className="space-y-6">
                {[
                  { level: "Nivel 1", amount: "$40", desc: "Tu primer BiLLULLO" },
                  { level: "Nivel 2", amount: "$80", desc: "Después de pagar a tiempo" },
                  { level: "Nivel 3", amount: "$150", desc: "Historial positivo" },
                  { level: "Nivel 4", amount: "$300", desc: "Cliente confiable" },
                  { level: "Nivel 5", amount: "$500+", desc: "Máximo disponible" },
                ].map((item, index) => (
                  <div key={item.level} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                        index === 0 ? "bg-white text-dark" : "bg-white/10"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{item.level}</span>
                        <span className="text-xl font-bold">{item.amount}</span>
                      </div>
                      <span className="text-sm text-gray-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Example calculation */}
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h3 className="text-xl font-bold mb-6">Ejemplo: Préstamo de $100</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400">Monto solicitado</span>
                  <span className="font-semibold">$100.00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400">Interés (8% mensual)</span>
                  <span className="font-semibold">$8.00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400">Plazo</span>
                  <span className="font-semibold">30 días</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-white font-semibold">Total a pagar</span>
                  <span className="text-2xl font-bold">$108.00</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Sin cargos ocultos. Lo que ves es lo que pagas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="solicitar" className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Necesitas dinero hoy?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Solicita tu primer BiLLULLO en menos de 5 minutos. Solo necesitas tu
            DUI y un celular.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary w-full sm:w-auto">
              Solicitar mi primer BiLLULLO
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
                to="/invertir"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Quiero invertir
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

      {/* Sticky CTA Mobile */}
      <div className="sticky-footer md:hidden">
        <a href="#" className="btn-primary w-full block text-center text-base">
          Solicitar préstamo
        </a>
      </div>
    </div>
  );
}
