import { db } from './firebase';

export const onceGetTopics = () =>
  db.ref('groups').once('value');