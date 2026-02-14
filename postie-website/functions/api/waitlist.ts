interface Env {
    DB: D1Database;
  }
  
  export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
      const { request, env } = context;
      const { email } = await request.json() as { email: string };
  
      // Basic email validation
      if (!email || !email.includes('@')) {
        return new Response(
          JSON.stringify({ error: 'Invalid email address' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      // Insert into database
      await env.DB.prepare(
        'INSERT INTO waitlist (email) VALUES (?)'
      ).bind(email.toLowerCase()).run();
  
      return new Response(
        JSON.stringify({ success: true, message: 'Added to waitlist!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
  
    } catch (error: any) {
      // Handle duplicate email
      if (error.message?.includes('UNIQUE constraint')) {
        return new Response(
          JSON.stringify({ error: 'Email already registered' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      // Generic error
      return new Response(
        JSON.stringify({ error: 'Failed to join waitlist' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  };