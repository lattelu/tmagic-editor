import { Id } from '@tmagic/schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 代码id */
    id: Id;
    /** 代码内容 */
    content: string;
    /** 是否可编辑 */
    editable?: boolean | undefined;
    /** 是否自动保存草稿 */
    autoSaveDraft?: boolean | undefined;
    /** 编辑器参数 */
    codeOptions?: Object | undefined;
    /** 编辑器语言 */
    language?: string | undefined;
}>, {
    editable: boolean;
    autoSaveDraft: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "saveAndClose")[], "close" | "saveAndClose", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 代码id */
    id: Id;
    /** 代码内容 */
    content: string;
    /** 是否可编辑 */
    editable?: boolean | undefined;
    /** 是否自动保存草稿 */
    autoSaveDraft?: boolean | undefined;
    /** 编辑器参数 */
    codeOptions?: Object | undefined;
    /** 编辑器语言 */
    language?: string | undefined;
}>, {
    editable: boolean;
    autoSaveDraft: boolean;
}>>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onSaveAndClose?: ((...args: any[]) => any) | undefined;
}, {
    editable: boolean;
    autoSaveDraft: boolean;
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
