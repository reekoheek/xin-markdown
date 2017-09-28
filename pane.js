import { define, Component } from '@xinix/xin';
import { parse } from './parse';

export class MarkdownPane extends Component {
  get props () {
    return Object.assign({}, super.props, {
      src: {
        type: String,
        observer: 'render(src)',
      },

      original: {
        type: String,
        value: '',
      },

      meta: {
        type: Object,
        value: () => ({}),
      },

      content: {
        type: String,
        value: '',
      },
    });
  }

  get template () {
    return '<div html="[[content]]"></div>';
  }

  created () {
    super.created();

    this.cache = {};
  }

  async render (src) {
    if (!src) {
      this.set('original', '');
      this.set('content', '');
      this.set('meta', {});
      return;
    }

    let parsed = this.cache[src];
    if (parsed === undefined) {
      let response = await window.fetch(src);
      if (response.ok) {
        let mdContent = await response.text();
        this.cache[src] = parse(mdContent);
      } else {
        this.cache[src] = '';
        console.warn(`Content at ${src} invalid or not found! [${response.status}]`);
      }
      parsed = this.cache[src];
    }
    this.set('original', parsed.original);
    this.set('meta', parsed.meta);
    this.set('content', parsed.content);
  }
}

define('xin-markdown-pane', MarkdownPane);
