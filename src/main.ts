import { defineConfig, definePreset, presetWind } from 'unocss'
import { presetBlock } from 'unocss-preset-block'

type Config = {
  loadHSL?: string[]
  loadRGB?: string[]
}

export const presetFlessner = (config?: Config) => {
  let colors: any = {}

  // load colors from config
  config?.loadHSL?.forEach((c1) => {
    colors[c1] = `hsl(var(--${c1}))`
    config?.loadHSL?.forEach((c2) => {
      colors[`${c1}-${c2}`] = `hsl(var(--${c1}-${c2}))`
    })
  })
  config?.loadRGB?.forEach((c1) => {
    colors[c1] = `rgb(var(--${c1}))`
    config?.loadRGB?.forEach((c2) => {
      colors[`${c1}-${c2}`] = `rgb(var(--${c1}-${c2}))`
    })
  })

  return definePreset({
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
        ...colors,
        'black': 'hsl(0, 0%, 0%)',
        'white': 'hsl(0, 0%, 100%)',
      }
    }
  })
}

export const configFlessner = (config?: Config) => {
  return defineConfig({
    presets: [
      presetFlessner(config),
    ]
  })
}
