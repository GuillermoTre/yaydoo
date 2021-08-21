module.exports = {
    up: async (queryInterface, Sequelize) =>{
        const transaction = await queryInterface.sequelize.transaction();
        try{
            await queryInterface.createTable(
                'clients_transaction',
                {
                    client_id: {
                        allowNull: false,
                        type: Sequelize.INTEGER,
                        autoIncrement: true,
                    },
                    acc_no_from:{
                        allowNull: false,
                        type: Sequelize.STRING,
                    },
                    acc_no_to:{
                        allowNull: false,
                        type: Sequelize.STRING,
                    },
                    amount:{
                        allowNull: false,
                        type: Sequelize.FLOAT,
                    },
                    created_at:{
                        allowNull: false,
                        type: Sequelize.DATEONLY,
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