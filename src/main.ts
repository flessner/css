import { defineConfig, definePreset, presetWind } from 'unocss'
import { presetBlock } from 'unocss-preset-block'

export const presetFlessner = definePreset(() => {
  return {
    name: '@flessner/unocss-preset',
    presets: [
      presetWind(),
      presetBlock(),
    ],
    shortcuts: {
      'row': 'flex flex-row',
      'col': 'flex flex-col',
    },
    theme: {
      colors: {
        'black': 'hsl(0 0% 0%)',
        'white': 'hsl(0 0% 100%)',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'primary': 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
      }
    }
  }
})

export const configFlessner = defineConfig({
  presets: [
    presetFlessner,
  ]
})
