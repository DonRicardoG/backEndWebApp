import { Clients } from "../models/Clients.js";
import axios from "axios";

export const fillDb = async () => {
  try {
    if (await Clients.findOne()) {
      return;
    }

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const clients = response.data;

    const clientsInstancy = clients.map((client) => ({
      name: client.name,
      email: client.email,
      username: client.username,
      website: client.website,
    }));

    await Clients.bulkCreate(clientsInstancy);
    return;
  } catch (error) {
    return console.error("Error al guardar los datos en la base", error);
  }
};
