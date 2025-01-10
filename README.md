# @flessner/unocss-preset
![npm](https://img.shields.io/npm/v/%40flessner%2Funocss-preset) ![license](https://img.shields.io/npm/l/%40flessner%2Funocss-preset)

<br />

This is my personal [UnoCSS](https://unocss.dev/) preset.
It is mainly used by me to quickly scaffold new projects with my preferred atomic CSS settings.

## Installation
```
npm i @flessner/unocss-preset
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

Out of the box it uses the `presetWind` from UnoCSS that includes TailwindCSS-style classes.
Additionally it includes rules and shortcuts after my personal tastes.
