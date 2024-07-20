import { z } from 'zod';

const createUserBodySchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const createUserWithProviderBodySchema = z.object({
  name: z.string(),
  email: z.string(),
  token: z.string(),
});

export type CreateUserBody = z.infer<typeof createUserBodySchema>;
export type CreateUserWithProviderBody = z.infer<typeof createUserWithProviderBodySchema>;

export class UserController {
  static create(createUserBody: CreateUserBody) {
    console.log('Adicionar usuário no banco de dados', createUserBody);
  }

  static createWithProvider(createUserBody: CreateUserWithProviderBody) {
    console.log('Adicionar usuário  com provedor no banco de dados', createUserBody);
  }

  static validateSignInWithProvider(body: unknown) {
    const { email, name, token } = createUserWithProviderBodySchema.parse(body);

    return { email, name, token, sessionStartedAt: new Date().toISOString() };
  }

  static validate(body: unknown) {
    const { email, name, password } = createUserBodySchema.parse(body);

    return { email, name, password, sessionStartedAt: new Date().toISOString() };
  }

  printClass() {
    console.log(this);
  }
}
