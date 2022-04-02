'use strict';
const { Model } = require('sequelize');
const db = require('../models/index');

module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 *
		 * @param {db} models
		 */
		static associate(models) {
			// define association here
			const { Merchant } = models;
			product.belongsTo(Merchant);
		}
	}
	product.init(
		{
			name: DataTypes.TEXT,
			merchant_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'product',
		}
	);
	return product;
};