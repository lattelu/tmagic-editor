import { createApp } from 'vue'

import App from './App.vue'

Promise.all([import('~/ui-components/comp-entry'), import('~/ui-components/plugin-entry')]).then(
  ([components, plugins]) => {
    const magicApp = createApp(App)

    Object.entries(components.default).forEach(([type, component]: [string, any]) => {
      magicApp.component(`magic-ui-${type}`, component)
    })

    Object.values(plugins.default).forEach((plugin: any) => {
      magicApp.use(plugin)
    })

    magicApp.mount('#app')
  }
)
