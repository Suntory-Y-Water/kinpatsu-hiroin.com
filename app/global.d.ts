import type {} from 'hono';

declare module 'hono' {
  interface Env {
    CLOUDFLARE_ACCOUNT_ID: string;
    CLOUDFLARE_DATABASE_ID: string;
    CLOUDFLARE_D1_TOKEN: string;
    R2_ACCESS_KEY: string;
    R2_SECRET_ACCESS_KEY: string;
    R2_ENDPOINT: string;
    BUCKET_NAME: string;
    ANNICT_CLIENT_ID: string;
  }
}
