"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

//! CONSTRUCT THE MODEL
//*SEQUELIZE
//? npm install sequelize sqlite3

//https://sequelize.org/docs/v6/core-concepts/model-instances/
const {Sequelize, DataTypes}= require('sequelize')
const sequelize = new Sequelize("sqlite:"+process.env.SQLITE || './db.sqlite3')

// sequelize.define('tableName', { columns })
const Todo =sequelize.define('todo', {
    // id:{
    //     type:DataTypes.INTEGER,
    //     unique:true,
    //     require:true,
    //     allowNull:false,    //bos olabilir mi
    //     // field:'custom_column_name',
    //     comment:'Description',
    //     primaryKey:true,
    //     autoIncrement:true,
    // },
    title:{
        type:DataTypes.STRING(64), //varchar 64
        allowNull:false,
    },
    description:DataTypes.TEXT,
    priority:{ // 1:High Priority 0:Normal  -1:Low Priority
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0
    },
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
    //No need to define "createdAt" & "updatedAt" as sequelize create this props automaticly
    //If you dont wanna see these props, you have to unset them by assigning them false
})


//! Synchronization: -CREATE DATABASE

//! SYNC MUST RUN ONCE!
// sequelize.sync()        //! database olusturma komutu - db.sqlite3 dosyasi olusturuldu
// sequelize.sync({ force: true }) // DROP & CREATE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP & CREATE & FROM BACKUP

/* ------------------------------------------------------- */

//!CONNECT TO THE DATABASE
sequelize.authenticate()
.then(()=>console.log('DB Connected'))
.catch((err)=>console.log('DB conncetion failed'))


    // https://sequelize.org/docs/v7/models/data-types/   supported data types


module.exports=Todo
