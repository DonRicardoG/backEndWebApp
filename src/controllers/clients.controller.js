import { Clients } from "../models/Clients.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Clients.findAll();

    res.json(clients);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Clients.findByPk(id);

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  const { name, username, email, website } = req.body;

  try {
    const newClient = await Clients.create({
      name,
      username,
      email,
      website,
    });
    res.json(newClient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, website } = req.body;
    const client = await Clients.findByPk(id);

    client.name = name;
    client.email = email;
    client.website = website;

    await client.save();
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  const { id } = req.params;
  try {
    await Clients.destroy({
      where: {
        id: id,
      },
    });
    res.send(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
