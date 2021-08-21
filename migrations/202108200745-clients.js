module.exports = {
    up: async (queryInterface, Sequelize) =>{
        const transaction = await queryInterface.sequelize.transaction();
        try{
            await queryInterface.createTable(
                'clients',
                {
                    id: {
                        allowNull: false,
                        type: Sequelize.INTEGER,
                        autoIncrement: true,
                        primaryKey: true
                    },
                    name:{
                        allowNull: false,
                        type: Sequelize.STRING,
                    },
                    password:{
                        allowNull: false,
                        type: Sequelize.STRING,
                    },
                }
            );
            await transaction.commit();
        }
        catch(error){
            await transaction.rollback();
            throw error;
        }
    }
}