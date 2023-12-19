import { Router } from "express";
import {
  createClient,
  deleteClient,
  getClients,
  updateClient,
  getClient,
} from "../controllers/clients.controller.js";

const router = Router();

router.get("/clients", getClients);
router.post("/clients", createClient);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);
router.get("/clients/:id", getClient);

export default router;
