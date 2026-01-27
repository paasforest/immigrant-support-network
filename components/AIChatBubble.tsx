'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Loader2 } from 'lucide-react';

export default function AIChatBubble() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.response || 'No response received');
      } else {
        setResponse(`Error: ${data.error || 'Failed to get response'}`);
      }
    } catch (error) {
      setResponse('Error: Unable to connect to AI service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Ask Our AI Immigration Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Ask me anything about visas, immigration requirements, or relocation tips..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[120px] resize-none"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !question.trim()} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Ask Question
              </>
            )}
          </Button>
        </form>

        {response && (
          <div className="p-4 bg-slate-50 rounded-lg border">
            <p className="text-sm font-semibold text-slate-700 mb-2">AI Response:</p>
            <p className="text-sm text-slate-900 whitespace-pre-wrap leading-relaxed">{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
