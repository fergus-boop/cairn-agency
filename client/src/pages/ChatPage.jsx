import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHeader from '../components/site/PageHeader.jsx';
import DemoChat from '../components/site/DemoChat.jsx';
import Reveal from '../components/site/Reveal.jsx';
import { EMAIL } from '../data/site.js';

export default function ChatPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHeader
          label="Assistant"
          title="Ask about Cairn"
          lede="Questions about what Cairn builds, how a job runs or how to get started. For anything specific to your business, Ferg replies to every email in person."
        />
        <section className="wrap pb-24">
          <Reveal className="max-w-3xl">
            <DemoChat
              context="cairn"
              tone="paper"
              tall
              badge="AI assistant"
              title="Cairn assistant"
              note="Answers from the same information as this site"
              opening="Hi, I'm Cairn's assistant. Ask me what Cairn builds, how a job runs or how to get in touch."
              prompts={['What do you build?', 'How does the free look work?', 'How much does a website cost?', 'Do you work outside Scotland?']}
            />
            <p className="mt-5 text-sm text-ink-muted">
              Messages are answered by an AI model and aren't sent to Ferg. To reach him, email{' '}
              <a className="link font-medium" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              .
            </p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
