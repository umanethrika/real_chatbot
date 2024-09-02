import { UserModel } from "./user.schema.js";

export default class UserRepository{
    async storeEmail(email){
        try{
            const newUser = new UserModel({email});
            await newUser.save();
            return newUser;
        }catch(err){
            if (err.code === 11000) {
                throw new Error('Email already exists');
            }
            console.error('Error while storing email address: ', err);
            throw new Error(err);
        }
    }
}