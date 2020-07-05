function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};

function addMenuItem(shopName, item) {
  if (!shopName.menus[item.type].includes(item)) {
    shopName.menus[item.type].push(item);
  }
};



// function removeMenuItem(restaurant, item) {
//   var message = `No one is eating our ${item.name}
//     - it has been removed from the breakfast menu!`;
//
//     if (restaurant.menus[item.type].inclues(item)) {
//       this.restaurant.menus[item.type].pop(item);
//       return message;
//     }
//
// };


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}















//
