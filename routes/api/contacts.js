import express from 'express';

import ctrl from '../../controllers/contacts';
import { validateBody } from '../../middlewares/validateBody';
import { addSchema } from '../../schemas/contacts';

const router = express.Router();

router.get('/', ctrl.listContacts);

router.get('/:contactId', ctrl.getById);

router.delete('/:contactId', ctrl.removeContact);

router.post('/', validateBody(addSchema), ctrl.addContact);

router.put('/:contactId', validateBody(addSchema), ctrl.updateContact);

export default router;