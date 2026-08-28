'use server';

import prisma from '@/lib/db';
import { hash, compare } from 'bcryptjs';
import { login as setAuthSession, logout as clearAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const passwordHash = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      name,
      role: 'customer',
    },
  });

  await setAuthSession({ id: user.id, email: user.email, name: user.name, role: user.role });
  
  revalidatePath('/');
  redirect('/');
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.passwordHash) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await compare(password, user.passwordHash);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  await setAuthSession({ id: user.id, email: user.email, name: user.name, role: user.role });

  revalidatePath('/');
  redirect('/');
}

export async function logout() {
  await clearAuthSession();
  revalidatePath('/');
  redirect('/');
}
