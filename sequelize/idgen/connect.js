const Sequelize=require('sequelize')
const DataTypes=require('sequelize')

const db=new Sequelize({
    dialect: 'mysql',
    database: 'sampledb',
    username: 'sampleuser01',
    password: 'samplepass',
})

const course=db.define('course',{
     id:{
         type:DataTypes.STRING(2),
         primaryKey:true
     },
     name:DataTypes.STRING(20)
})

const teacher=db.define('teacher',{
    name:{
        type:DataTypes.STRING(35),
        allowNull:false
    }
    
})

const center=db.define('center',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(15),
        allowNull:false
    },
    city:
    {
        type:DataTypes.STRING(15),
        allowNull:false
    }
})

const season=db.define('season',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(10),
        allowNull:false
    }
})

const batch=db.define('batch',{
    code:{
        type:DataTypes.STRING(8),
        primaryKey:true
    },
    start:DataTypes.DATE,
    end:DataTypes.DATE
})

batch.belongsTo(course)
batch.belongsTo(season)
batch.belongsTo(center)

course.hasMany(batch)
season.hasMany(batch)
center.hasMany(batch)

const seed=async function () {
    try {
        await db.sync({alter:true})
        await center.bulkCreate([
            {id:'PP',name:'Pitampura',city:'NewDelhi'},
            {id:'DW',name:'Dwarka',city:'NewDelhi'},
            {id:'NO',name:'Noida',city:'NewDelhi'},
            {id:'DO',name:'Dehradun',city:'Dehradun'},
            {id:'OL',name:'Online',city:'NewDelhi'}
        ],{
            ignoreDuplicates:true
        })

        await season.bulkCreate([
            {id:'s',name:'summer'},
            {id:'w',name:'winter'},
            {id:'f',name:'fall'},
            {id:'p',name:'spring'},
        ],{
            ignoreDuplicates:true
        })

        await course.bulkCreate([
            {id:'LP',name:'Launchpad'},
            {id:'CX',name:'crux'},
            {id:'IB',name:'Interview Bootcamp'},
            {id:'AD',name:'Android Devlopment'},
            {id:'WD',name:'Web Devlopment'},
        ],{
            ignoreDuplicates:true
        })
        
    } catch (e) {
        console.error(e);
    }
    
}
seed()

module.exports={
    db,course,center,season,batch
}

