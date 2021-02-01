import { Router } from 'express';
import { USER_ENDPOINT } from '../../constants/endpoint';
import { getAllUser, createUser, updateUser, deleteUser } from './user.service';

// Export module for registering router in express app
export const router: Router = Router();

// Define your routes here
router.get(USER_ENDPOINT + "/", (req, res) => {
  getAllUser().then((users) => {
    res.status(200).send({
      users: users
    });
  }).catch((e) => {
    res.status(500).send({
      error: e
    });
  });
});

router.post(USER_ENDPOINT + "/", (req: any, res) => {
  createUser({
    email: req.body.email,
    roles: req.body.roles
  }).then(user => {
    res.status(200).send({
      ...user
    });
  }).catch(e => {
    res.status(500).send({
      error: e
    });
  });
});

router.put(USER_ENDPOINT + "/:id", (req, res) => {
  updateUser({
    id: Number(req.params.id),
    email: req.body.email,
    roles: req.body.roles
  }).then(user => {
    res.status(200).send({
      ...user
    });
  }).catch(e => {
    res.status(500).send({
      error: e
    });
  });
});

router.delete(USER_ENDPOINT + "/:id", (req, res) => {
  deleteUser({
    id: Number(req.params.id)
  }).then(user => {
    res.status(200).send({
      ...user
    });
  }).catch(e => {
    res.status(500).send({
      error: e
    });
  });
});


