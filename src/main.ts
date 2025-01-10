import { Preset } from 'unocss'
import { presetWind } from 'unocss'

function resolveColor(x: string) {
  return `var(--color-${x}, var(--${x}))`
}

function resolveOpacity(x: string) {
  return `var(--opacity-${x}, var(--${x}))`
}

export function presetFlessner(): Preset {
  return {
    name: '@flessner/css',
    presets: [
      presetWind(),
    ],
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
      'page-xs': 'max-w-xs mx-auto px-4',
      'page-sm': 'max-w-sm mx-auto px-4',
      'page-md': 'max-w-md mx-auto px-4',
      'page-lg': 'max-w-lg mx-auto px-4',
      'page-xl': 'max-w-xl mx-auto px-4',
      'page-2xl': 'max-w-2xl mx-auto px-4',
    },
  }
}
