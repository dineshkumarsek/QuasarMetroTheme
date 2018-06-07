import LayoutDefault from '../layouts/default'
import PageIndex from '../pages/index'
import FourOhFour from '../pages/404'

export default [
  {
    path: '/',
    component: LayoutDefault, // () => import('../layouts/default'),
    children: [
      { path: '', component: PageIndex /* () => import('../pages/index') */ }
    ]
  },

  {
    // Always leave this as last one
    path: '*',
    component: FourOhFour // () => import('../pages/404')
  }
]
