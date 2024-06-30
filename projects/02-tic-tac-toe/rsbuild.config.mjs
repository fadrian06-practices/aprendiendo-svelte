import { defineConfig } from '@rsbuild/core'
import { pluginSvelte } from '@rsbuild/plugin-svelte'

export default defineConfig({
  plugins: [pluginSvelte()],
  html: {
    title: 'Svelte | Tic Tac Toe',
    favicon: 'src/svelte.png'
  }
})
