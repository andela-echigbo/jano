import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import Schema from '../../db/schema';

const basename = path.basename(module.filename);
const Model = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const modelName = file.split('.')[0];
    /* eslint-disable no-unused-vars */
    const model = sequelize.import(modelName, (seq, Types) => seq.define(modelName, Schema.user));
    /* eslint-enable no=unused-vars */
    Model[model.name] = model;
  });

Model[sequelize] = sequelize;
Model[Sequelize] = Sequelize;

module.exports = Model;
