import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { handle } = params;
    // Add your fetching logic here.

    return NextResponse.json({ message: `Fetching product with handle ${handle}` });
}