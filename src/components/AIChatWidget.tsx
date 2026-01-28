import { useState, useRef, useEffect } from 'react'
import { sendChatMessage, extractLeadData, saveConversation } from '../lib/openai'
import type { ChatMessage, ChatConversation } from '../lib/openai'

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversationId] = useState(() => `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content:
            "Welcome to Immigrant Support Network! 👋\n\nI'm here to help with your visa and immigration questions.\n\nWhat brings you here today? Which country are you interested in?",
          timestamp: Date.now(),
        },
      ])
    }
  }, [isOpen, messages.length])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      // Send to OpenAI
      const assistantResponse = await sendChatMessage([...messages, userMessage])

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: assistantResponse,
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, assistantMessage])

      // Extract and save lead data
      const leadData = extractLeadData([...messages, userMessage, assistantMessage])
      const conversation: ChatConversation = {
        id: conversationId,
        messages: [...messages, userMessage, assistantMessage],
        leadData,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }

      // Save conversation (will be stored in Supabase when integrated)
      await saveConversation(conversation)
    } catch (error) {
      console.error('Error sending message:', error)

      // Fallback response if OpenAI fails
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I apologize, I'm having trouble connecting right now. Please try:\n\n📱 WhatsApp: +27 67 951 8124\n📧 Email: info@immigrantsupportnetwork.co.za\n\nOr visit our Contact page to book via WhatsApp.",
          timestamp: Date.now(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button (Bottom Right, above WhatsApp) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="Open AI Chat"
        >
          <div className="relative">
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>

            {/* Chat Icon */}
            <svg
              className="w-6 h-6 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Ask AI Assistant 🤖
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* AI Avatar */}
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-bold">Immigration AI Assistant</h3>
                <p className="text-xs text-blue-100">Powered by GPT-4 • Online 24/7</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold"
              >
                Send
              </button>
            </div>

            {/* Quick Actions */}
            <div className="mt-3 flex gap-2 text-xs">
              <a
                href="https://wa.me/27679518124"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                📱 WhatsApp Us
              </a>
              <span className="text-gray-300">|</span>
              <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                📅 Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

