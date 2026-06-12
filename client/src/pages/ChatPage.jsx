import { useState, useCallback } from 'react';
import ChatShell from '../components/chat/ChatShell.jsx';


export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendMessage = useCallback(async (content) => {
    const trimmed = content.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      // Remove the optimistically-added user message on hard error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <ChatShell
      messages={messages}
      onSendMessage={handleSendMessage}
      isLoading={isLoading}
      error={error}
    />
  );
}
