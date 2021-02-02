import { User, Prisma } from '@prisma/client';
import { prisma } from '../../app';

export const getAllUser = () => {
  return new Promise<(User & { role: { role: string }[] })[]>((resolve, reject) => {
    try {
      const users = prisma.user.findMany({
        include: {
          role: {
            select: {
              role: true
            }
          }
        }
      });
      users && resolve(users);
    } catch (e) {
      reject(e);
    }
  })
}

export const createUser = ({ email, roles }: { email: string, roles: { role: string }[] }) => {
  return new Promise<Prisma.Prisma__UserClient<User>>((resolve, reject) => {
    try {
      const user = prisma.user.create({
        include: { role: true },
        data: {
          email: email,
          role: {
            create: roles
          }
        }
      });
      user && resolve(user);
    } catch (e) {
      reject(e);
    }
  })
}

export const updateUser = ({ id, email, roles }: (User & { roles: { role: string }[] })) => {
  return new Promise<Prisma.Prisma__UserClient<User>>((resolve, reject) => {
    try {
      const user = prisma.user.update({
        include: { role: true },
        where: {
          id: id
        },
        data: {
          email: email,
          role: {
            set: [],
            create: roles
          }
        }
      });
      user && resolve(user);
    } catch (e) {
      reject(e);
    }
  })
}

export const deleteUser = ({ id }: { id: number }) => {
  return new Promise<Prisma.Prisma__UserClient<User>>((resolve, reject) => {
    try {
      const user = prisma.user.delete({
        where: {
          id: id
        }
      });
      if (user) {
        resolve(user);
      }
    } catch (e) {
      reject(e);
    }
  })
}