module.exports = (sequelize, DataTypes) => {
    const Habit = sequelize.define('Habit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'habits',
        timestamps: true
    });

    Habit.associate = (models) => {
        Habit.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };

    return Habit;
};