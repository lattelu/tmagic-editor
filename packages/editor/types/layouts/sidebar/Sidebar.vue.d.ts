import type { MenuButton, MenuComponent } from '../../type';
import { SideBarData } from '../../type';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data?: SideBarData | undefined;
    layerContentMenu: (MenuButton | MenuComponent)[];
}>, {
    data: () => {
        type: string;
        status: string;
        items: string[];
    };
}>, {
    activeTabName: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data?: SideBarData | undefined;
    layerContentMenu: (MenuButton | MenuComponent)[];
}>, {
    data: () => {
        type: string;
        status: string;
        items: string[];
    };
}>>>, {
    data: SideBarData;
}>, {
    'component-list-panel-header': (_: {}) => any;
    'component-list-item': (_: {
        component: any;
    }) => any;
    'layer-panel-header': (_: {}) => any;
    'code-block-panel-header': (_: {}) => any;
    'code-block-panel-tool': (_: {
        id: any;
        data: any;
    }) => any;
    'code-block-edit-panel-header': (_: {
        id: any;
    }) => any;
    'layer-node-content': (_: {
        data: any;
        node: any;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
