"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Droplets, Clock, MapPin, Star, Menu, X, ChevronDown } from "lucide-react"

export default function NirelWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const addToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thafeld
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection("product")} className="hover:text-primary transition-colors">
                Producto
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Contacto
              </button>
              <Button className="relative bg-primary hover:bg-primary/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Carrito
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-white">{cartCount}</Badge>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection("home")} className="block hover:text-primary transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection("product")} className="block hover:text-primary transition-colors">
                Producto
              </button>
              <button onClick={() => scrollToSection("about")} className="block hover:text-primary transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection("faq")} className="block hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="block hover:text-primary transition-colors">
                Contacto
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className="animate-fade-in"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
              <Droplets className="w-32 h-32 text-white" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NIREL
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Hidratación portátil al instante.
              <br />
              <span className="text-primary font-semibold">Tu día, más ligero.</span>
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("product")}
            >
              Comprar ahora
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Conoce NIREL</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La pastilla efervescente hidratante diseñada para tu estilo de vida activo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">¿Qué es NIREL?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    Cápsula hidratante
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    Ideal para estudiantes y oficinistas de 18 a 40 años
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    Suple deshidratación leve por actividades diarias
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    Fácil de transportar y usar: solo disolver en agua
                  </li>
                </ul>
              </div>

              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">NIREL - Cápsula Hidratante</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Hidratación instantánea donde quiera que vayas
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-4xl font-bold text-primary">$50 MXN</div>
                  <p className="text-gray-600">Paquete de 10 pastillas</p>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full"
                    onClick={addToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Agregar al carrito
                  </Button>

                  <Badge variant="outline" className="text-secondary border-secondary">
                    Suscripciones disponibles próximamente
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-6 text-center text-gray-800">¿Cómo funciona?</h4>
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                      <img
                        src="/images/how-it-works.png"
                        alt="Cómo usar NIREL - Disolver cápsula en agua"
                        className="w-full max-w-md mx-auto"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h5 className="text-xl font-semibold text-gray-800">Uso simple en 3 pasos:</h5>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                            1
                          </div>
                          <p className="text-gray-600">Toma una cápsula NIREL</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                            2
                          </div>
                          <p className="text-gray-600">Disuélvela en 200ml de agua</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                            3
                          </div>
                          <p className="text-gray-600">¡Disfruta tu hidratación instantánea!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-6 rounded-2xl">
                <Clock className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Entrega Rápida</h4>
                <p className="text-gray-600">2 días hábiles en Zumpango y Tecámac</p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Zonas de Envío</h4>
                <p className="text-gray-600">Actualmente disponible en Zumpango y Tecámac</p>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-6 rounded-2xl">
                <Droplets className="w-12 h-12 text-secondary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Fácil de Usar</h4>
                <p className="text-gray-600">Solo disuelve en 200ml de agua y ¡listo!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Sobre Thafeld</h2>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Thafeld nació cuando uno de sus fundadores, después de largas caminatas, notó mareos causados por
                deshidratación. Buscando una solución práctica y eficaz, desarrolló una fórmula portable y funcional
                para el día a día. Así nació <span className="text-primary font-semibold">NIREL</span>, la pastilla
                hidratante diseñada para quienes viven con prisa pero no renuncian a cuidarse.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Portabilidad</h3>
                  <p className="text-gray-600">Lleva tu hidratación a donde vayas</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Salud Cotidiana</h3>
                  <p className="text-gray-600">Cuidado diario sin complicaciones</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Eficacia</h3>
                  <p className="text-gray-600">Resultados rápidos y efectivos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Preguntas Frecuentes</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">¿Cómo se usa NIREL?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Disuelve una cápsula en 200 ml de agua, espera que se disuelva por completo, ¡y listo! Es así de
                  simple y rápido.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Cuáles son los ingredientes?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  NIREL contiene vitaminas C, D, B1, B2, B6 y B12, junto con electrolitos esenciales cuidadosamente
                  seleccionados para una hidratación óptima.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Puedo devolver el producto?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Solo si el empaque no ha sido abierto. Se aceptan devoluciones dentro de los primeros 5 días hábiles
                  tras la entrega.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Cuáles son los tiempos y zonas de envío?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Entregamos solo en Zumpango y Tecámac en un plazo estimado de 2 días hábiles. Pronto expandiremos a
                  más zonas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Es apto para embarazadas o personas con enfermedades?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Se recomienda consultar con un médico antes de consumirlo en esos casos. No tomar más de 2 cápsulas
                  por día. Este producto no es un medicamento. El consumo de este producto es responsabilidad de quien
                  lo usa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
              ¿Tienes alguna queja o duda?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">Queremos escucharte</p>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-medium">
                      Nombre
                    </Label>
                    <Input id="name" placeholder="Tu nombre completo" className="mt-2 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg font-medium">
                      Correo electrónico
                    </Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="mt-2 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-lg font-medium">
                      Mensaje
                    </Label>
                    <Textarea id="message" placeholder="Cuéntanos tu duda o comentario..." className="mt-2 min-h-32" />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Thafeld
              </h3>
              <p className="text-gray-400">Hidratación portátil para tu estilo de vida activo.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Política de privacidad</li>
                <li>Términos y condiciones</li>
                <li>Métodos de pago: PayPal y tarjeta bancaria</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Promociones</h4>
              <p className="text-gray-400">
                En ciertas temporadas ofrecemos descuentos especiales y códigos promocionales. ¡Mantente atento!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Thafeld. Todos los derechos reservados.</p>
            <p className="mt-2">Zumpango y Tecámac, Estado de México</p>
          </div>
        </div>
      </footer>

      {/* Fixed Buy Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => scrollToSection("product")}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Comprar NIREL
        </Button>
      </div>
    </div>
  )
}
