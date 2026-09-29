import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hccs-static-landing-page/",
  plugins: [react()],
});
