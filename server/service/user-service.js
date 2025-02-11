import UserSchema from '../models/user-model.js'
import bcrypt from 'bcrypt'
import uuid from 'uuid'
import MailService from './mail-service.js'
import TokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'

class UserService {
    async registration(email, password){
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4()
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await MailService.sendActivationMail(email, activationLink);
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }
}

module.exports = UserService();