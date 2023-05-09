import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import {
  presetUno,
  transformerCompileClass,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnoCSS({
      theme: {
        colors: {
          primary: {
            "50": "#ecfffe",
            "100": "#bdfffe",
            "200": "#a3fdfe",
            "300": "#64f9fc",
            "400": "#1eebf2",
            "500": "#02ced8",
            "600": "#04a5b6",
            "700": "#0b8493",
            "800": "#136977",
            "900": "#145765",
            "950": "#073a45",
          },
          secondary: {
            "50": "#faf8f0",
            "100": "#f0ebd5",
            "200": "#dacf9b",
            "300": "#cebd7b",
            "400": "#c3a95c",
            "500": "#b89148",
            "600": "#a2763d",
            "700": "#875b36",
            "800": "#6f4a31",
            "900": "#5c3e2b",
            "950": "#342014",
          },
          black: "#0c0d0d",
        },
      },
      preflights: [
        {
          getCSS: ({ theme }) => `
      * {
        color: ${theme.colors?.primary?.[100] ?? "red"};
      }

      body { font-family: "Space Mono", monospace; }
    `,
        },
      ],
      presets: [
        presetUno(),
      ],
      transformers: [
        transformerCompileClass(),
        transformerVariantGroup(),
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
