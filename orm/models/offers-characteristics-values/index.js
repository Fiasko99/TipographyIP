module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('offersCharacteristicsValues', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    characteristicValueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    offerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })

  table.associate = function (models) {
    table.belongsTo(models.characteristicsValues, {
      foreignKey: 'characteristicValueId',
      as: 'characteristicValue',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.belongsTo(models.offers, {
      foreignKey: 'offerId',
      as: 'offer',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}