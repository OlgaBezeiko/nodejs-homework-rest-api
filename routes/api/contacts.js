const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getById);

router.delete("/:contactId", ctrl.removeContact);

router.post(
  "/",
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

module.exports = router;