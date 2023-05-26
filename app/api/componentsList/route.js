import { NextResponse } from 'next/server';

import data from '@/data/components.json';

export async function GET(req) {
  return NextResponse.json(data);
}
