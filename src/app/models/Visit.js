import Sequelize, { Model } from 'sequelize';

export default class Visit extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        unit_id: Sequelize.INTEGER,
        tecnico_id: Sequelize.STRING,
        vtdate: Sequelize.STRING,
        vttime: Sequelize.STRING,
        ambientes: Sequelize.INTEGER,
        maquinas: Sequelize.INTEGER,
        caracteristica: Sequelize.STRING,
        plantabaixa_img: Sequelize.STRING,
        autorizacao_img: Sequelize.STRING,
        observacao: Sequelize.STRING,
        observacao_reagendamento: Sequelize.STRING,
        responsavel: Sequelize.STRING,
        city_name: Sequelize.STRING,
        client_name: Sequelize.STRING,
        unit_name: Sequelize.STRING,
        unit_lat: Sequelize.STRING,
        unit_long: Sequelize.STRING,
        responsavel_nome: Sequelize.STRING,
        responsavel_phone: Sequelize.STRING,
        tecnico_nome: Sequelize.STRING,
        tecnico_phone: Sequelize.STRING,
        cidade_tecnico: Sequelize.STRING,
        status_id: Sequelize.INTEGER,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
