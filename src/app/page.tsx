"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-4">
          <Link href="#inicio" className="flex items-center gap-3">
            {" "}
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
                <Heart className="h-4 w-4 text-white fill-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-pink-300 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                Ilha do bolo
              </span>
              <p className="text-xs text-pink-500 font-medium">
                Confeitaria Artesanal
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: "Início", href: "#inicio" },
              { name: "Sobre", href: "#sobre" },
              { name: "Produtos", href: "#produtos" },
              { name: "Depoimentos", href: "#depoimentos" },
              { name: "Contato", href: "#contato" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-pink-900 hover:text-pink-600 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <Link href="#contato">
              <Button className="hidden sm:flex bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6">
                <Heart className="mr-2 h-4 w-4" />
                Encomendar
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) {
                  mobileMenu.classList.toggle("hidden");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-pink-600"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="hidden lg:hidden bg-white border-t border-pink-100 shadow-lg"
        >
          <div className="container mx-auto max-w-7xl px-4 py-6">
            <nav className="flex flex-col gap-4">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Sobre", href: "#sobre" },
                { name: "Produtos", href: "#produtos" },
                { name: "Depoimentos", href: "#depoimentos" },
                { name: "Contato", href: "#contato" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-pink-900 hover:text-pink-600 transition-colors py-2 px-4 rounded-lg hover:bg-pink-50"
                  onClick={() => {
                    const mobileMenu = document.getElementById("mobile-menu");
                    if (mobileMenu) {
                      mobileMenu.classList.add("hidden");
                    }
                  }}
                >
                  <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-pink-100">
                <Link href="#contato">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg rounded-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Fazer Pedido
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative">
          <div className="container mx-auto px-4 max-w-7xl py-20 md:py-32 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 font-medium">
                Doces que encantam
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-950">
                Delícias artesanais para momentos especiais
              </h1>
              <p className="text-lg text-pink-800/80 max-w-md">
                Bolos, doces e sobremesas feitos com amor para tornar seus
                momentos ainda mais doces e memoráveis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                  Ver cardápio
                </Button>
                <Button
                  variant="outline"
                  className="border-pink-200 text-pink-600 hover:bg-pink-100 bg-transparent"
                >
                  Fazer pedido
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative h-auto aspect-[5/4] md:aspect-[5/4] w-full">
                <Image
                  src="/bolo-de-casamento-rosa.jpg"
                  fill
                  alt="Bolo decorado com flores"
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md hidden md:block">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500 fill-pink-500" />
                  <span className="font-medium text-pink-950">
                    Feito com amor
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pink-50 to-transparent" />
        </section>
        <section id="sobre" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/confeitaria.jpg?height=400&width=500"
                fill
                alt="Confeiteira decorando um bolo"
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-100 p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-pink-600">10+</p>
                <p className="text-sm text-pink-800">Anos de experiência</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-950">
                Sobre a Ilha do bolo
              </h2>
              <p className="text-pink-800/80">
                Somos uma confeitaria artesanal especializada em criar doces que
                não apenas satisfazem o paladar, mas também encantam os olhos.
                Nossa paixão por confeitaria nos leva a criar verdadeiras obras
                de arte comestíveis.
              </p>
              <ul className="space-y-3">
                {[
                  "Ingredientes selecionados de alta qualidade",
                  "Receitas exclusivas desenvolvidas com carinho",
                  "Personalização para cada ocasião especial",
                  "Entrega cuidadosa para preservar cada detalhe",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-600"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-pink-800">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#produtos">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Conheça nossos produtos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="produtos" className="py-16 md:py-24 bg-pink-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-4">
                Nossas Especialidades
              </h2>
              <p className="text-pink-800/80">
                Descubra nossa seleção de doces artesanais, feitos com
                ingredientes selecionados e muito carinho para tornar seus
                momentos especiais.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Bolos Decorados",
                  description:
                    "Bolos personalizados para aniversários, casamentos e ocasiões especiais.",
                  imagePath: "/bolodecorado.jpg",
                },
                {
                  name: "Cupcakes",
                  description:
                    "Deliciosos cupcakes com coberturas criativas e sabores variados.",
                  imagePath: "/cupcake.jpg",
                },
                {
                  name: "Doces Finos",
                  description:
                    "Brigadeiros gourmet, bem-casados e docinhos para festas.",
                  imagePath: "/docefino.jpg",
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={product.imagePath}
                      fill
                      alt={product.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-pink-950 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-pink-800/80 mb-4">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-pink-200 text-pink-600 hover:bg-pink-100 bg-transparent"
                    >
                      Ver opções
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="depoimentos" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-4">
                O que nossos clientes dizem
              </h2>
              <p className="text-pink-800/80">
                A satisfação dos nossos clientes é nossa maior recompensa.
                Confira alguns depoimentos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Maria Silva",
                  text: "O bolo que encomendei para o aniversário da minha filha estava perfeito! Todos os convidados elogiaram tanto a aparência quanto o sabor.",
                  role: "Cliente desde 2020",
                },
                {
                  name: "João Pereira",
                  text: "Os doces para meu casamento foram um sucesso! Além de lindos, estavam deliciosos. O atendimento foi impecável do início ao fim.",
                  role: "Cliente desde 2021",
                },
                {
                  name: "Ana Costa",
                  text: "Sempre que preciso surpreender alguém, encomendo os cupcakes da Ilha do bolo. São os melhores da cidade, sem dúvida!",
                  role: "Cliente desde 2019",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-pink-50 p-6 rounded-xl border border-pink-100"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#EC4899"
                        stroke="#EC4899"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-pink-800 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-200 flex items-center justify-center">
                      <span className="text-pink-600 font-medium">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-pink-950">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-pink-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-16 md:py-24 bg-pink-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-950">
                  Entre em contato
                </h2>
                <p className="text-pink-800/80">
                  Estamos prontos para tornar seu evento ainda mais especial com
                  nossas criações. Entre em contato para fazer seu pedido ou
                  tirar dúvidas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600">Telefone</p>
                      <p className="font-medium text-pink-950">
                        (11) 1111-0000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600">Email</p>
                      <p className="font-medium text-pink-950">
                        contato@ilhadobolo.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-pink-600">Endereço</p>
                      <p className="font-medium text-pink-950">
                        Rua das Flores, 123 - São Paulo, SP
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-pink-600" />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-pink-600" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-pink-950 mb-4">
                  Faça seu pedido
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-pink-800"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-pink-800"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-pink-800"
                    >
                      Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-pink-800"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Descreva seu pedido ou dúvida..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-950 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-full bg-pink-800 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white fill-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Ilha do bolo
                </span>
              </div>
              <p className="text-pink-200 mb-4">
                Transformando momentos especiais em doces lembranças desde 2015.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-pink-800 flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-pink-800 flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                {["Início", "Sobre", "Produtos", "Depoimentos", "Contato"].map(
                  (item, i) => (
                    <li key={i}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="text-pink-200 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">
                Horário de Funcionamento
              </h3>
              <ul className="space-y-2 text-pink-200">
                <li className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span>9:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-pink-800 mt-8 pt-8 text-center text-pink-300 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Ilha do bolo. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
