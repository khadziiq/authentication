const { item,user } = require('../models')


class ItemController{
    static async getItems(req, res){
        try {
            
            const {id} = req.userData
            let items = await item.findAll({
               where:{
                   userId:id
               },
               include:[
                   user
               ] 
            })
            res.status(200).json(items)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async createItem(req, res){
        try {
           const{name, type, image, price, stock} = req.body
           const {id} = req.userData
           let result = await item.create({
               name, type, image, price, stock, userId:id
           })
           res.status(201).json(result)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    static async findById(req, res){
        try {
            
        } catch (error) {
            
        }
    }
    static async removeItem(req, res){
        try {
            
        } catch (error) {
            
        }
    }
    static async updateItem(req, res){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = ItemController