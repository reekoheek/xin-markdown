import { define } from '@xinix/xin';
import { View } from '@xinix/xin/views';

export class MarkdownView extends View {
  get props () {
    return Object.assign({}, super.props, {
      src: {
        type: String,
        observer: 'srcChanged(src)',
      },

      srcFn: {
        type: Function,
        value: () => {
          return () => this.__app.getFragment() + '.md';
        },
        observer: 'srcFnChanged(srcFn)',
      },

      title: {
        type: String,
        value: '',
      },
    });
  }

  get template () {
    return `
      <h2>[[title]]</h2>
      <xin-markdown-pane id="pane"></xin-markdown-pane>
    `;
  }

  focusing (parameters) {
    super.focusing(parameters);

    this.srcChanged(this.src);
  }

  async srcChanged (src) {
    if (!this.$.pane) {
      return;
    }

    await this.$.pane.render(src);
    this.set('title', this.$.pane.meta.title);
  }

  srcFnChanged (fn) {
    if (!this.src) {
      this.set('src', fn());
    }
  }
}

define('xin-markdown-view', MarkdownView);
