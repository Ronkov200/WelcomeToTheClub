import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import MailService from './mail-service.js'
import TokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import UserModel from '../models/user-model.js'

class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email}) // поиск пользователя по email
        if (candidate) { // пользователь существует? --> бросить ошибку
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3); // захэшированный пароль
        const activationLink = uuidv4() // генерация ссылки через "uuid"
        const user = await UserModel.create({email, password: hashPassword, activationLink}) // создание пользователя с захэшенным паролем
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`); // кидаем сообщение на почту
        const userDto = new UserDto(user) 
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }
}

export default new UserService() // При использовании ES-модулей синтаксис отличается от Common JS