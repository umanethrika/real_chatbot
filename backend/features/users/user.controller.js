import UserRepository from "./user.repository.js";

export default class UserController{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async storeEmail(req, res){
        try{
            const {email} = req.body;
            const newUser = await this.userRepository.storeEmail(email);
            res.status(201).json({
                status: true,
                user: newUser
            })
        }catch(err){
            if (err.message === 'Email already exists') {
                res.status(409).json({
                    status: false,
                    msg: 'Email already registered',
                });
            } else {
                res.status(500).json({
                    status: false,
                    msg: 'Failed storing email',
                    error: err.message
                });
            }
        }
    }
}