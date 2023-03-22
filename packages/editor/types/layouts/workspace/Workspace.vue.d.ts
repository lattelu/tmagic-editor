import type { MenuButton, MenuComponent } from '../../type';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    stageContentMenu: (MenuButton | MenuComponent)[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    stageContentMenu: (MenuButton | MenuComponent)[];
}>>>, {}>, {
    stage: (_: {}) => any;
    'workspace-content': (_: {}) => any;
    'page-bar-title': (_: {
        page: import("@tmagic/schema").MPage;
    }) => any;
    'page-bar-popover': (_: {
        page: import("@tmagic/schema").MPage;
    }) => any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
