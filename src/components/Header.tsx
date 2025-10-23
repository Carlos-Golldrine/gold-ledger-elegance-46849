import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import logo from '@/assets/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Clientes', href: '#testimonials' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Werneck Contabilidade Logo" 
              className="h-16 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground font-cardo">Werneck</h1>
              <p className="text-sm text-muted-foreground">Contabilidade</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-luxury-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="elegant"
              onClick={() => window.open('https://wa.me/5561933765060?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.', '_blank')}
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-luxury-gold hover:bg-accent rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="luxury"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5561933765060?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.', '_blank')}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header