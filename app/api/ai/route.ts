import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const response = `Thank you for your question: "${question}".

This is a demo response. To enable full AI functionality, please connect this endpoint to your ImmigrationAI API backend.

For now, here's general guidance:
- Visa requirements vary by country and visa category
- Processing times typically range from 4-12 weeks
- Ensure all documents are certified and translated
- Consider consulting an immigration expert for complex cases

For specific answers to your question, please contact our team through the contact form or connect the AI backend service.`;

    return NextResponse.json({ response });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
