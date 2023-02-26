module.exports = [
    { text: '首页', link: '/' },
    {
        text: '程序',
        link: '/program/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
            {
                text: '技巧杂货铺',
                items: [
                    { text: 'js实用的一行代码', link: '/pages/a61298/' },
                ],
            },
            {
                text: '学习笔记',
                items: [
                    { text: '《C++》', link: '/note/cpp/' },
                    { text: '《MATLAB》', link: '/note/matlab/' },
                    { text: '《Python》', link: '/note/python/' }
                ],
            },
        ],
    },
    {
        text: '技术',
        link: '/technology/',
        items: [
            {
                text: '学习笔记',
                items: [
                    { text: '《Git》', link: '/note/git/' },
                    { text: '《CMake》', link: '/note/cmake/' },
                ],
            },
            { text: '技术文档', link: '/pages/ad247c4332211551/' },
            { text: '博客搭建', link: '/pages/95f89f/' },
        ],
    },
    {
        text: '更多',
        link: '/more/',
        items: [
            { text: '学习', link: '/pages/f2a556/' },
            { text: '友情链接', link: '/friends/' },
        ],
    },
    { text: '关于', link: '/about/' },
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
        ],
    },
]