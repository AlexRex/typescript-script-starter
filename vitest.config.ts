import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    dir: "test",
  },
  resolve: {
    alias: {
      "@/src": path.resolve(__dirname, "./src/"),
    },
  },
});
