import { configure } from '@storybook/html';
import '../index.css'

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
