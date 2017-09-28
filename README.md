---
title: xin-markdown
---

Markdown components for xin.

`xin-markdown` are components that render markdown directly.

## Usage

Supposedly we have markdown file `index.md`

```markdown
---
title: Lorem Ipsum
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
eget dolor.

Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.

```

### View

Write html file `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>xin-markdown-view</title>
</head>
<body>
  <xin-app>
    <template>
      <xin-pager>
        <xin-markdown-view uri="/" src="index.md"></xin-markdown-view>
      </xin-pager>
    </template>
  </xin-app>
  <script src="index.js"></script>
</body>
</html>
```

### Pane

Write inside html file `index.html`

```html
...
<xin-markdown-pane src="index.md"></xin-markdown-pane>
...
```