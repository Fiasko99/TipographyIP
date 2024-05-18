module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  table.associate = function (models) {
    table.hasMany(models.productsCharacteristics, {
      foreignKey: 'productId',
      as: 'productsCharacteristics',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.offers, {
      foreignKey: 'productId',
      as: 'offers',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      as: 'categories',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}