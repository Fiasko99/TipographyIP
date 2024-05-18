module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('categories', {
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
    table.hasMany(models.products, {
      foreignKey: 'categoryId',
      as: 'products',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}