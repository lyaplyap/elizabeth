import { nanoid } from 'nanoid';

const ID_SIZE = 16;

export const createId = (size: number = ID_SIZE) => nanoid(size);
