import * as contacts from "../models/contacts";
import { HttpError, ctrlWrapper } from "../helpers";

export const listContacts = ctrlWrapper(async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
});

export const addContact = ctrlWrapper(async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
});

export const getById = ctrlWrapper(async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
});

export const updateContact = ctrlWrapper(async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(result);
});

export const removeContact = ctrlWrapper(async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Delete success",
  });
});