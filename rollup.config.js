import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      url(),
      json(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "./src/timezones/index.js",
    output: [
      {
        file: pkg.timezones.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.timezones.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      json(),
      url(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "./src/locales/index.js",
    output: [
      {
        file: pkg.locales.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.locales.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      json(),
      url(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "./src/languages/index.js",
    output: [
      {
        file: pkg.languages.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.languages.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      json(),
      url(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "./src/currencies/index.js",
    output: [
      {
        file: pkg.currencies.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.currencies.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      json(),
      url(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "./src/phoneCodes/index.js",
    output: [
      {
        file: pkg.phoneCodes.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.phoneCodes.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      json(),
      url(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: "./src/graphql/index.js",
    output: [
      {
        file: pkg.graphql.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.graphql.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      external(),
      json(),
      url(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      resolve(),
      commonjs(),
    ],
  },
];
