const components: Record<string, any> = {
  page: () => import('@tmagic/ui/src/page'),

  container: () => import('@tmagic/ui/src/container'),

  button: () => import('@tmagic/ui/src/button'),

  text: () => import('@tmagic/ui/src/text'),

  img: () => import('@tmagic/ui/src/img'),

  qrcode: () => import('@tmagic/ui/src/qrcode'),

  overlay: () => import('@tmagic/ui/src/overlay'),

  news: () => import('@tmagic/ui/src/news')
}

export default components
