import { UserController } from '@/controllers/UserController';
import type { FastifyInstance } from 'fastify';

export async function CreateUserRoute(app: FastifyInstance) {
  app.post('/users/sign-up', async (request, reply) => {
    const createUserBody = UserController.validate(request.body);
    UserController.create(createUserBody);
    reply.status(201).send({
      message: 'User created',
    });
  });

  app.post('/users/sign-up/:provider', async (request, reply) => {
    console.log(request);
    const createUserBodyWithProvider = UserController.validateSignInWithProvider(request.body);
    UserController.createWithProvider(createUserBodyWithProvider);
    console.log(request?.params?.provider as string);
    reply.status(201).send({
      message: 'User created',
    });
  });
}
