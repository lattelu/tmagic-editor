declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    width?: number | undefined;
    height?: number | undefined;
    wrapWidth?: number | undefined;
    wrapHeight?: number | undefined;
    zoom?: number | undefined;
    correctionScrollSize?: {
        width: number;
        height: number;
    } | undefined;
}>, {
    width: number;
    height: number;
    wrapWidth: number;
    wrapHeight: number;
    zoom: number;
    correctionScrollSize: () => {
        width: number;
        height: number;
    };
}>, {
    container: import("vue").Ref<HTMLDivElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    width?: number | undefined;
    height?: number | undefined;
    wrapWidth?: number | undefined;
    wrapHeight?: number | undefined;
    zoom?: number | undefined;
    correctionScrollSize?: {
        width: number;
        height: number;
    } | undefined;
}>, {
    width: number;
    height: number;
    wrapWidth: number;
    wrapHeight: number;
    zoom: number;
    correctionScrollSize: () => {
        width: number;
        height: number;
    };
}>>>, {
    height: number;
    width: number;
    zoom: number;
    wrapWidth: number;
    wrapHeight: number;
    correctionScrollSize: {
        width: number;
        height: number;
    };
}>, {
    default: (_: {}) => any;
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
