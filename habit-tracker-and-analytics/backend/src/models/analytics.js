module.exports = (sequelize, DataTypes) => {
    const Analytics = sequelize.define('Analytics', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        habitId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Habits',
                key: 'id'
            }
        },
        completionDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'analytics',
        timestamps: false
    });

    return Analytics;
};