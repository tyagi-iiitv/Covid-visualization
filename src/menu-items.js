export default {
    items: [
        {
            id: 'graphs',
            title: 'Graphs',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'intro',
                    title: 'Introduction',
                    type: 'item',
                    url: '/intro',
                    icon: 'feather icon-book',
                },
                {
                    id: 'histogram',
                    title: 'Histogram',
                    type: 'item',
                    url: '/hist',
                    icon: 'feather icon-bar-chart-2',

                },
                {
                    id: 'race-bar',
                    title: 'Race Bar',
                    type: 'item',
                    url: '/race-chart',
                    icon: 'feather icon-bar-chart',
                },
                {
                    id: 'multi-line',
                    title: 'Multi-lines',
                    type: 'item',
                    url: '/multi-lines',
                    icon: 'feather icon-trending-up',
                },
                {
                    id: 'maps',
                    title: 'Maps',
                    type: 'item',
                    url: '/maps',
                    icon: 'feather icon-map',
                },
                {
                    id: 'tsne',
                    title: 'T-SNE',
                    type: 'item',
                    url: '/t-sne',
                    icon: 'feather icon-layers',
                },
                {
                    id: 'gantt',
                    title: 'Gantt Chart',
                    type: 'item',
                    url: '/gantt',
                    icon: 'feather icon-list',
                }
            ]
        }
    ]
}