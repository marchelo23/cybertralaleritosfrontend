import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("invertir", "routes/invertir.tsx"),
  route("solicitar", "routes/solicitar.tsx"),
  route("login", "routes/login.tsx"),
  route("registro", "routes/registro.tsx"),
] satisfies RouteConfig;
