import { 
  Award, 
  Users, 
  Target, 
  Eye, 
  Heart,
  Building,
  CheckCircle,
  Star
} from 'lucide-react'

const About = () => {
  const stats = [
    { number: "15+", label: "Anos de Experiência", icon: <Award className="h-6 w-6" /> },
    { number: "500+", label: "Clientes Atendidos", icon: <Users className="h-6 w-6" /> },
    { number: "98%", label: "Satisfação dos Clientes", icon: <Star className="h-6 w-6" /> },
    { number: "24h", label: "Suporte Disponível", icon: <CheckCircle className="h-6 w-6" /> }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Missão",
      description: "Oferecer soluções contábeis de excelência, proporcionando segurança jurídica e otimização fiscal para nossos clientes, contribuindo para o crescimento sustentável de seus negócios."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Visão",
      description: "Ser reconhecida como a principal referência em serviços contábeis na região, destacando-se pela inovação, qualidade técnica e relacionamento duradouro com clientes."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Valores",
      description: "Transparência em todas as nossas ações, ética profissional, excelência técnica, compromisso com resultados e relacionamento próximo com nossos clientes."
    }
  ]

  const team = [
    {
      name: "Dr. Carlos Silva",
      role: "Contador Sênior - CRC 123456",
      description: "Especialista em contabilidade tributária com mais de 20 anos de experiência."
    },
    {
      name: "Dra. Ana Costa",
      role: "Consultora Fiscal - CRC 789012",
      description: "Especializada em planejamento tributário e consultoria empresarial."
    },
    {
      name: "João Santos",
      role: "Coordenador Operacional",
      description: "Responsável pela gestão operacional e atendimento ao cliente."
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full mb-6">
            <Building className="h-4 w-4 text-luxury-gold mr-2" />
            <span className="text-sm font-medium text-luxury-gold">Sobre Nós</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-cardo">
            <span className="text-foreground">Conheça a</span>
            <span className="text-luxury-gold"> Werneck Contabilidade</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos no mercado, a Werneck Contabilidade é sinônimo de excelência 
            em serviços contábeis, construindo relacionamentos sólidos baseados 
            na confiança e transparência.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card-luxury p-6 text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4 shadow-gold group-hover:shadow-luxury transition-all duration-300">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-luxury-gold mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-foreground font-cardo">
              Nossa <span className="text-luxury-gold">História</span>
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Fundada em 2009, a Werneck Contabilidade nasceu com o propósito de transformar 
                a experiência dos empresários com serviços contábeis. Começamos como 
                um pequeno escritório com grandes ambições: oferecer serviços de
                qualidade excepcional aliados ao atendimento personalizado.
              </p>
              <p>
                Ao longo dos anos, crescemos não apenas em tamanho, mas em expertise 
                e reconhecimento. Hoje, atendemos mais de 500 empresas de diversos 
                segmentos, sempre mantendo nosso compromisso com a excelência e 
                transparência que nos trouxeram até aqui.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente qualificados, 
                constantemente atualizados com as mudanças da legislação, garantindo 
                que nossos clientes estejam sempre em conformidade e aproveitando 
                as melhores oportunidades fiscais.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-12 h-1 bg-gradient-primary rounded-full"></div>
              <span className="text-luxury-gold font-semibold">15+ Anos de Confiança</span>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="card-luxury p-8 bg-card border-2 border-luxury-gold/30">
              <div className="text-center">
                <Award className="h-16 w-16 text-luxury-gold mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-4 text-foreground font-cardo">Certificações e Reconhecimentos</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-luxury-gold" />
                    <span>CRC - Conselho Regional de Contabilidade</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-luxury-gold" />
                    <span>Certificação Digital ICP-Brasil</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-luxury-gold" />
                    <span>FENACON - Federação Nacional das Empresas</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-luxury-gold" />
                    <span>ISO 9001 - Gestão da Qualidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="card-luxury p-8 text-center group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-primary p-4 rounded-xl w-fit mx-auto mb-6 shadow-gold group-hover:shadow-luxury transition-all duration-300">
                <div className="text-white">
                  {value.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 text-luxury-gold">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About