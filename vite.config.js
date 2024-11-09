import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/TodoList/", // GitHub Pages에서 사용하는 리포지토리 이름으로 설정합니다.
});
