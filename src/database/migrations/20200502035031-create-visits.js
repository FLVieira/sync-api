module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('visits', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tecnico_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vtdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vttime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ambientes: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      maquinas: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      caracteristica: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      plantabaixa_img: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      autorizacao_img: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observacao_reagendamento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      responsavel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      unit_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      unit_lat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      unit_long: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      responsavel_nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      responsavel_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tecnico_nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tecnico_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cidade_tecnico: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('visits');
  },
};
