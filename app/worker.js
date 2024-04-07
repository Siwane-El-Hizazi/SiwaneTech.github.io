const APP_CONFIG = {
  app: {
    name: 'fineshop-pwa-app'
  },
  github: {
    username: 'XYZSiwane',
    repository: 'SiwaneXYZ.github.io',
    branch: 'main',
    /**
     * If the repository is private, provide token as string
     * otherwise keep it null
     */
    token: null
  },
  cacheConfig: {
    cache: 'pwa-app',
    browserTTL: 2 * 60 * 60 * 24,
    edgeTTL: 2 * 60 * 60 * 24,
    defaultEtag: 'strong',
    /**
     * This field is for Development purpose only to bypass cache
     * Keep it false in order to serve cached responses
     */
    bypassCache: false
  }
};
