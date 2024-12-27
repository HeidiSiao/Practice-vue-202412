import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/Practice-vue-202412/", // 替換為你的儲存庫名稱
  build: {
    outDir: "dist", // 編譯結果的輸出目錄
  },
  server: {
    open: true, // 自動打開瀏覽器
  },
  plugins: [vue()],
});
