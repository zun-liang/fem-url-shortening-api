import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

//https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.TINY_URL_API_KEY": JSON.stringify(env.TINY_URL_API_KEY),
    },
    base: "/fem-url-shortening-api",
    plugins: [svgr(), react()],
  };
});
