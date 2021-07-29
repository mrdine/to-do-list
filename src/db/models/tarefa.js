'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    prazo: DataTypes.DATE,
    concluida: DataTypes.BOOLEAN
  }, {paranoid: true, tableName: 'Tarefas'});
  Tarefa.associate = function(models) {
    // associations can be defined here
  };
  return Tarefa;
};
