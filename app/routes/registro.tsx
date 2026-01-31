import { Link } from "react-router";
import { useState } from "react";

type UserType = "prestamista" | "prestatario" | null;

export default function Registro() {
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    telefono: "",
    aceptaTerminos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userType) {
      alert("Por favor selecciona un tipo de usuario");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const newUser = {
      tipo: userType,
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      createdAt: new Date().toISOString(),
    };

    console.log("Nuevo usuario registrado:", newUser);
    alert(`¡Registro exitoso! Bienvenido ${formData.nombre}`);
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
      telefono: "",
      aceptaTerminos: false,
    });
    setUserType(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Crear Cuenta</h1>
          <p className="text-gray-400">Únete a nuestra plataforma</p>
        </div>

        {/* Form Card */}
        <div className="glass rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                ¿Qué deseas hacer?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Prestamista */}
                <button
                  type="button"
                  onClick={() => setUserType("prestamista")}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    userType === "prestamista"
                      ? "border-white bg-white/10"
                      : "border-gray-border hover:border-gray-500"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Prestamista
                      </h3>
                      <p className="text-sm text-gray-400">
                        Invierte tu dinero y genera rendimientos
                      </p>
                    </div>
                  </div>
                </button>

                {/* Prestatario */}
                <button
                  type="button"
                  onClick={() => setUserType("prestatario")}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    userType === "prestatario"
                      ? "border-white bg-white/10"
                      : "border-gray-border hover:border-gray-500"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Prestatario
                      </h3>
                      <p className="text-sm text-gray-400">
                        Solicita financiamiento para tu negocio
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full bg-dark-lighter border border-gray-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Juan Pérez"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  required
                  className="w-full bg-dark-lighter border border-gray-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="+52 123 456 7890"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                />
              </div>
            </div>

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

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  minLength={8}
                  className="w-full bg-dark-lighter border border-gray-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium mb-2"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  minLength={8}
                  className="w-full bg-dark-lighter border border-gray-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.aceptaTerminos}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      aceptaTerminos: e.target.checked,
                    })
                  }
                  className="mt-1 rounded border-gray-border bg-dark-lighter"
                />
                <span className="text-sm text-gray-300">
                  Acepto los{" "}
                  <Link to="/terminos" className="text-white hover:underline">
                    términos y condiciones
                  </Link>{" "}
                  y la{" "}
                  <Link to="/privacidad" className="text-white hover:underline">
                    política de privacidad
                  </Link>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-primary">
              Crear Cuenta
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

          {/* Social Register */}
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

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-white font-semibold hover:underline"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
