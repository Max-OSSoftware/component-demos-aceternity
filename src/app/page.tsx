
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
      
        
        <div className="flex flex-col items-center mb-12">
          <Image 
            src="https://storage.googleapis.com/dinan/assets/maxwell.png"
            height={200}
            width={300}
            alt="Component Library Logo"
            className="mt-10"
          />
        </div>

        <p className="text-xl text-center mb-8 text-gray-700 dark:text-gray-300">
          Explore some of our favorite Aceternity components for demonstration:
        </p>

        <ul className="list-disc list-inside max-w-md mx-auto text-left space-y-2 text-gray-600 dark:text-gray-400">
          <li>Responsive Button</li>
          <li>Dynamic Form Input</li>
          <li>Animated Card</li>
          <li>Customizable Navbar</li>
          <li>Interactive Modal</li>
        </ul>
      </main>
    </div>
  )
}