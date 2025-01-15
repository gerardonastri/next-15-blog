"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "web-dev", label: "Sviluppo Web" },
  { id: "frontend", label: "Front-end Development" },
  { id: "backend", label: "Back-end Development" },
  { id: "consulting", label: "Consulenza Tecnica" },
  { id: "mentoring", label: "Mentoring" },
  { id: "other", label: "Altro" },
];

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Chat con noi",
    description: "Chatta con il nostro team in tempo reale",
    action: "Inizia una chat",
    link: "#",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Scrivici a info@example.com",
    action: "Invia una email",
    link: "mailto:info@example.com",
  },
  {
    icon: Phone,
    title: "Telefono",
    description: "Chiamaci al +39 02 1234567",
    action: "Chiama ora",
    link: "tel:+390212345678",
  },
];

export default function ContactPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuliamo l'invio del form
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Messaggio inviato!",
      description: "Ti risponderemo il prima possibile.",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });

    setIsSubmitting(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/20 bg-grid-8" />
        <div className="container mx-auto px-4 relative z-10 pt-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parliamo del Tuo Progetto
            </h1>
            <p className="text-xl text-white/80">
              Hai domande o vuoi discutere di una collaborazione? Siamo qui per
              aiutarti a realizzare le tue idee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <method.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <a
                    href={method.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    {method.action}
                    <Send className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Inviaci un messaggio
                </h2>
                <p className="text-gray-600">
                  Compila il form sottostante e ti risponderemo entro 24 ore
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Cognome</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefono</Label>
                  <div className="flex gap-4">
                    <Select defaultValue="IT">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Prefisso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="IT">🇮🇹 +39</SelectItem>
                        <SelectItem value="US">🇺🇸 +1</SelectItem>
                        <SelectItem value="UK">🇬🇧 +44</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Servizi di interesse</Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={(checked) => {
                            setFormData({
                              ...formData,
                              services: checked
                                ? [...formData.services, service.id]
                                : formData.services.filter(
                                    (id) => id !== service.id
                                  ),
                            });
                          }}
                        />
                        <Label
                          htmlFor={service.id}
                          className="text-sm font-normal"
                        >
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Descrivi il tuo progetto o la tua richiesta..."
                    className="h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Invio in corso...</>
                  ) : (
                    <>
                      Invia messaggio
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <MapPin size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Vieni a trovarci</h2>
            <p className="text-gray-600 mb-4">
              La nostra sede si trova nel cuore della città
            </p>
            <p className="text-lg font-medium">
              Via Roma 123, 20100 Milano (MI)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
