// src/app/profil/page.tsx

import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

export const metadata = { title: `Môj profil | ZoskaSnap` };

export default async function Profile() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/auth/signin');
  }

  // Get user from database to ensure we have the ID
  const user = await prisma.user.findUnique({
    where: { email: session.user.email! },
    select: { id: true }
  });

  if (!user) {
    redirect('/auth/signin');
  }

  // Redirect to the user's profile detail page
  redirect(`/profil/${user.id}`);
}
