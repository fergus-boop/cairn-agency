import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowUp } from 'lucide-react';

// One self-contained chat card against POST /api/chat.
// tone="ink" sits on the dark demo band; tone="paper" is the light version used on /chat.
export default function DemoChat({ context, title, note, opening, prompts = [], tone = 'ink', tall = false, badge = 'Demo' }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const scroller = useRef(null);
  const dark = tone === 'ink';

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const send = async (text) => {
    const msg = text.trim();
    if (!msg || loading) return;
    const history = [...messages, { role: 'user', content: msg }];
    setMessages(history);
    setInput('');
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, messages: history, businessContext: context }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) {
        setError(
          res.status === 429
            ? 'Too many messages just now. Give it a minute and try again.'
            : "The assistant couldn't answer just now. Try again in a moment."
        );
        return;
      }
      setMessages([...history, { role: 'assistant', content: data.reply }]);
    } catch {
      setError("The assistant couldn't be reached. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const shell = dark ? 'border-paper/10 bg-[#24201c] text-paper' : 'border-line bg-paper-bright text-ink';
  const sub = dark ? 'text-paper/60' : 'text-ink-muted';
  const botBubble = dark ? 'bg-paper/[0.07] text-paper/90' : 'bg-stone/70 text-ink';
  const chip = dark
    ? 'border-paper/15 text-paper/85 hover:border-gold hover:text-paper'
    : 'border-ink/15 text-ink-soft hover:border-ink hover:text-ink';

  return (
    <section className={`flex min-w-0 flex-col overflow-hidden rounded-3xl border ${shell}`} aria-label={title}>
      <header className={`flex items-start justify-between gap-4 border-b px-5 py-4 sm:px-6 ${dark ? 'border-paper/10' : 'border-line'}`}>
        <div>
          <h3 className="font-display text-[1.02rem] font-medium">{title}</h3>
          {note && <p className={`mt-0.5 text-sm ${sub}`}>{note}</p>}
        </div>
        {badge && (
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${dark ? 'bg-gold/15 text-gold' : 'bg-gold-pale text-gold-deep'}`}>
            {badge}
          </span>
        )}
      </header>

      <div
        ref={scroller}
        className={`chat-md flex flex-col gap-3 overflow-y-auto px-5 py-5 sm:px-6 ${tall ? 'h-[26rem] sm:h-[30rem]' : 'h-[21rem]'}`}
        role="log"
        aria-live="polite"
        tabIndex={0}
      >
        <div className={`max-w-[88%] rounded-2xl rounded-tl-md px-4 py-3 text-[0.95rem] leading-relaxed ${botBubble}`}>{opening}</div>
        {messages.map((m, i) =>
          m.role === 'user' ? (
            <div key={i} className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-gold px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
              {m.content}
            </div>
          ) : (
            <div key={i} className={`max-w-[88%] rounded-2xl rounded-tl-md px-4 py-3 text-[0.95rem] leading-relaxed ${botBubble}`}>
              <ReactMarkdown>{m.content}</ReactMarkdown>
            </div>
          )
        )}
        {loading && (
          <div className={`flex w-16 items-center justify-center gap-1 rounded-2xl rounded-tl-md px-4 py-4 ${botBubble}`} aria-label="Typing">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-1.5 w-1.5 animate-dotBounce rounded-full bg-current" style={{ animationDelay: `${d * 0.16}s` }} />
            ))}
          </div>
        )}
        {error && <p className={`text-sm ${dark ? 'text-gold' : 'text-gold-deep'}`} role="alert">{error}</p>}
      </div>

      <div className={`border-t px-5 pb-5 pt-4 sm:px-6 ${dark ? 'border-paper/10' : 'border-line'}`}>
        {messages.length === 0 && prompts.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {prompts.map((p) => (
              <button key={p} type="button" onClick={() => send(p)} className={`max-w-full rounded-full border px-3.5 py-1.5 text-left text-sm transition-colors ${chip}`}>
                {p}
              </button>
            ))}
          </div>
        )}
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <label htmlFor={`chat-${context}`} className="sr-only">
            Message the {title.toLowerCase()}
          </label>
          <input
            id={`chat-${context}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={1000}
            autoComplete="off"
            placeholder="Ask a question"
            className={`h-12 min-w-0 flex-1 rounded-full border px-4 text-[0.975rem] outline-none transition-colors ${
              dark
                ? 'border-paper/15 bg-transparent text-paper placeholder:text-paper/45 focus:border-gold'
                : 'border-ink/20 bg-paper text-ink placeholder:text-ink-muted focus:border-ink'
            }`}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors disabled:opacity-40 ${
              dark ? 'bg-gold text-ink hover:bg-gold-pale' : 'bg-ink text-paper hover:bg-ink-soft'
            }`}
          >
            <ArrowUp size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
