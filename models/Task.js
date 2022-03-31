const {DataTypes} = require('sequelize')
const db = require('../db/db')

const Task = db.define('Task', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: false
    },
    done: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Task