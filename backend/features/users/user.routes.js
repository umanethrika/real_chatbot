import express from 'express';
import UserController from './user.controller.js';

const userController = new UserController();

const router = express.Router();

router.post('/signUp',(req,res)=>{
    userController.signUp(req,res);
});

router.post('/signIn', (req,res)=>{
    userController.signIn(req,res);
});

router.put('/signOut/:userId',(req,res)=>{
    userController.signOut(req,res);
})

router.post('/store', (req, res)=>{
    userController.storeEmail(req, res);
});

export default router;