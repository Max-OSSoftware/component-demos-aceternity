import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10 dark:from-background dark:to-accent/5">
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-12">
          <Image 
            src="https://storage.googleapis.com/dinan/assets/maxwell.png"
            height={200}
            width={300}
            alt="Max Logo"
            className="mt-0"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          Aceternity Components Built for Demonstration
        </h1>

        <ul className="text-xl list-disc list-inside max-w-md mx-auto text-left space-y-4 text-muted-foreground">
          <li>Open Source Library</li>
          <li>Typewriter Effects</li>
          <li>Parallax Scrolls</li>
          <li>Multiple Demo Layouts</li>
          <li>Animated Components</li>
          <li>Bento Grids</li>
        </ul>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 text-lg font-semibold text-accent-foreground bg-accent rounded-md hover:bg-accent/90 transition-colors duration-200"
          >
            Explore Demos
          </a>
        </div>
      </main>
    </div>
  )
}