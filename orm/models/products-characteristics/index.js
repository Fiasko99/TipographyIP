module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('productsCharactiristics', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    characteristicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

  table.associate = function (models) {
    table.belongsTo(models.products, {
      foreignKey: 'productId',
      as: 'product',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.characteristics, {
      foreignKey: 'characteristicId',
      as: 'characteristic',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}