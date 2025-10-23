import { Star, Quote, Building2 } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      company: "Distribuidora Santos & Cia",
      role: "CEO",
      content: "A Werneck Contabilidade transformou nossa gestão fiscal. O atendimento é excepcional e a equipe sempre está disponível para esclarecer dúvidas. Recomendo sem hesitar!",
      rating: 5,
      industry: "Distribuição"
    },
    {
      name: "João Oliveira",
      company: "Construtora Oliveira",
      role: "Diretor Financeiro",
      content: "Trabalho com a Werneck Contabilidade há 8 anos. A consultoria tributária deles nos economizou milhares de reais em impostos através do planejamento fiscal inteligente.",
      rating: 5,
      industry: "Construção"
    },
    {
      name: "Ana Costa",
      company: "Restaurante Sabor & Arte",
      role: "Proprietária",
      content: "Como empresária iniciante, encontrei na Werneck Contabilidade o suporte que precisava. Eles me guiaram em cada etapa, desde a abertura da empresa até o crescimento atual.",
      rating: 5,
      industry: "Alimentação"
    },
    {
      name: "Carlos Ferreira",
      company: "Tech Solutions Ltda",
      role: "Sócio-Fundador",
      content: "Profissionalismo e expertise técnica são os diferenciais da Werneck Contabilidade. Nossa empresa de tecnologia tem necessidades específicas que eles atendem perfeitamente.",
      rating: 5,
      industry: "Tecnologia"
    },
    {
      name: "Roberta Lima",
      company: "Clínica Vida Saudável",
      role: "Diretora",
      content: "A pontualidade na entrega das obrigações e a qualidade dos relatórios gerenciais nos ajudam a tomar decisões estratégicas importantes para nossa clínica.",
      rating: 5,
      industry: "Saúde"
    },
    {
      name: "Pedro Almeida",
      company: "Indústria Almeida",
      role: "Gerente Administrativo",
      content: "Migrar para a Werneck Contabilidade foi uma das melhores decisões que tomamos. A organização e transparência nos processos trouxeram muito mais segurança para nossa indústria.",
      rating: 5,
      industry: "Industrial"
    }
  ]

  const clientLogos = [
    "Santos & Cia", "Construtora Oliveira", "Sabor & Arte", 
    "Tech Solutions", "Vida Saudável", "Indústria Almeida",
    "Comercial Norte", "Farmácia Central", "Escola Futuro"
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full mb-6">
            <Star className="h-4 w-4 text-luxury-gold mr-2" />
            <span className="text-sm font-medium text-luxury-gold">Depoimentos</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">O que Nossos</span>
            <br />
            <span className="text-luxury-gold">Clientes Dizem</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-luxury p-8 group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="relative mb-6">
                <Quote className="h-12 w-12 text-luxury-gold/20 absolute -top-2 -left-2" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-luxury-gold fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">{testimonial.name}</h5>
                    <p className="text-sm text-luxury-gold font-medium">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 bg-luxury-gold/10 text-luxury-gold text-xs font-medium rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Empresas que <span className="text-luxury-gold">Confiam</span> em Nós
            </h3>
            <p className="text-muted-foreground">
              Alguns dos clientes que escolheram a Werneck Contabilidade como parceira contábil
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="card-luxury p-4 flex items-center justify-center h-20 group hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <Building2 className="h-6 w-6 text-luxury-gold mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-luxury-gold transition-colors">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 card-luxury p-8 bg-gradient-luxury text-center animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">98%</div>
              <p className="text-white font-medium">Taxa de Satisfação</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">500+</div>
              <p className="text-white font-medium">Clientes Ativos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">15+</div>
              <p className="text-white font-medium">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials