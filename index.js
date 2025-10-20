import db from './config/db.js';
import UserDAO from './DataAccess/UserDAO.js';

(async function () {

    let dbs = new db();
    let userdao = new UserDAO();
    await dbs.conectar();

    await userdao.crear({ username: 'Martin', email: 'martin@gmail.com' })
    await userdao.crear({ username: 'Martin2', email: 'martin2@gmail.com' })
    await userdao.crear({ username: 'Martin3', email: 'martin3@gmail.com' })
    await userdao.crear({ username: 'Martin4', email: 'martin4@gmail.com' })

    // await userdao.eliminar('66f22f5c69f017d8bb2d156a');

    const usuarios = await userdao.obtenerTodos();

    console.log(usuarios);

    dbs.desconectar();

})();