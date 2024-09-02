import express from 'express';
import UserController from './user.controller.js';

const userController = new UserController();

const router = express.Router();

router.post('/store', (req, res)=>{
    userController.storeEmail(req, res);
});

export default router;