import pool from "../db.js"

class ExampleController {
    async login(req,res) {

    }

    async logout(req,res) {
        
    }

    async signup(req,res) {
        
    }

    async refresh(req,res) {
        
    }

    async register(req,res){
        const { name, email, password } = req.body;

        try {
            const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]);
            res.json(result.rows[0]);
        } catch (e) {
            console.error("Ошибка при добавлении:", JSON.stringify(e, null, 2));
            res.status(500).json({ error: "Ошибка при добавлении пользователя", message: e.message });
        }
    }

    async deleteUser(req,res) {
        const { email } = req.body;

        try {
            const result = await pool.query("DELETE FROM users WHERE email = $1 RETURNING *", [email]);
            res.json(result.rows[0]);
        } catch (e) {
            console.error("Ошибка при добавлении:", JSON.stringify(e, null, 2));
            res.status(500).json({ error: "Ошибка при добавлении пользователя", message: e.message });
        }
    }
}

export default new ExampleController();