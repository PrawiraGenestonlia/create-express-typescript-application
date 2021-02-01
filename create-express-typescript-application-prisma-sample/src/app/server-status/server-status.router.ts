import { Router } from 'express';
import { SERVER_STATUS_ENDPOINT } from '../../constants/endpoint';
import { getRoutes } from './server.status.service';

export const router: Router = Router();

// getStatus
router.get(SERVER_STATUS_ENDPOINT + "/", (req, res) => {
  res.status(200).send({
    "status": "server is running",
    "serverTime": new Date().toISOString()
  });
});

// getRoutes
router.get(SERVER_STATUS_ENDPOINT + "/routes", async (req, res) => {
  console.log(new Date().toISOString())
  getRoutes().then(routes => {
    res.status(200).send({
      numberOfRoutes: routes.length,
      routes: routes
    });
  }).catch(e => {
    res.status(500).send({
      error: e
    });
  });
});


