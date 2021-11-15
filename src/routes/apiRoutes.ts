import express, { Router } from 'express';
import apiController from '../controllers/apiController';

class ApiRoutes {

  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/', apiController.last);
    this.router.get('/values/:id', apiController.getValuesFromOne);
    this.router.get('/date/:name/:date', apiController.getValuesFromDate);
  }

}

export default new ApiRoutes().router;
