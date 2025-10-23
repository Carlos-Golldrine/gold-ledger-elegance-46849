import { 
  Calculator, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  Shield,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' }
  ]

  const services = [
    'Contabilidade Empresarial',
    'Consultoria Tributária', 
    'Abertura de Empresas',
    'Folha de Pagamento',
    'Imposto de Renda',
    'Planejamento Financeiro'
  ]

  const legalInfo = [
    'Política de Privacidade',
    'Termos de Uso',
    'Certificações',
    'Código de Ética'
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-3 rounded-lg shadow-gold">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-luxury-gold font-cardo">Werneck Contabilidade</h3>
                <p className="text-xs text-muted-foreground">Excelência Contábil</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Há mais de 15 anos oferecendo soluções contábeis de excelência, 
              baseadas na transparência, confiabilidade e compromisso com 
              o sucesso dos nossos clientes.
            </p>

            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-luxury-gold" />
                <span className="text-xs text-muted-foreground">CRC Certificado</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-luxury-gold" />
                <span className="text-xs text-muted-foreground">ISO 9001</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-muted p-2 rounded-lg hover:bg-luxury-gold transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-muted p-2 rounded-lg hover:bg-luxury-gold transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-muted p-2 rounded-lg hover:bg-luxury-gold transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-luxury-gold mb-6 font-cardo">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-luxury-gold transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-luxury-gold mb-6 font-cardo">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-muted-foreground hover:text-luxury-gold transition-colors duration-300 flex items-center group text-sm"
                  >
                    <div className="w-1 h-1 bg-luxury-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold text-luxury-gold mb-6 font-cardo">Contato</h4>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">(61) 99337-6506</p>
                  <p className="text-xs text-muted-foreground">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">verneckcontabilidade@gmail.com</p>
                  <p className="text-xs text-muted-foreground">Resposta em até 2h</p>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="text-sm font-semibold text-luxury-gold mb-3">Informações Legais</h5>
              <ul className="space-y-2">
                {legalInfo.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-xs text-muted-foreground hover:text-luxury-gold transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Werneck Contabilidade. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                CNPJ: 12.345.678/0001-90 | CRC: SP-123456/O-7
              </p>
            </div>

            {/* Certifications & Back to Top */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>FENACON</span>
                <span>•</span>
                <span>CRC/SP</span>
                <span>•</span>
                <span>ISO 9001</span>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="bg-luxury-gold/20 hover:bg-luxury-gold text-luxury-gold hover:text-white transition-all duration-300 rounded-full"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer