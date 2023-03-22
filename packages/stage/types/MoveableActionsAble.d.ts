import { MoveableManagerInterface, Renderer } from 'moveable';
import { AbleActionEventType } from './types';
declare const _default: (handler: (type: AbleActionEventType) => void) => {
    name: string;
    props: {
        selectParent: BooleanConstructor;
    };
    events: {};
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer): any;
};
export default _default;
