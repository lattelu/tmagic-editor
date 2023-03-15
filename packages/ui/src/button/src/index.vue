<template>
  <button class="magic-ui-button" @click="clickHandler">
    <slot>
      <magic-ui-text :config="textConfig"></magic-ui-text>
    </slot>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance, PropType, reactive } from 'vue';

import { MButton, MButtonInstance, MText } from '../../../src/types';
import useApp from '../../useApp';

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<MButton>,
      default: () => ({}),
    },

    model: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const app = useApp(props);
    const vm: MButtonInstance = getCurrentInstance()?.proxy as MButtonInstance;
    const actions = reactive<Function[]>([]);
    const actualActions = computed(() => [
      typeof props.config.preAction === 'function' ? props.config.preAction : () => true,
      ...actions,
      typeof props.config.postAction === 'function' ? props.config.postAction : () => true,
    ]);
    function pushAction(action: Function): void {
      actions.push(action);
    }
    async function clickHandler(event: any): Promise<void> {
      console.log('%c Line:40 🌰 props.config', 'color:#b03734', props.config);
      if (props.config.route) {
        event?.stopPropagation();
        app?.emit('navigateTo', props.config.route);
        return;
      }
      for (const fn of actualActions.value) {
        if (typeof fn === 'function') {
          const ret = await fn(vm, { model: props.model });
          if (ret === false) {
            break;
          }
        }
      }

      emit('button:click');
    }

    const textConfig = computed<MText>(() => ({
      type: 'text',
      text: props.config?.text || '',
      disabledText: props.config?.disabledText || '',
      html: props.config?.html || '',
    }));

    return {
      pushAction,
      clickHandler,
      textConfig,
    };
  },
});
</script>
<style>
.magic-ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
