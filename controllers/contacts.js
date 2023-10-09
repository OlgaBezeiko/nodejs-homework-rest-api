const contacts = require('../models/contacts');
const { HttpError, ctrlWrapper } = require('../helpers');

const listContacts = ctrlWrapper(async (req, res) => {
	const result = await contacts.listContacts();
	res.json(result);
});

const addContact = ctrlWrapper(async (req, res) => {
	const result = await contacts.addContact(req.body);
	res.status(201).json(result);
});

const getById = ctrlWrapper(async (req, res) => {
	const { contactId } = req.params;
	const result = await contacts.getContactById(contactId);
	if (!result) {
		throw HttpError(404, 'Not found');
	}
	res.json(result);
});

const updateContact = ctrlWrapper(async (req, res) => {
	const { contactId } = req.params;
	const result = await contacts.updateContact(contactId, req.body);
	if (!result) {
		throw HttpError(404, 'Not found');
	}
	res.status(201).json(result);
});

const removeContact = ctrlWrapper(async (req, res) => {
	const { contactId } = req.params;
	const result = await contacts.removeContact(contactId);
	if (!result) {
		throw HttpError(404, 'Not found');
	}

	res.json({
		message: 'Delete success',
	});
});

module.exports = {
	listContacts,
	addContact,
	getById,
	updateContact,
	removeContact,
};
