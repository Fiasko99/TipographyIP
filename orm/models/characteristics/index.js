module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('characteristics', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  table.associate = function (models) {
    table.hasMany(models.characteristicsValues, {
      foreignKey: 'characteristicId',
      as: 'characteristicsValues',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })

    table.hasMany(models.productsCharacteristics, {
      foreignKey: 'characteristicId',
      as: 'productsCharacteristics',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}