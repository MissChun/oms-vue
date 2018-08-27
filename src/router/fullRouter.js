import orders from './orders'
import setting from './setting'
export default [{
  path: '',
  name: 'index',
  redirect: '/dashborad',
  component: (resolve) => require(['../page/MainFirst'], resolve),
  meta: {
    title: '首页'
  },
  children: [
    orders,
    setting,
  ]
}];
