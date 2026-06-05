import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("welcome/welcome.tsx"),
  route("chats", "routes/home.tsx"),
  route("chat/:id", "routes/chat.$id.tsx"),
  route("settings", "routes/settings.tsx"),
] satisfies RouteConfig;
