
// plugins
import Reveal from './dist/reveal.esm.js';
import Markdown from './plugin/markdown/markdown.esm.js';
import Highlight from './plugin/highlight/highlight.esm.js';
import Zoom from './plugin/zoom/zoom.esm.js';      
import Menu from './custom/plugins/menu/menu.esm.js';
import Verticator from './custom/plugins/verticator/plugin/verticator/verticator.esm.js';
import Fontsfirst from './custom/plugins/fontsfirst/plugin/fontsfirst/fontsfirst.esm.js';

const deck = new Reveal({ plugins: [Markdown, Highlight, Zoom, Menu, Verticator, Fontsfirst] });

deck.initialize({
    hash: true,
    slideNumber: false,
    controlsLayout: 'edges',
    verticator: {
        color: 'hsl(344, 79%, 61%)',
        position: 'right',
    },
    fontsfirst: {
        selfhostcss: './custom/custom-white.css',
        timeout: 5000,
    },
});
