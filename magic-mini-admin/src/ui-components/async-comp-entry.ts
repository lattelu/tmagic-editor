const components: Record<string, any> = {
  'page': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/page/src/index.vue',
  ),

  'container': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/container/src/Container.vue',
  ),

  'button': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/button/src/index.vue',
  ),

  'text': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/text/src/index.vue',
  ),

  'img': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/img/src/index.vue',
  ),

  'qrcode': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/qrcode/src/index.vue',
  ),

  'overlay': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/overlay/src/index.vue',
  ),

  'news': () => import(
    '/Users/agan/Doc/Front-End/tmagic-editor/packages/ui/src/news/src/index.vue',
  ),
};

export default components;