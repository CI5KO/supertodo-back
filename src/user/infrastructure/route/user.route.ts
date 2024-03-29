import { Router } from 'express'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.ctrl'
// import { MockRepository } from "../repository/mock.repository";
import { MongoRepository } from '../repository/mongo.repository'

const route = Router()
const userRepo = new MongoRepository()
const userUseCase = new UserUseCase(userRepo)
const userCtrl = new UserController(userUseCase)

route.post(`/`, userCtrl.insertCtrl)
route.get(`/`, userCtrl.getCtrl)

export default route
