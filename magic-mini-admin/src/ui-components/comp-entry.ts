import page from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/page/src/index.vue';
import container from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/container/src/Container.vue';
import button from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/button/src/index.vue';
import text from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/text/src/index.vue';
import img from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/img/src/index.vue';
import qrcode from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/qrcode/src/index.vue';
import overlay from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/overlay/src/index.vue';
import news from '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/news/src/index.vue';

const components: Record<string, any> = {
  'page': page,
  'container': container,
  'button': button,
  'text': text,
  'img': img,
  'qrcode': qrcode,
  'overlay': overlay,
  'news': news,
};

export default components;