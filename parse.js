const marked = require('marked');
const Prism = require('prismjs');

marked.setOptions({
  gfm: true,
  tables: true,
  highlight (code, language) {
    if (Prism.languages[language]) {
      return Prism.highlight(code, Prism.languages[language]);
    }
    return code;
  },
});

function parse (original) {
  let meta = {};
  let restStart = 0;
  let splitted = original.trim().split('\n');
  splitted.find((line, no) => {
    line = line.trim();
    if (no === 0) {
      return line !== '---';
    }

    if (line === '---') {
      restStart = no + 1;
      return true;
    }

    let [ key, ...value ] = line.split(':');
    meta[key.trim()] = value.join(':').trim();
  });

  original = splitted.slice(restStart).join('\n');
  let content = marked(original);
  return { meta, content, original };
}

module.exports = { parse };
