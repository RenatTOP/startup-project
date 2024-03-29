module.exports = {
    outputDir: '../../production/dist/',
    pwa: {
        name: 'Startup',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'public/service-worker.js',
        },
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    }
}