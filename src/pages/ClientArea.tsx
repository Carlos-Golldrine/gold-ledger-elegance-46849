import { ExternalLink, Lock, FileText, Calendar, TrendingUp, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ClientArea = () => {
  // Link para a plataforma externa (substitua pela URL real)
  const externalPlatformUrl = "https://exemplo.com/plataforma"

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentos Fiscais",
      description: "Acesse todas as suas notas fiscais e documentos contábeis"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Agenda de Obrigações",
      description: "Fique por dentro de todos os prazos e obrigações fiscais"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Relatórios Gerenciais",
      description: "Visualize relatórios completos sobre a saúde financeira da sua empresa"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Suporte Direto",
      description: "Tire suas dúvidas diretamente com nossa equipe especializada"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full mb-6">
              <Lock className="h-4 w-4 text-luxury-gold mr-2" />
              <span className="text-sm font-medium text-luxury-gold">Área Exclusiva</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-cardo">
              <span className="text-foreground">Área do</span>
              <span className="text-luxury-gold"> Cliente</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Bem-vindo à sua área exclusiva. Aqui você tem acesso completo a todos os seus documentos, 
              relatórios e pode gerenciar suas informações contábeis com total segurança.
            </p>

            {/* CTA Principal */}
            <div className="card-luxury p-8 max-w-2xl mx-auto mb-16">
              <div className="bg-gradient-primary p-4 rounded-xl w-fit mx-auto mb-6 shadow-gold">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-foreground font-cardo">
                Acesse Nossa Plataforma
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Clique no botão abaixo para acessar nossa plataforma completa de gestão contábil. 
                Você será redirecionado para o ambiente seguro onde poderá gerenciar todos os seus serviços.
              </p>
              
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-semibold shadow-gold"
                onClick={() => window.open(externalPlatformUrl, '_blank')}
              >
                <Lock className="mr-2 h-5 w-5" />
                Acessar Plataforma
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                🔒 Conexão segura e criptografada
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 font-cardo">
              <span className="text-foreground">O que você pode</span>
              <span className="text-luxury-gold"> fazer na plataforma</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="card-luxury p-6 text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 shadow-gold group-hover:shadow-luxury transition-all duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="card-luxury p-8 text-center bg-card border-2 border-luxury-gold/30 animate-fade-in">
            <MessageSquare className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground font-cardo">
              Precisa de Ajuda?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudá-lo com qualquer dúvida sobre 
              o acesso à plataforma ou seus serviços contábeis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="border-luxury-gold/40 hover:bg-luxury-gold/10"
                onClick={() => window.location.href = '#contact'}
              >
                Entre em Contato
              </Button>
              <Button 
                className="bg-luxury-silver hover:bg-luxury-silver-light text-foreground font-semibold shadow-silver"
                onClick={() => window.open('https://wa.me/5561993376506?text=Olá! Preciso de ajuda com o acesso à plataforma.', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ClientArea