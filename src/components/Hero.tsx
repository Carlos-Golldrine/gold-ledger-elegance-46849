import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroLogo from '@/assets/hero-logo-new.svg'
import professionalImage from '@/assets/professional.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Card Container */}
        <div className="relative bg-card rounded-3xl border-2 border-luxury-gold/30 shadow-elegant overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-12 relative">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/20 border border-luxury-gold/40 rounded-full mb-6">
              <Shield className="h-4 w-4 text-luxury-gold mr-2" />
              <span className="text-sm font-medium text-luxury-gold">Há 15 anos no mercado</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-cardo">
              <span className="text-foreground">Soluções</span>
              <br />
              <span className="text-luxury-gold">Contábeis</span>
              <br />
              <span className="text-foreground">de Excelência</span>
            </h1>
            
            <p className="text-xl text-foreground mb-8 leading-relaxed font-medium">
              Oferecemos serviços contábeis premium com transparência, 
              confiabilidade e excelência para impulsionar o sucesso do seu negócio.
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="bg-luxury-gold/20 p-4 rounded-lg mb-3 inline-block">
                  <Shield className="h-6 w-6 text-luxury-gold" />
                </div>
                <p className="text-sm text-foreground font-semibold">Transparência</p>
              </div>
              <div className="text-center">
                <div className="bg-luxury-gold/20 p-4 rounded-lg mb-3 inline-block">
                  <TrendingUp className="h-6 w-6 text-luxury-gold" />
                </div>
                <p className="text-sm text-foreground font-semibold">Excelência</p>
              </div>
              <div className="text-center">
                <div className="bg-luxury-gold/20 p-4 rounded-lg mb-3 inline-block">
                  <Users className="h-6 w-6 text-luxury-gold" />
                </div>
                <p className="text-sm text-foreground font-semibold">Confiabilidade</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-luxury-silver hover:bg-luxury-silver-light text-foreground font-semibold shadow-silver"
                onClick={() => window.open('https://wa.me/5561993376506?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-luxury-silver hover:bg-luxury-silver/10"
                onClick={() => window.open('https://wa.me/5561993376506?text=Olá! Tenho interesse em conhecer melhor os serviços da Werneck Contabilidade.', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Professional Image with 3D Extrusion Effect */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 flex items-end justify-end">
            {/* Image Container */}
            <div className="relative w-full h-full flex items-end justify-end" 
                 style={{ 
                   perspective: '1000px',
                   transformStyle: 'preserve-3d'
                 }}>
              {/* Professional Image */}
              <div className="relative"
                   style={{
                     transform: 'translateZ(50px)',
                     transformStyle: 'preserve-3d'
                   }}>
                <img 
                  src={professionalImage} 
                  alt="Profissional Werneck Contabilidade"
                  className="w-full h-auto max-w-md lg:max-w-lg object-contain"
                  style={{
                    filter: 'drop-shadow(-10px 10px 20px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
              
              {/* 3D Shadow Layer */}
              <div className="absolute inset-0 -z-10"
                   style={{
                     transform: 'translateZ(-20px)',
                     background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 70%)',
                     filter: 'blur(20px)'
                   }}></div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero