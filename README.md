## Showdown Extension for Admonition-Block

_ESM Only_

---

### Install

```bash
npm i showdown-admonitionblock
```

```bash
yarn add showdown-admonitionblock
```

```bash
pnpm i showdown-admonitionblock
```

---

### Example

```js
import Showdown from "showdown";
import showdownAdmonitionBlock from "showdown-admonitionblock";

const converter = new Showdown.Converter({
 // other ShowdownOptions
  extensions: [showdownAdmonitionBlock],
});
```

``Markdown``

```md
::WARNING::This is warning

::TIP::This is tip

::NOTE::This is note

::IMPORTANT::This is important
```

*Output*

![ss](https://raw.githubusercontent.com/phothinmg/showdown-admonitionBlock/main/public/ss.png)

---
