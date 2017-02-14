import { Router } from 'express';
import * as controller from "./notes.controller";

var router = Router();

router.get('/',controller.getNotes);

router.post('/',controller.createNote);

router.put('/:id',controller.updateNote);

router.delete('/:id',controller.deleteNote);

export default router;
