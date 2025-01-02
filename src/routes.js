import express from 'express';
import addLogoDataInNavBar from './endpoints/add-logo-data-in-navbar.js';
import createNavigationKey from './endpoints/create-navigation-key.js';
import customizeLogoInNavBar from './endpoints/customize-logo-in-navbar.js';

const routes = express.Router();
routes.post('/add-logo-data-in-navbar', async (req, res) => {
    try {
        const { format, url, id } = req.body;
        const response = await addLogoDataInNavBar({ format, url, id});
        res.status(201).json(response[0]);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al escribir datos', error: error.message });
    }
});
routes.post('/create-navigation-key', async (req, res) => {
    try {
        const { id } = req.body;
        const response = await createNavigationKey({id});
        res.status(201).json(response[0]);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al escribir datos', error: error.message });
    }
});
routes.post('/customize-logo-data-in-navbar', async (req, res) => {
    try {
        const { customize, id } = req.body;
        const response = await customizeLogoInNavBar({customize, id})
        res.status(201).json(response[0]);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al escribir datos', error: error.message });
    }
});

export default routes;