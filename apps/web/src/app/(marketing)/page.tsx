import { Highlight } from '@/components/ui/highlight';
import { Heading } from '@/components/ui/text';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-16">
          <span className="text-6xl">👋</span>
          <Heading>
            Good morning, <Highlight>builders</Highlight>.
          </Heading>
          <a href="https://gm.dev">gm.dev</a>
        </div>
      </main>
    </>
  );
}
