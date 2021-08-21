module.exports = {
    up: async (queryInterface, Sequelize) =>{
        const transaction = await queryInterface.sequelize.transaction();
        try{
            await queryInterface.createTable(
                'clients_account',
                {
                    client_id: {
                        allowNull: false,
                        type: Sequelize.INTEGER,
                        autoIncrement: true
                    },
                    acc_no:{
                        allowNull: false,
                        type: Sequelize.STRING,
                    },
                    created_at:{
                        allowNull: false,
                        type: Sequelize.DATE,
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