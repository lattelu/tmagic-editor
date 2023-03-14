const components: Record<string, any> = {
  page: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/page/src/index.vue"
    ),

  container: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/container/src/Container.vue"
    ),

  button: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/button/src/index.vue"
    ),

  text: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/text/src/index.vue"
    ),

  img: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/img/src/index.vue"
    ),

  qrcode: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/qrcode/src/index.vue"
    ),

  overlay: () =>
    import(
      "/Users/hongcheng/Documents/dev/tmagic-editor/packages/ui/src/overlay/src/index.vue"
    ),
};

export default components;
