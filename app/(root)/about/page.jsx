"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Code2,
  Users,
  Star,
  Coffee,
  Brain,
  Rocket,
  Target,
  MessageSquare,
  Github,
  Youtube,
  Twitter,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "5+", label: "Anni di Esperienza", icon: Code2 },
    { number: "150+", label: "Progetti Completati", icon: Star },
    { number: "10k+", label: "Lettori Mensili", icon: Users },
    { number: "∞", label: "Tazze di Caffè", icon: Coffee },
  ];

  const technologies = [
    { name: "Front-end", items: ["React", "Next.js", "Vue.js", "TailwindCSS"] },
    { name: "Back-end", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
    { name: "Tools", items: ["Git", "VS Code", "Figma", "Postman"] },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Inizio del Blog",
      description: "Primi articoli pubblicati sulla programmazione web",
    },
    {
      year: "2020",
      title: "Crescita Community",
      description: "Raggiunti i primi 1000 lettori mensili",
    },
    {
      year: "2021",
      title: "Espansione Contenuti",
      description: "Lancio di tutorial video e corsi online",
    },
    {
      year: "2022",
      title: "Partnership",
      description: "Collaborazioni con aziende tech leader",
    },
    {
      year: "2023",
      title: "Milestone",
      description: "Superati i 10,000 lettori mensili",
    },
  ];

  const whyChooseUs = [
    {
      title: "Contenuti Aggiornati",
      description: "Articoli sempre aggiornati con le ultime tecnologie",
      icon: Rocket,
    },
    {
      title: "Esperienza Pratica",
      description: "Tutorial basati su casi reali e best practices",
      icon: Brain,
    },
    {
      title: "Community Attiva",
      description: "Supporto costante dalla nostra community di sviluppatori",
      icon: Users,
    },
    {
      title: "Obiettivi Chiari",
      description: "Percorsi di apprendimento strutturati e mirati",
      icon: Target,
    },
  ];

  const faqs = [
    {
      question: "Come posso iniziare?",
      answer:
        "Puoi iniziare esplorando i nostri articoli introduttivi nella sezione 'Per Iniziare' o seguendo uno dei nostri percorsi di apprendimento strutturati.",
    },
    {
      question: "Offrite consulenze private?",
      answer:
        "Sì, offriamo sessioni di consulenza one-to-one per progetti specifici o per guidare il tuo percorso di apprendimento.",
    },
    {
      question: "Come posso contribuire?",
      answer:
        "Puoi contribuire scrivendo articoli guest, partecipando alle discussioni nella community o segnalando argomenti che vorresti approfondire.",
    },
    {
      question: "Quanto costa l'accesso ai contenuti?",
      answer:
        "La maggior parte dei nostri contenuti è gratuita. Offriamo anche contenuti premium e corsi a pagamento per approfondimenti specifici.",
    },
  ];

  const communityStats = [
    { platform: "Github", followers: "5K+", icon: Github },
    { platform: "YouTube", followers: "10K+", icon: Youtube },
    { platform: "Twitter", followers: "15K+", icon: Twitter },
    { platform: "Community", members: "20K+", icon: MessageSquare },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-[100px] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/20 bg-grid-8" />
        <div className="container mx-auto px-4 relative z-10 pt-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              La Nostra Passione per lo Sviluppo Web
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Condividiamo conoscenze e esperienze per aiutare gli sviluppatori
              a crescere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Tecnologie</h2>
            <p className="text-gray-600">
              Le tecnologie e gli strumenti che trattiamo nel nostro blog
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Il Nostro Percorso</h2>
            <p className="text-gray-600">
              Le tappe principali della nostra crescita
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0
                    ? "justify-end md:pr-8"
                    : "justify-start md:pl-8"
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="text-blue-600 font-bold">{item.year}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Perché Sceglierci</h2>
            <p className="text-gray-600">I punti di forza che ci distinguono</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Domande Frequenti</h2>
            <p className="text-gray-600">Risposte alle domande più comuni</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">La Nostra Community</h2>
            <p className="text-white/80">
              Unisciti alla nostra community in crescita
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {stat.followers || stat.members}
                </h3>
                <p className="text-white/80">{stat.platform}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Come Tutto è Iniziato</h2>
              <p className="text-gray-600 mb-6">
                La nostra avventura è iniziata con una semplice missione:
                rendere lo sviluppo web accessibile a tutti. Attraverso anni di
                esperienza nel settore, abbiamo deciso di condividere le nostre
                conoscenze e aiutare altri sviluppatori a crescere
                professionalmente.
              </p>
              <p className="text-gray-600 mb-6">
                Oggi, il nostro blog è diventato un punto di riferimento per
                migliaia di sviluppatori che cercano di migliorare le proprie
                competenze e restare aggiornati sulle ultime tecnologie.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Scopri di più
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/team.jpeg"
                alt="Il nostro team al lavoro"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-purple-50">
                <h3 className="text-2xl font-bold mb-4">La Nostra Visione</h3>
                <p className="text-gray-600">
                  Creare una comunità globale di sviluppatori che condividono
                  conoscenze, esperienze e best practices per costruire un web
                  migliore.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-blue-50">
                <h3 className="text-2xl font-bold mb-4">La Nostra Missione</h3>
                <p className="text-gray-600">
                  Fornire contenuti di alta qualità, tutorial pratici e
                  approfondimenti tecnici per aiutare gli sviluppatori a
                  raggiungere il loro pieno potenziale.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unisciti al Nostro Viaggio
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Esplora i nostri articoli, partecipa alle discussioni e cresci
              insieme alla nostra community
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90"
            >
              Esplora il Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
