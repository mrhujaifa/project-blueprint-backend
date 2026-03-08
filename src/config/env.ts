import dotenv from "dotenv";

dotenv.config();

// interface
interface EnvConfig {
  DATABASE_URL: string;
  NODE_ENV: string;
  PORT: string;
  FRONTEND_URL: string;
  PRIVY: {
    PRIVY_APP_ID: string;
    PRIVY_APP_SECRET: string;
  };
}

// Required Env Variable Function
const loadEnvVariables = (): EnvConfig => {
  const requiredEnvVariables = [
    "NODE_ENV",
    "PORT",
    "DATABASE_URL",
    "PRIVY_APP_ID",
    "PRIVY_APP_SECRET",
    "FRONTEND_URL",
  ];

  requiredEnvVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar} `);
    }
  });

  return {
    DATABASE_URL: process.env.DATABASE_URL as string,
    NODE_ENV: process.env.NODE_ENV as string,
    PORT: process.env.PORT as string,
    FRONTEND_URL: process.env.FRONTEND_URL as string,
    PRIVY: {
      PRIVY_APP_ID: process.env.PRIVY_APP_ID as string,
      PRIVY_APP_SECRET: process.env.PRIVY_APP_SECRET as string,
    },
  };
};

export const envVars = loadEnvVariables();
