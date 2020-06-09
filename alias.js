const path = require("path");

module.exports = {
  "@api": path.resolve(__dirname, "src", "services", "api"),
  "@assets": path.resolve(__dirname, "public", "assets"),
  "@commons": path.resolve(__dirname, "src", "commons"),
  "@components": path.resolve(__dirname, "src", "components"),
  "@config": path.resolve(__dirname, "config"),
  "@pages": path.resolve(__dirname, "pages"),
  "@containers": path.resolve(__dirname, "src", "containers"),
  "@routes": path.resolve(__dirname, "src", "config", "routes"),
  "@services": path.resolve(__dirname, "src", "services"),
  "@store": path.resolve(__dirname, "src", "redux"),
  "@svg": "svg-inline-loader?classPrefix!./src/assets/images/icons",
  "@utils": path.resolve(__dirname, "src", "commons/utils"),
};
