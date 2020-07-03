function nameMenuItem(name) {
  return (`Delicious ${name}`)
};

function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type}
};

function addIngredients(newIngred, ingredients) {
  if (!ingredients.includes(newIngred)) {
    ingredients.push(newIngred);
  }
};

function formatPrice(price) {
  return `$${price}`
};

function decreasePrice(price) {
  return price * .9;
};

function createRecipe(title, ingredients, type) {
  return {title, ingredients, type};
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
