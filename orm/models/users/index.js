module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define('users', {
    login: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  })

  table.associate = function (models) {
    table.hasMany(models.offers, {
      foreignKey: 'userLogin',
      as: 'offers',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  }

  return table
}