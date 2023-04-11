import page from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/page/src/formConfig';
import container from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/container/src/formConfig';
import button from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/button/src/formConfig';
import text from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/text/src/formConfig';
import img from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/img/src/formConfig';
import qrcode from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/qrcode/src/formConfig';
import overlay from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/overlay/src/formConfig';
import news from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/news/src/formConfig';

const configs: Record<string, any> = {
  'page': page,
  'container': container,
  'button': button,
  'text': text,
  'img': img,
  'qrcode': qrcode,
  'overlay': overlay,
  'news': news,
};

export default configs;