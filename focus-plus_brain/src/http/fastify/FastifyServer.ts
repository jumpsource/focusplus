import { CreateUserRoute } from '@/routes/users/create-user';
import { FastifyApplication } from './FastifyApp';
import { env } from './env';

FastifyApplication.register(CreateUserRoute);

export function startServer() {
  FastifyApplication.listen({
    host: '0.0.0.0',
    port: env.PORT,
  }).then(() => {
    console.log(`🚀 HTTP Server running at port ${env.PORT} 🚀`);
  });
}

startServer();
