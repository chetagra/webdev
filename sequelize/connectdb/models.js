const Sequelize=require('sequelize')
const { where } = require('sequelize')
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
async function task() {
    await db.sync({alter: true})
    await tasks.create({
        name:'chetan',
        age:21
    })

    await tasks.bulkCreate([
        {
            name:'task1',
            age:20
        },
        {
            name:'task2',
            age:22
        },
        {
            name:'task3',
            age:24
        },
    ])

    const Task=await tasks.findAll({
        where:{
            age:{$gt:20}
        }
    }); 
    Task.forEach((t) => {
        console.log(`${t.name} \t ${t.age}`);
    });
}
task()

