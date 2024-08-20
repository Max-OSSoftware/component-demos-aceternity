'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { MenuIcon, SearchIcon } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const components: { title: string; href: string }[] = [
  { title: 'Wobble Card', href: '/wobble-card' },
  { title: 'Typewriter Effect', href: '/typewriter-effect' },
  { title: 'Sticky Scroll', href: '/sticky-scroll-reveal' },
  { title: 'Wavy Background', href: '/wavy-background' },
  { title: 'Hero Parallax', href: '/hero-parallax' },
  { title: 'Bento Grid', href: '/bento-grid' },
  { title: 'Moving Cards', href: '/moving-cards' },
  { title: 'Typewriter Effect Two', href: '/typewriter-effect-two' },
  { title: 'Text Generate Effect', href: '/text-generate-effect' }, 
  { title: 'Spotlight', href: '/spotlight' },
  { title: 'Sparkles', href: '/sparkles' },
  { title: 'Sidebar', href: '/sidebar' },
  { title: 'Shooting Star', href: '/shootingstar' },
  { title: 'Scroll Animate', href: '/scroll-animate' },
  { title: 'Parallax Scroll 2', href: '/parallax-scroll-2' },
  { title: 'Parallax Scroll', href: '/parallax-scroll' },
  { title: 'Meteors', href: '/meteors' },
  { title: 'Macbook Scroll', href: '/macbook-scroll' },
  { title: 'Layout Grid 2', href: '/layout-grid-2' },
  { title: 'Layout Grid', href: '/layout-grid' },
  { title: 'Focus Card', href: '/focus-card' },
  { title: 'Features Demo 1', href: '/features-demo-1' },
  { title: 'Features Demo 2', href: '/features-demo-2' },
  { title: 'Features Demo 3', href: '/features-demo-3' },
  { title: 'Expandable Card', href: '/expandable-card-demo' },
  { title: 'Expandable Card 2', href: '/expandable-card-demo-2' },
  { title: 'Card Demo 1', href: '/card-demo-1' },
  { title: 'Card Demo 2', href: '/card-demo-2' },
  { title: 'Card Demo 3', href: '/card-demo-3' },
  { title: 'Apple Demo', href: '/apple-demo' },
  { title: 'Bento Grid 2', href: '/bento-grid-2' },
  { title: 'Vortex', href: '/vortex' },
  { title: 'Background Beams', href: '/background-beams' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [desktopOpen, setDesktopOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const pathname = usePathname()

  const filteredComponents = components.filter((component) =>
    component.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleLinkClick = () => {
    setMobileOpen(false)
    setDesktopOpen(false)
  }

  return (
    <div className="flex h-16 items-center px-4 border-b">
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
          
            <div className="relative">
              <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
              <div className="flex flex-col gap-2">
                {filteredComponents.map((component) => (
                  <Link
                    key={component.href}
                    href={component.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      pathname === component.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    {component.title}
                  </Link>
                ))}
              </div>
            </ScrollArea>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:flex">
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          {components.slice(0, 5).map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                pathname === component.href && "text-primary"
              )}
            >
              {component.title}
            </Link>
          ))}
          <Sheet open={desktopOpen} onOpenChange={setDesktopOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="font-medium">
                More
              </Button>
            </SheetTrigger>
            <ThemeToggle />
            <SheetContent side="top" className="w-full">
              <nav className="grid grid-cols-3 gap-4 py-4">
                {components.slice(5).map((component) => (
                  <Link
                    key={component.href}
                    href={component.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      pathname === component.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    {component.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  )
}