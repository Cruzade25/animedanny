const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    open: true,
    port: 8080,
  },
};
