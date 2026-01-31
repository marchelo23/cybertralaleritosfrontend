import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("invertir", "routes/invertir.tsx"),
  route("solicitar", "routes/solicitar.tsx"),
] satisfies RouteConfig;
