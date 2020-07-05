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



function removeMenuItem(restaurant, itemName, menuName) {
  if (!menuName) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }

  var message = `No one is eating our ${itemName}` +
  ` - it has been removed from the ${menuName} menu!`

  var indexFinder = food => food.name === itemName;

  var menuIndex = restaurant.menus[menuName].findIndex(indexFinder);

  restaurant.menus[menuName].splice(menuIndex, 1);

    return message;

};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}















//
