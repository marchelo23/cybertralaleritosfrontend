import { Link } from "react-router";
import { useState } from "react";

// Usuarios de prueba
const DEFAULT_USERS = [
  {
    id: "1",
    email: "prestamista@test.com",
    password: "prestamista123",
    nombre: "María González",
    tipo: "prestamista",
    saldo: 5000,
  },
  {
    id: "2",
    email: "prestatario@test.com",
    password: "prestatario123",
    nombre: "Carlos Ramírez",
    tipo: "prestatario",
    creditoDisponible: 150,
  },
];

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Buscar usuario en los usuarios por defecto
    const user = DEFAULT_USERS.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      alert(`¡Bienvenido ${user.nombre}! (${user.tipo})`);
      console.log("Login exitoso:", user);
      // TODO: Guardar en contexto/localStorage
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Bienvenido</h1>
          <p className="text-gray-400">Inicia sesión en tu cuenta</p>
        </div>

        {/* Test Credentials */}
        <div className="glass rounded-xl p-4 mb-6 text-sm">
          <p className="font-semibold mb-2 text-gray-300">
            👤 Usuarios de prueba:
          </p>
          <div className="space-y-2 text-gray-400">
            <div>
              <strong className="text-white">Prestamista:</strong> prestamista@test.com / prestamista123
            </div>
            <div>
              <strong className="text-white">Prestatario:</strong> prestatario@test.com / prestatario123
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-dark-lighter border border-gray-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full bg-dark-lighter border border-gray-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-border bg-dark-lighter"
                />
                <span className="text-gray-300">Recordarme</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-primary">
              Iniciar Sesión
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-dark-card text-gray-400">o</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full border border-gray-border rounded-lg px-4 py-3 flex items-center justify-center gap-3 hover:bg-dark-lighter transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Continuar con Google</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            ¿No tienes cuenta?{" "}
            <Link
              to="/registro"
              className="text-white font-semibold hover:underline"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
