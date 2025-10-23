import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '@/assets/logo.svg'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'Sobre', href: '#about', path: '/' },
    { name: 'Serviços', href: '#services', path: '/' },
    { name: 'Clientes', href: '#testimonials', path: '/' },
    { name: 'Contato', href: '#contact', path: '/' }
  ]

  const handleNavClick = (item: typeof navItems[0]) => {
    if (location.pathname !== item.path) {
      navigate(item.path)
      setTimeout(() => {
        const element = document.querySelector(item.href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.querySelector(item.href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

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
              <h1 className="text-xl font-bold text-foreground font-cardo">Werneck Contabilidade</h1>
              <p className="text-xs text-muted-foreground">Excelência Contábil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-luxury-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => navigate('/area-cliente')}
              className="text-luxury-gold hover:text-luxury-gold-dark transition-colors duration-300 font-semibold"
            >
              Área do Cliente
            </button>
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
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:text-luxury-gold hover:bg-accent rounded-lg transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate('/area-cliente')
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-3 text-luxury-gold hover:text-luxury-gold-dark hover:bg-accent rounded-lg transition-all duration-300 font-semibold"
              >
                Área do Cliente
              </button>
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