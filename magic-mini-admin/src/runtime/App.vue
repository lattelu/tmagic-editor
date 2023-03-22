<template>
  <!-- <magic-ui-page :config="pageConfig" /> -->
  <div>ddd</div>
</template>

<script lang="ts">
import type Core from '@tmagic/core'
import { defineComponent, inject, reactive } from 'vue'

export default defineComponent({
  name: 'App',

  setup() {
    const app = inject<Core | undefined>('app')
    const pageConfig = reactive(app?.page?.data || {})

    return {
      pageConfig
    }
  }
})
</script>
