import { defineConfig } from '@rsbuild/core'
import { pluginSvelte } from '@rsbuild/plugin-svelte'

export default defineConfig({
  plugins: [pluginSvelte()],
  html: {
    title: 'Svelte | Mouse Follower',
    favicon: 'src/svelte.png'
  }
})
