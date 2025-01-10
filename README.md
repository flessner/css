# @flessner/unocss-preset ![npm](https://img.shields.io/npm/v/%40flessner%2Funocss-preset) ![license](https://img.shields.io/npm/l/%40flessner%2Funocss-preset)

This is my personal [UnoCSS](https://unocss.dev/) preset.
It is mainly used by me to quickly scaffold new projects with my preferred atomic CSS settings.

<br />

## Installation
```bash
npm i -D @flessner/unocss-preset
```

```ts
// unocss.config.ts
import { defineConfig } from 'unocss'
import { presetFlessner } from '@flessner/unocss-preset'

export default defineConfig({
  presets: [
    presetFlessner(),
  ],
})
```

## Features
- `presetWind`: TailwindCSS-style classes as a base
- `unocss-preset-block`: Blocks non-standard classes (e.g. `m--4`)

Additionally it includes rules and shortcuts after my personal tastes.
