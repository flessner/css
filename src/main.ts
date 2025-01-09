import { Preset } from 'unocss'
import { presetWind } from 'unocss'

function resolveOpacity(x: string) {
  if (isNaN(Number(x))) {
    return `var(--${x})`
  } else {
    return `${x}`
  }
}

export function presetFlessner(): Preset {
  return {
    name: '@flessner/css',
    presets: [
      presetWind(),
    ],
    rules: [
      [/^bg-([\w]+)$/, ([, x]) => ({ 'background-color': `hsl(var(--${x}))` })],
      [/^text-([\w]+)$/, ([, x]) => ({ 'color': `hsl(var(--${x}))` })],
      // with opacity
      [/^bg-([\w]+)[/]([\w]+)$/, ([, x, y]) => ({ 'background-color': `hsl(var(--${x}) / ${resolveOpacity(y)})` })],
      [/^text-([\w]+)[/]([\w]+)$/, ([, x, y]) => ({ 'color': `hsl(var(--${x}) / ${resolveOpacity(y)})` })],
    ],
    shortcuts: {
      'row': 'flex flex-row',
      'col': 'flex flex-col',
    },
  }
}
