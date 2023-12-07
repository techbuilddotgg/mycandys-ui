import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';


export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_BACKEND_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  },
  skipValidation: process.env.NODE_ENV === 'production',
});