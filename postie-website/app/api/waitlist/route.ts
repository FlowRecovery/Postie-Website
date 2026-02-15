import { NextRequest } from 'next/server';

interface Env {
  DB: D1Database;
}

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json() as { email: string };

    // Basic email validation
    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // @ts-ignore - DB is injected by Cloudflare
    const db = process.env.DB as unknown as D1Database;
    
    if (!db) {
      return Response.json(
        { error: 'Database not available' },
        { status: 500 }
      );
    }

    // Insert into database
    await db.prepare(
      'INSERT INTO waitlist (email) VALUES (?)'
    ).bind(email.toLowerCase()).run();

    return Response.json(
      { success: true, message: 'Added to waitlist!' },
      { status: 200 }
    );

  } catch (error: any) {
    // Handle duplicate email
    if (error.message?.includes('UNIQUE constraint')) {
      return Response.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    return Response.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
