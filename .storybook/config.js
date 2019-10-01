import { configure, getStorybook, setAddon } from '@storybook/polymer';
import createPercyAddon from '@percy-io/percy-storybook';

const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

serializeStories(getStorybook);
