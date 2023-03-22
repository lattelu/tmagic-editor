import { ColumnConfig } from '@tmagic/form';
import { Id } from '@tmagic/schema';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 代码块id */
    id: Id;
    /** 代码块名称 */
    name: string;
    /** 代码内容 */
    content: string;
    /** 是否可编辑 */
    editable?: boolean | undefined;
    /** 是否自动保存草稿 */
    autoSaveDraft?: boolean | undefined;
    /** 编辑器扩展参数 */
    codeOptions?: object | undefined;
    /** 代码参数扩展配置 */
    paramsColConfig?: ColumnConfig | undefined;
}>, {
    editable: boolean;
    autoSaveDraft: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "field-input")[], "change" | "field-input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** 代码块id */
    id: Id;
    /** 代码块名称 */
    name: string;
    /** 代码内容 */
    content: string;
    /** 是否可编辑 */
    editable?: boolean | undefined;
    /** 是否自动保存草稿 */
    autoSaveDraft?: boolean | undefined;
    /** 编辑器扩展参数 */
    codeOptions?: object | undefined;
    /** 代码参数扩展配置 */
    paramsColConfig?: ColumnConfig | undefined;
}>, {
    editable: boolean;
    autoSaveDraft: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onField-input"?: ((...args: any[]) => any) | undefined;
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
