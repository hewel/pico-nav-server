import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import run from "rollup-plugin-run";
import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

const isDev = process.env.ROLLUP_WATCH === "true";

export default {
  input: "src/server.ts",
  output: {
    file: "build/server.js",
    format: "cjs",
    preferConst: true,
    sourcemap: true,
  },
  external: Object.keys(pkg.dependencies).concat(
    require("module").builtinModules || Object.keys(process.binding("natives"))
  ),
  context: "global",
  cache: isDev,
  plugins: [
    eslint({
      fix: true,
      throwOnError: !isDev,
      include: "src/*",
    }),
    commonjs({
      include: "node_modules/**",
      sourceMap: false,
    }),
    json({ preferConst: true }),
    resolve(),
    isDev && run(),
    typescript(),
    !isDev && terser(),
  ],
};
