import Category from "./Category.js";
import Product from "./Product.js";
import User from "./User.js";
import Review from "./Review.js";
import Cart from "./Cart.js";

// **************** Relationship between Product and category ************
Category.hasMany(Product, {
  onDelete: "cascade", // CASCADE means that the child data is either deleted or updated when the parent data is deleted or updated
  foreignKey: { allowNull: false }, // NULL is a special value in SQL. It indicates data that does not exist. This is different to data that is blank.
  // it allows you to specify whether your fields are allowed to be NULL
});
Product.belongsTo(Category, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

// **************** Relationship between Product and Cart ************
Product.hasMany(Cart); // Product.findAll({include: Cart})
Cart.belongsTo(Product); // Cart.findAll({include: Product})

// **************** Relationship between Product and User ************
Product.belongsToMany(User, {
  through: { model: Cart, unique: false }, //unique: false => to prevent creating primary key
});
User.belongsToMany(Product, {
  through: { model: Cart, unique: false },
});

// **************** Relationship between Product and Reviews **************
Product.hasMany(Review, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Review.belongsTo(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

// **************** Relationship between User and Cart **************
User.hasMany(Cart); // User.findAll({include: Cart})
Cart.belongsTo(User); // Cart.findAll({include: User})

// **************** Relationship between User and Review **************
User.hasMany(Review, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Review.belongsTo(User, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

export default { Category, Product, User, Review, Cart };
