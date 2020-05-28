module.exports = {
    title: 'GitOps Conversation Kit',
    description: 'Learn how to bring GitOps to your team',
    themeConfig: {
        displayAllHeaders: true,
        docsDir: 'docs',
        editLinks: false,
        editLinkText: 'Help us improve this page!',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Contribute', link: 'https://github.com/gitops-community/website' },
        ],
        themeConfig: {
            logo: 'cuddle_fish.png', 
        },
        sidebar: [
            'intro/',
            'links/',
        ]
    },
    head: [
        ['link', { rel: 'icon', href: '/cuddle_fish.png' }],
        ['link', { rel: 'stylesheet', href: '/website.css' }]
    ]
};
