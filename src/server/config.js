import dotenv from 'dotenv';
dotenv.load();

export const hot = process.env.HOT !== undefined;
export const port = process.env.PORT || 8000;

export * from '../shared/config';
