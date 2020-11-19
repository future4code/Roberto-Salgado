import BaseDatabase from "./BaseDatabase";

class DatabaseSetup extends BaseDatabase {

	public async createTables():Promise<void> {
		try {
			await BaseDatabase.connection.raw(`
				CREATE TABLE labook_users(
					id VARCHAR(255) PRIMARY KEY,
					name VARCHAR(255) NOT NULL,
					email VARCHAR(255) UNIQUE NOT NULL,
					password VARCHAR(255) NOT NULL
				);
			`);

			await BaseDatabase.connection.raw(`
				CREATE TABLE labook_posts(
					id VARCHAR(255) PRIMARY KEY,
					photo VARCHAR(255) NOT NULL,
					description VARCHAR(255) NOT NULL,
					type ENUM("normal","event") DEFAULT "normal",
					created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
					author_id VARCHAR(255),
					FOREIGN KEY (author_id) REFERENCES labook_users (id)
				);
			`);

			console.log("MySql setup completed!");
		} catch (error) {
			console.log(error);
		}
	}

	public async displayTables():Promise<void> {
		try {
			await BaseDatabase.connection.raw('SHOW TABLES');
		} catch (error) {
			throw new Error(error.message);
		}
	}

}

export default new DatabaseSetup();