import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

import pkg from "./package.json";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    input: "./src/currencies/index.ts",
    output: [
      {
        file: pkg.currencies.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    input: "./src/graphql/index.ts",
    output: [
      {
        file: pkg.graphql.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    input: "./src/languages/index.ts",
    output: [
      {
        file: pkg.languages.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    input: "./src/locales/index.ts",
    output: [
      {
        file: pkg.locales.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    input: "./src/phoneCodes/index.ts",
    output: [
      {
        file: pkg.phoneCodes.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
  {
    input: "./src/timezones/index.ts",
    output: [
      {
        file: pkg.timezones.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      json(),
      external(),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true,
      }),
    ],
  },
];
