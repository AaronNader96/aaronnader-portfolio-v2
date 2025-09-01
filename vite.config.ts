import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react", "@chakra-ui/react"],
    include: [
      "hoist-non-react-statics",
      "fast-safe-stringify",
      "lodash.mergewith",
      "copy-to-clipboard",
      "react-fast-compare",
      "prop-types",
    ],
  },
});
