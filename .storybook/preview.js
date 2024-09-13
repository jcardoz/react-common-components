import { Button } from "../src/components/button/Button";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    playground: {
      storyId: "playground",
      components: { Button },
      autocompletions: false,
      editorTheme: "light",
      introCode: {
        jsx: `<Button
                label="Large Button"
                onClick={() => {}}
                size="large"
              />`,
        css: "",
      },
    },
  },
};

export default preview;
