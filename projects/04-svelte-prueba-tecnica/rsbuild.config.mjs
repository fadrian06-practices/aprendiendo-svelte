import { defineConfig } from '@rsbuild/core'
import { pluginSvelte } from '@rsbuild/plugin-svelte'

export default defineConfig({
  html: {
    title: 'Svelte | Prueba Técnica',
    favicon: 'src/svelte.png'
  },
  plugins: [pluginSvelte()]
})
