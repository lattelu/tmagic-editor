<template>
  <m-editor
    style="height: 100vh"
    v-model="value"
    ref="editor"
    :menu="menu"
    :runtime-url="runtimeUrl"
    :props-configs="propsConfigs"
    :props-values="propsValues"
    :event-method-list="eventMethodList"
    :component-group-list="componentGroupList"
    :default-selected="defaultSelected"
    :moveable-options="moveableOptions"
    :auto-scroll-into-view="true"
    :stage-rect="stageRect"
    :left="350"
  >
    <template #workspace-content>
      <DeviceGroup v-model="stageRect" />
    </template>
  </m-editor>
</template>
<script setup lang="ts">
import type { MenuBarData, MoveableOptions } from '@tmagic/editor'
import { editorService, TMagicEditor } from '@tmagic/editor'
import type { MContainer, MNode } from '@tmagic/schema'
import { NodeType } from '@tmagic/schema'
import type { CustomizeMoveableOptionsCallbackConfig } from '@tmagic/stage'
// import { asyncLoadJs } from '@tmagic/utils'
import serialize from 'serialize-javascript'
import { PlayIcon, SaveIcon, ViewModuleIcon } from 'tdesign-icons-vue-next'
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next'

import DeviceGroup from '~/components/DeviceGroup.vue'
import { magicPresetConfigs, magicPresetEvents, magicPresetValues } from '~/ui-components'

import componentGroupList from './configs/componentGroupList'
import dsl from './configs/dsl'
definePage({
  name: 'EditorPage',
  meta: {
    layout: 'DefaultLayout'
  }
})

defineOptions({
  name: 'EditorPage'
})
const { VITE_RUNTIME_PATH, VITE_ENTRY_PATH } = import.meta.env

const runtimeUrl = `/runtime/index.html`

const router = useRouter()
const editor = ref<InstanceType<typeof TMagicEditor>>()
const previewVisible = ref(false)
const value = ref(dsl)
const defaultSelected = ref(dsl.items[0].id)
const propsValues = ref<Record<string, any>>({})
const propsConfigs = ref<Record<string, any>>({})
const eventMethodList = ref<Record<string, any>>({})
const stageRect = ref({
  width: 375,
  height: 817
})

const previewUrl = computed(
  () =>
    `${VITE_RUNTIME_PATH}/page/index.html?localPreview=1&page=${
      editor.value?.editorService.get('page')?.id
    }`
)
const menu: MenuBarData = {
  left: [{ type: 'text', text: '魔方2' }],
  center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
  right: [
    {
      type: 'button',
      text: 'Form Playground',
      handler: () => router.push('form')
    },
    {
      type: 'button',
      text: 'Table Playground',
      handler: () => router.push('table')
    },
    '/',
    {
      type: 'button',
      text: '预览',
      icon: PlayIcon,
      handler: async services => {
        if (services?.editorService.get('modifiedNodeIds').size > 0) {
          try {
            await DialogPlugin.confirm({
              default: '有修改未保存，是否先保存再预览',
              header: '提示',
              confirmBtn: '保存并预览',
              cancelBtn: '预览',
              theme: 'warning'
            })

            save()
            MessagePlugin.success('保存成功')
          } catch (e) {
            console.error(e)
          }
        }
        previewVisible.value = true
      }
    },
    {
      type: 'button',
      text: '保存',
      icon: SaveIcon,
      handler: () => {
        save()
        MessagePlugin.success('保存成功')
      }
    },
    '/',
    {
      type: 'button',
      icon: ViewModuleIcon,
      tooltip: '源码',
      handler: service => service?.uiService.set('showSrc', !service?.uiService.get('showSrc'))
    }
  ]
}

const moveableOptions = (config?: CustomizeMoveableOptionsCallbackConfig): MoveableOptions => {
  const options: MoveableOptions = {}

  const id = config?.targetElId
  if (!id || !editor.value) return options

  const node = editor.value.editorService.getNodeById(id)

  if (!node) return options

  const isPage = node.type === NodeType.PAGE

  options.draggable = !isPage
  options.resizable = !isPage
  options.rotatable = !isPage

  return options
}

const save = () => {
  localStorage.setItem(
    'magicDSL',
    serialize(toRaw(value.value), {
      space: 2,
      unsafe: true
    }).replace(/"(\w+)":\s/g, '$1: ')
  )
  editor.value?.editorService.resetModifiedNodeId()
}

propsConfigs.value = magicPresetConfigs

propsValues.value = magicPresetValues

eventMethodList.value = magicPresetEvents

save()

editorService.usePlugin({
  beforeDoAdd: (config: MNode, parent?: MContainer | null) => {
    if (config.type === 'overlay') {
      config.style = {
        ...config.style,
        left: 0,
        top: 0
      }

      return [config, editorService.get('page')]
    }

    return [config, parent]
  }
})
watch(
  value,
  _value => {
    // @ts-ignore
    window.magicEditorConfig = _value
  },
  { immediate: true }
)
</script>

<style lang="scss">
html {
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
}

.editor-app {
  width: 100%;
  height: 100%;

  .m-editor {
    flex: 1;
    height: 100%;
  }

  .el-overlay-dialog {
    display: flex;
  }

  .pre-viewer {
    margin: auto;

    .el-dialog__body {
      padding: 0;
    }
  }

  .menu-left {
    .menu-item-text {
      margin-left: 10px;
    }
  }
}
</style>
