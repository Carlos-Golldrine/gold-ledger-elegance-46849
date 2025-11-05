import { 
  Building2, 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield,
  PieChart,
  Briefcase
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import serviceEmpresarial from '@/assets/service-empresarial.jpg'
import serviceTributaria from '@/assets/service-tributaria.jpg'
import serviceAbertura from '@/assets/service-abertura.jpg'
import serviceFolha from '@/assets/service-folha.jpg'
import serviceImposto from '@/assets/service-imposto.jpg'
import servicePlanejamento from '@/assets/service-planejamento.jpg'

const Services = () => {
  const services = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Contabilidade",
      description: "Gestão contábil completa para empresas de todos os portes, incluindo escrituração fiscal e demonstrações financeiras.",
      benefits: ["Relatórios gerenciais", "Controle fiscal", "Demonstrações contábeis", "Compliance regulatório"],
      image: serviceEmpresarial
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Departamento fiscal",
      description: "Otimização da carga tributária e orientação estratégica para redução legal de impostos.",
      benefits: ["Planejamento tributário", "Elisão fiscal", "Análise de enquadramento", "Consultoria especializada"],
      image: serviceTributaria
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Abertura de empresa",
      description: "Abertura de empresas, alterações contratuais e regularização de situações fiscais pendentes.",
      benefits: ["Processo ágil", "Documentação completa", "Suporte jurídico", "Acompanhamento integral"],
      image: serviceAbertura
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Folha de Pagamento",
      description: "Gestão completa de recursos humanos, incluindo folha de pagamento, benefícios e obrigações trabalhistas.",
      benefits: ["Cálculo preciso", "Obrigações acessórias", "E-Social", "Gestão de benefícios"],
      image: serviceFolha
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Imposto de Renda",
      description: "Declaração de imposto de renda para pessoas físicas e jurídicas com máxima restituição.",
      benefits: ["Análise detalhada", "Máxima restituição", "Revisão de anos anteriores", "Planejamento anual"],
      image: serviceImposto
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Planejamento Financeiro",
      description: "Consultoria em planejamento financeiro e análise de viabilidade para crescimento empresarial.",
      benefits: ["Análise de fluxo de caixa", "Projeções financeiras", "Indicadores de performance", "Assessoria estratégica"],
      image: servicePlanejamento
    }
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full mb-6">
            <Briefcase className="h-4 w-4 text-luxury-gold mr-2" />
            <span className="text-sm font-medium text-luxury-gold">Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-cardo">
            <span className="text-foreground">Soluções</span>
            <span className="text-luxury-gold"> Contábeis</span>
            <br />
            <span className="text-foreground">Completas</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços contábeis e fiscais, 
            desenvolvidos para atender às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-luxury overflow-hidden group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="overflow-hidden h-48">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                {/* Icon */}
                <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-6 shadow-gold group-hover:shadow-luxury transition-all duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-luxury-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-luxury-gold uppercase tracking-wide">
                    Benefícios:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-full bg-gradient-primary rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card-luxury p-8 bg-card border-2 border-luxury-gold/30">
            <Shield className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-cardo">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver soluções contábeis sob medida 
              para as necessidades específicas da sua empresa.
            </p>
            <Button 
              className="bg-luxury-silver hover:bg-luxury-silver-light text-foreground font-semibold shadow-silver"
              onClick={() => window.open('https://wa.me/5561993376506?text=Olá! Preciso de ajuda com serviços contábeis especializados.', '_blank')}
            >
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services