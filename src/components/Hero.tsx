import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroImage from '@/assets/accounting-office-hero.jpg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 opacity-30"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm border border-luxury-gold/20 rounded-full mb-6">
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
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Oferecemos serviços contábeis premium com transparência, 
              confiabilidade e excelência para impulsionar o sucesso do seu negócio.
            </p>

            {/* Value Propositions */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="bg-luxury-gold/20 backdrop-blur-sm p-4 rounded-lg mb-3 inline-block">
                  <Shield className="h-6 w-6 text-luxury-gold" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Transparência</p>
              </div>
              <div className="text-center">
                <div className="bg-luxury-gold/20 backdrop-blur-sm p-4 rounded-lg mb-3 inline-block">
                  <TrendingUp className="h-6 w-6 text-luxury-gold" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Excelência</p>
              </div>
              <div className="text-center">
                <div className="bg-luxury-gold/20 backdrop-blur-sm p-4 rounded-lg mb-3 inline-block">
                  <Users className="h-6 w-6 text-luxury-gold" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Confiabilidade</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-luxury-silver hover:bg-luxury-silver-light text-foreground font-semibold shadow-silver"
                onClick={() => window.open('https://wa.me/5561933765060?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis.', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-luxury-silver hover:bg-luxury-silver/10"
                onClick={() => window.open('https://wa.me/5561933765060?text=Olá! Tenho interesse em conhecer melhor os serviços da Werneck Contabilidade.', '_blank')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Escritório moderno de contabilidade Werneck"
                  className="w-full h-full object-cover opacity-20 dark:opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
              </div>

              {/* Main Card */}
              <div className="relative card-luxury p-8 bg-card/95 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-luxury-gold font-cardo">Nossos Serviços</h3>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    'Contabilidade Empresarial',
                    'Consultoria Tributária',
                    'Abertura de Empresas',
                    'Planejamento Financeiro'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="font-medium text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-elegant border border-luxury-gold/20">
                <p className="text-sm font-medium text-luxury-gold">Anos de Experiência</p>
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