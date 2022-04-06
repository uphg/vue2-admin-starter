const asyncRouter = [
  {
    path: '/form',
    component: '#',
    display: true,
    redirect: '/form',
    meta: { title: '表单', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'form',
        component: 'form',
        display: true,
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },
  {
    path: '/example',
    component: '#',
    display: true,
    redirect: '/example/table',
    meta: { title: '示例', icon: 'form' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: 'table',
        display: true,
        meta: { title: '表格', icon: 'form' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: 'tree',
        display: true,
        meta: { title: 'Tree 组件', icon: 'form' }
      }
    ]
  },
  {
    path: '/one',
    component: '#',
    display: true,
    meta: { title: '页面一', icon: 'form' },
    redirect: '/one',
    children: [
      {
        path: 'index',
        name: 'one',
        component: 'one',
        display: true,
        meta: { title: '页面一', icon: 'form' }
      }
    ]
  },
  {
    path: '/two',
    component: '#',
    display: true,
    meta: { title: '页面二', icon: 'form' },
    redirect: '/two',
    children: [
      {
        path: 'index',
        name: 'two',
        component: 'two',
        display: true,
        meta: { title: '页面二', icon: 'form' }
      }
    ]
  }
]

export default asyncRouter
