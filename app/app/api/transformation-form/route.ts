
import { NextResponse } from 'next/server';

// This API route is no longer used - form submissions go directly to Web3Forms
export async function POST() {
  return NextResponse.json({ 
    message: 'This endpoint is deprecated. Form submissions handled client-side.' 
  }, { status: 410 });
}
