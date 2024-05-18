module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('offers', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userLogin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  table.associate = function (models) {
    table.hasMany(models.offersCharacteristicsValues, {
      foreignKey: 'offerId',
      as: 'offersCharacteristicsValues',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.products, {
      foreignKey: 'productId',
      as: 'product',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.users, {
      foreignKey: 'userLogin',
      as: 'user',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}