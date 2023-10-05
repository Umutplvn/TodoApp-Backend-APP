"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const Todo= require('../models/todo')

module.exports={
    //CRUD Methods
    list: async(req, res)=>{
        // const data =await Todo.findAll()
        const data =await Todo.findAndCountAll()
        res.send({
            error:false,
            result:data
        })
    },

    create: async(req, res)=>{
    // const data =await Todo.findAll()
    const data =await Todo.create(req.body)
    res.send({
        error:false,
        body:req.body,
        message:"Created",
        result:data
    })
},

    read: async(req, res)=>{
        // const data = await Todo.findOne({where:{title:"Tdod Baslik 2"}}) //Let us to search with different parameters
        const data = await Todo.findByPk(req.params.id)
        res.send({
            error:false,
            result:data
        })
    },

    update: async(req, res)=>{

    //Model.update({newData}, {filter - data that will be updated}) - update many but its gonna update only one match will filtered data
    
    const updatedData=await Todo.update(req.body, {where:{id: req.params.id}})
    //updatedData return: [1]
    res.send({
        error:false,
        body:req.body, //new data
        isUpdated: Boolean(updatedData[0]),
        message:"Updated",
        result:await Todo.findByPk(req.params.id),
    })
},

    delete: async(req, res)=>{
        //Model.destroy()({filter})
        //delete many but its gonna delete only one match will filtered data
        const deletedData= await Todo.destroy({where:{id:req.params.id}})
        //deletedData return=1
       
        // if(deletedData){
        //     res.sendStatus(204)
        // }else{
        //     res.sendStatus(404)
        // }
       
         res.send({
            error:false,
            message:"Deleted",
            isDeleted: Boolean(deletedData[0])
         })
    }
}