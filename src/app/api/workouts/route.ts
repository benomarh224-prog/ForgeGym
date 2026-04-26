import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { exercises } from '@/lib/data';

export async function GET() {
  try {
    // For now, return static data. In production, this would come from the database.
    return NextResponse.json({
      success: true,
      exercises,
      total: exercises.length,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
