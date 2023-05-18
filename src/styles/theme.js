export const baseTheme = {
  colors: {
    body: "#eee",
    primary: "#fff",
    secondary: "#f3f3f3",

    font: {
      primary: "#333",
      secondary: "#666",
    },

    border: "#ccc",

    active: "#de0000",
  },
};

export const lightTheme = {
  ...baseTheme,
};

export const darkTheme = {
  ...baseTheme,

  colors: {
    ...baseTheme.colors,

    body: "#080808",
    primary: "#111",
    secondary: "#222",

    font: {
      primary: "#ddd",
      secondary: "#ccc",
    },

    border: "#555",
  },
};
