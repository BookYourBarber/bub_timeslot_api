module.exports = (sequelize, DataTypes) =>{
    const TimeSlot = sequelize.define("TimeSlot", {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dayId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        startDate:{
            type: DataTypes.TIME,
            allowNull: false
        },
        endDate: {
            type: DataTypes.TIME,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Available', 'Unavailable', 'Break', 'Holiday']]
            }
        }
    })

    return TimeSlot;
};