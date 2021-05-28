module.exports = (sequelize, Sequelize) => {

    const Owner = sequelize.define("owner", {
    
    name: {
    
    type: Sequelize.STRING
    
    },
    
    mob_no: {
    
    type: Sequelize.BIGINT
    
    },
    
    email: {
    
    type: Sequelize.STRING
    
    }
    
    });
    
    
    return Owner;
    
    };