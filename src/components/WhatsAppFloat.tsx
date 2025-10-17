import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5561933765060?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.', '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-card border border-border rounded-lg px-3 py-2 shadow-elegant opacity-0 hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        <span className="text-sm font-medium text-foreground">Fale conosco no WhatsApp</span>
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border"></div>
      </div>
    </div>
  )
}

export default WhatsAppFloat