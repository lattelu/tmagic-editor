/**
 * 动态表单，目前只支持input类型字段
 * inputType: 'dynamic-field',
 * text: '动态表单',
 * dynamicKey: 'keyname', 如果model[dynamicKey]变化，表单字段变化
 * returnFields(config,model,request): 函数，返回字段列表[{name:'',label:'',defaultValue:''}]
 *
 * 特别注意！！！field的上一级必须extensible: true，才能保存未声明的字段
 */
import { DynamicFieldConfig } from '../schema';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    config: DynamicFieldConfig;
    model: any;
    initValues?: any;
    values?: any;
    name: string;
    prop: string;
    disabled?: boolean | undefined;
    size?: "default" | "small" | "large" | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    config: DynamicFieldConfig;
    model: any;
    initValues?: any;
    values?: any;
    name: string;
    prop: string;
    disabled?: boolean | undefined;
    size?: "default" | "small" | "large" | undefined;
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
