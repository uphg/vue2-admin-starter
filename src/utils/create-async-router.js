import Layout from '@/layout'

let count = 1

const createRouteName = (value) => {
  if (!value || !(typeof value === 'string')) return
  let newValue = ''
  const splitValue = value.replace(/\//g, '-').split('-')
  for (const item of splitValue) {
    if (!item) continue
    const UpperCase = item[0].toLocaleUpperCase('en-US')
    newValue += UpperCase + item.slice(1)
  }

  return newValue
}

const createAsyncRouter = (router) => {
  const result = []
  for (const route of router) {
    const { path, component, redirect, menuId, meta, children, display } = route
    const isParent = component === '#'
    const routeName = isParent ? menuId ? 'menu' + menuId : `menu${count++}` : createRouteName(component)
    const newRoute = {
      path,
      // component: isParent ? Layout : () => import(`@/views/${component}/index.vue`),
      // 如果 import() 报错，替换为以下代码：
      component: isParent ? Layout : (resolve) => require([`@/views/${component}/index`], resolve),
      redirect: isParent ? redirect : null,
      name: routeName,
      meta,
      display
    }
    if (children && children.length > 0) {
      newRoute.children = createAsyncRouter(children)
    }
    result.push(newRoute)
  }

  return result
}

export default createAsyncRouter
