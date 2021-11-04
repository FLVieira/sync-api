import Sequelize from 'sequelize';

import Visit from '../app/models/Visit';

import dbConfig from '../config/database';

const models = [Visit];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
