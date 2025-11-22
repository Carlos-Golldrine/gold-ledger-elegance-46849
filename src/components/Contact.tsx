import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  User,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // URL do Google Apps Script
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5RIoGZWSnn5-sWpbsWPTufHxS5co1-Y8G7nSfrM-OADvj6sFmt3q1ZZq06v6mBeG3/exec'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Enviar para Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toLocaleString('pt-BR')
        })
      })

      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar mensagem. Por favor, tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      details: ["(61) 99337-6506", "Atendimento comercial"],
      action: "tel:+5561993376506"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["(61) 99337-6506", "Resposta imediata"],
      action: "https://wa.me/5561993376506?text=Olá! Gostaria de solicitar um orçamento para serviços contábeis."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      details: ["verneckcontabilidade@gmail.com"],
      action: "mailto:verneckcontabilidade@gmail.com"
    }
  ]

  const businessHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
    { day: "Domingo", hours: "Fechado" }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full mb-6">
            <MessageSquare className="h-4 w-4 text-luxury-gold mr-2" />
            <span className="text-sm font-medium text-luxury-gold">Contato</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-cardo">
            <span className="text-foreground">Vamos Conversar</span>
            <br />
            <span className="text-luxury-gold">Sobre Seu Negócio</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudar sua empresa a crescer. Entre em contato 
            conosco e descubra como podemos otimizar sua gestão contábil.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-luxury p-8 animate-fade-in">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gradient-primary p-3 rounded-lg shadow-gold">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-cardo">Formulário de Contato</h3>
                  <p className="text-muted-foreground">Preencha os campos abaixo e entraremos em contato</p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-3 animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-luxury-gold" />
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 border-border focus:border-luxury-gold transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-luxury-gold" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 border-border focus:border-luxury-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-luxury-gold" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefone / WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 border-border focus:border-luxury-gold transition-colors"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-luxury-gold" />
                  <Textarea
                    name="message"
                    placeholder="Descreva como podemos ajudar sua empresa..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="pl-10 border-border focus:border-luxury-gold transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold shadow-gold"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-luxury p-6 animate-slide-up">
              <h4 className="text-xl font-bold mb-6 text-foreground font-cardo">Informações de Contato</h4>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <a 
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : '_self'}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    >
                      <div className="bg-gradient-primary p-2 rounded-lg shadow-gold group-hover:shadow-luxury transition-all duration-300">
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-luxury-gold mb-1">{info.title}</h5>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="card-luxury p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-primary p-2 rounded-lg shadow-gold">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground font-cardo">Horário de Atendimento</h4>
              </div>
              
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-accent transition-colors">
                    <span className="text-sm font-medium text-muted-foreground">{schedule.day}</span>
                    <span className="text-sm font-semibold text-luxury-gold">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-luxury-gold/10 rounded-lg border border-luxury-gold/20">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-luxury-gold" />
                  <span className="text-sm font-medium text-luxury-gold">Atendimento de Emergência</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Para situações urgentes, entre em contato pelo WhatsApp
                </p>
              </div>
            </div>

            {/* Company Info */}
            <div className="card-luxury p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-primary p-2 rounded-lg shadow-gold">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground font-cardo">Dados da Empresa</h4>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CNPJ:</span>
                  <span className="font-medium">12.345.678/0001-90</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CRC:</span>
                  <span className="font-medium">SP-123456/O-7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Registro:</span>
                  <span className="font-medium">FENACON</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <a 
                    href="#" 
                    className="text-luxury-gold hover:underline text-xs"
                  >
                    Política de Privacidade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact