import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login/", "./auth/Login.tsx"),
    route("analytics/", "routes/analytics.tsx"),
    route("subscription/", "routes/subscription.tsx"),
] satisfies RouteConfig;
