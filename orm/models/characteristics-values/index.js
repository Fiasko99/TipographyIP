module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('characteristicsValues', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    strValue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    characteristicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  table.associate = function (models) {
    table.belongsTo(models.characteristicsValues, {
      foreignKey: 'characteristicId',
      as: 'characteristic',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}