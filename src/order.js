function takeOrder(order, delivery) {
  if (delivery.length < 3) {
  delivery.push(order)
  }
};

function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice(i, 1);
    }
  }
};

function listItems(deliveryOrders) {
  var items = '';
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (i === deliveryOrders.length - 1) {
      items += deliveryOrders[i].item;
      break;
    };
    items += deliveryOrders[i].item;
    items += ", ";
  }
  return items;
};

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
    } else {
      return false;
    }
}
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
