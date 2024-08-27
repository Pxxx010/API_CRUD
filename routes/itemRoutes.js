const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Criar um item (POST)
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    try {
        const newItem = new Item({ name, description });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ler todos os itens (GET)
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ler um item por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item não encontrado' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar um item (PUT)
router.put('/:id', async (req, res) => {
    const { name, description } = req.body;
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item não encontrado' });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Deletar um item (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item não encontrado' });
        res.status(200).json({ message: 'Item deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
