module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        extensions: [
          ".ios.js",
          ".android.js",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@navigation": "./src/navigation",
          "@localize": "./src/localize",
          "@utility": "./src/utility",
          "@graphql": "./src/graphql",
        },
      },
    ],
  ],
};
