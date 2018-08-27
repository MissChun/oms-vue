export default {
  path: 'orders',
  name: 'orders',
  meta: {
    isVerificationL: true,
    title: '订单',
    iconName: 'icon-order',
  },
  children: [{
    path: 'pickupOrders',
    name: 'pickupOrders',
    meta: {
      isVerificationL: true,
      title: '提货订单',
    },
    children: []
  }]
}
