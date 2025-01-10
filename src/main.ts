import { defineConfig, definePreset } from 'unocss'
import { presetWind } from 'unocss'

function resolveColor(x: string) {
  return `var(--color-${x}, var(--${x}))`
}

function resolveOpacity(x: string) {
  return `var(--opacity-${x}, var(--${x}))`
}

export const presetFlessner = definePreset(() => {
  return {
    presets: [
      presetWind(),
    ],
    name: '@flessner/unocss-preset',
    rules: [
      [/^bg-([\w]+)$/, ([, x]) => ({ 'background-color': `hsl(${resolveColor(x)})` })],
      [/^text-([\w]+)$/, ([, x]) => ({ 'color': `hsl(${resolveColor(x)})` })],
      // with opacity
      [/^bg-([\w]+)[/]([\w]+)$/, ([, x, y]) => ({ 'background-color': `hsl(${resolveColor(x)} / ${resolveOpacity(y)})` })],
      [/^text-([\w]+)[/]([\w]+)$/, ([, x, y]) => ({ 'color': `hsl(${resolveColor(x)} / ${resolveOpacity(y)})` })],
    ],
    shortcuts: {
      'row': 'flex flex-row',
      'col': 'flex flex-col',
    }
  }
})

export const configFlessner = defineConfig({
  presets: [
    presetFlessner(),
  ]
})
