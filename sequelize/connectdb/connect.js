const Sequelize=require('sequelize')
const db=new Sequelize({
    dialect: 'mysql',
    database: 'sampledb',
    username: 'sampleuser',
    password: 'samplepass',
})

const tasks=db.define('tasks',{
    name:{
       type:  Sequelize.DataTypes.STRING(140),
       allowNull: false
    },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        defaultValue: -1
    }
})
db.authenticate()

module.exports={
    db
}