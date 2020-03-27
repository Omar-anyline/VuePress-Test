module.exports = {
    title: 'Anyline Docu',
    decription: 'just playing around',
    themeConfig: {
        nav:[
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Abount Anyline', link: 'https://anyline.com/' },
        ],
        sidebar: {
            '/guide/': [
                '',
                'frontend',
                'backend',
            ]
        }
    }
}