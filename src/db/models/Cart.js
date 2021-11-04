import sequelize from "../sequelize.js";

const Cart = sequelize.define(
  "Cart",
  {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
  },
  // {
  //   // Other model options go here
  // }
);

export default Cart;
