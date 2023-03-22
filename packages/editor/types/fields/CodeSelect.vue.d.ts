import { TableConfig } from '@tmagic/form';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    config: {
        tableConfig?: TableConfig | undefined;
    };
    model: any;
    prop: string;
    name: string;
    size: 'mini' | 'small' | 'medium';
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: {
        tableConfig?: TableConfig | undefined;
    };
    model: any;
    prop: string;
    name: string;
    size: 'mini' | 'small' | 'medium';
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {}>;
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
