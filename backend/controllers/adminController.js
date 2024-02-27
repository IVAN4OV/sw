const Role = require('../models/roleModel')

class AdminController {
	async getUsers(req, res) {
		try	{
			const userRole = new Role()
			const adminRole = new Role({ value: "ADMIN" });
			await Role.create()
			await Role.create({ value: "ADMIN" })
			return res.json(true)
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = new AdminController();