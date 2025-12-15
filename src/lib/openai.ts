import { SYSTEM_PROMPT } from './aiKnowledgeBase'

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
  timestamp?: number
}

export interface ChatConversation {
  id: string
  messages: ChatMessage[]
  leadData?: {
    country?: string
    visaType?: string
    hasRefusal?: boolean
    urgency?: string
    location?: string
  }
  createdAt: number
  updatedAt: number
}

/**
 * OpenAI Chat Integration for Immigrant Support Network
 * 
 * This handles all communication with OpenAI's GPT-4 API
 * to power the intelligent immigration assistant.
 */

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || ''
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

// Use GPT-4 Turbo for best intelligence
const MODEL = 'gpt-4-turbo-preview'

// Alternative: GPT-3.5 Turbo (cheaper, still good)
// const MODEL = 'gpt-3.5-turbo'

/**
 * Send message to OpenAI and get AI response
 */
export async function sendChatMessage(
  messages: ChatMessage[],
  temperature: number = 0.7
): Promise<string> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured')
  }

  // Prepare messages for OpenAI
  const openaiMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
  ]

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: openaiMessages,
        temperature,
        max_tokens: 500, // Keep responses concise
        top_p: 1,
        frequency_penalty: 0.3, // Reduce repetition
        presence_penalty: 0.3, // Encourage topic diversity
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(`OpenAI API error: ${error.error?.message || 'Unknown error'}`)
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content || ''

    return assistantMessage
  } catch (error) {
    console.error('Error calling OpenAI:', error)
    throw error
  }
}

/**
 * Extract lead information from conversation
 * Uses AI to identify key qualification data
 */
export function extractLeadData(messages: ChatMessage[]): ChatConversation['leadData'] {
  const conversationText = messages
    .filter((m) => m.role === 'user')
    .map((m) => m.content)
    .join(' ')
    .toLowerCase()

  const leadData: ChatConversation['leadData'] = {}

  // Extract country
  const countries = [
    'uk',
    'united kingdom',
    'usa',
    'united states',
    'america',
    'canada',
    'australia',
    'schengen',
    'germany',
    'france',
    'dubai',
    'uae',
    'netherlands',
    'spain',
    'italy',
  ]
  for (const country of countries) {
    if (conversationText.includes(country)) {
      leadData.country = country
      break
    }
  }

  // Extract visa type
  const visaTypes = [
    { keywords: ['work', 'skilled', 'employment', 'job'], type: 'Work Visa' },
    { keywords: ['study', 'student', 'university', 'college'], type: 'Study Visa' },
    { keywords: ['tourist', 'visit', 'tourism', 'travel'], type: 'Tourist Visa' },
    { keywords: ['family', 'spouse', 'partner', 'reunion'], type: 'Family Visa' },
  ]
  for (const vt of visaTypes) {
    if (vt.keywords.some((kw) => conversationText.includes(kw))) {
      leadData.visaType = vt.type
      break
    }
  }

  // Check for refusal
  if (
    conversationText.includes('refus') ||
    conversationText.includes('reject') ||
    conversationText.includes('denied')
  ) {
    leadData.hasRefusal = true
  }

  // Check urgency
  if (
    conversationText.includes('urgent') ||
    conversationText.includes('asap') ||
    conversationText.includes('quickly')
  ) {
    leadData.urgency = 'High'
  }

  return leadData
}

/**
 * Generate conversation summary for admin review
 */
export function generateConversationSummary(conversation: ChatConversation): string {
  const { leadData, messages } = conversation
  const userMessages = messages.filter((m) => m.role === 'user').length

  let summary = `💬 ${userMessages} messages\n`

  if (leadData?.country) summary += `🌍 Country: ${leadData.country}\n`
  if (leadData?.visaType) summary += `📋 Type: ${leadData.visaType}\n`
  if (leadData?.hasRefusal) summary += `⚠️ Has refusal\n`
  if (leadData?.urgency) summary += `⏰ Urgency: ${leadData.urgency}\n`

  return summary
}

/**
 * Save conversation to Supabase (for later review and improvement)
 */
export async function saveConversation(conversation: ChatConversation): Promise<void> {
  // This would integrate with your Supabase database
  // For now, we'll just log it
  console.log('Conversation saved:', {
    id: conversation.id,
    leadData: conversation.leadData,
    messageCount: conversation.messages.length,
  })

  // TODO: Integrate with Supabase when ready
  // const { error } = await supabase
  //   .from('ai_conversations')
  //   .insert({
  //     id: conversation.id,
  //     messages: conversation.messages,
  //     lead_data: conversation.leadData,
  //     created_at: new Date(conversation.createdAt).toISOString(),
  //   })
}

