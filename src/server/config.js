import dotenv from 'dotenv';
dotenv.load();

export const google = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  secret: process.env.GOOGLE_SECRET
};

export const hot = process.env.HOT !== undefined;
export const port = process.env.PORT || 8000;

export * from '../shared/config';
