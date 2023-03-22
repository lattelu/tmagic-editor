import type { MenuButton, MenuComponent } from '../type';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data?: MenuButton | MenuComponent | undefined;
    eventType?: "mousedown" | "click" | "mouseup" | undefined;
}>, {
    data: () => {
        type: string;
        display: boolean;
    };
    eventType: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    data?: MenuButton | MenuComponent | undefined;
    eventType?: "mousedown" | "click" | "mouseup" | undefined;
}>, {
    data: () => {
        type: string;
        display: boolean;
    };
    eventType: string;
}>>>, {
    data: MenuButton | MenuComponent;
    eventType: 'mousedown' | 'mouseup' | 'click';
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
