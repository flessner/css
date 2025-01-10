# @flessner/css
![npm](https://img.shields.io/npm/v/%40flessner%2Fcss) ![license](https://img.shields.io/npm/l/%40flessner%2Fcss)

<br />

This is my personal [UnoCSS](https://unocss.dev/) preset.
It is mainly used by me to quickly scaffold new projects with my preferred atomic CSS settings.

## Installation
```
npm i @flessner/css
```


```ts
// unocss.config.ts
import { defineConfig } from 'unocss'
import { presetFlessner } from '@flessner/css'

export default defineConfig({
  presets: [
    presetFlessner(),
  ],
})
```

## Features

Out of the box it uses the `presetWind` from UnoCSS that includes TailwindCSS-style classes.

Additionally it includes rules and shortcuts after my personal tastes.
