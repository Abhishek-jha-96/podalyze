import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login/", "./auth/Login.tsx"),
    route("analytics/", "routes/analytics.tsx"),
    route("upload-url/", "routes/uploadURL.tsx"),
    route("subscription/", "routes/subscription.tsx"),
] satisfies RouteConfig;
