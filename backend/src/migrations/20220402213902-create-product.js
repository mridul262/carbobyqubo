'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.TEXT,
			},
			merchant_id: {
				type: Sequelize.INTEGER,
				references: { model: 'merchants', key: 'id' },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('products');
	},
};