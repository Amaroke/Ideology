/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: {
        "50": "#ffe0f7",
        "100": "#ffc0ef",
        "200": "#ff9de6",
        "300": "#ff7adC",
        "400": "#ff58d3",
        "500": "#FF10F0",
        "600": "#e600db",
        "700": "#cc00c6",
        "800": "#b300b2",
        "900": "#990099",
        "950": "#730073"
      }
    }
  },
  fontFamily: {
    'body': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ],
    'sans': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ]
  }
};
export const plugins = [];
export const corePlugins = {
  backgroundImage: false,
};