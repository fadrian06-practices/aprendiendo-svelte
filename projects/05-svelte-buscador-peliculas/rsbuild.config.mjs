import { defineConfig } from '@rsbuild/core'
import { pluginSvelte } from '@rsbuild/plugin-svelte'

export default defineConfig({
  plugins: [pluginSvelte()],
  html: {
    title: 'Svelte | Buscador de películas',
    favicon: 'src/svelte.png',
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css'
        }
      }
    ]
  }
})
