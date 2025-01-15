"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui andrebbe la logica per l'invio dell'email al tuo servizio di newsletter
    console.log("Email sottoscritta:", email);
    toast({
      title: "Iscrizione completata!",
      description: "Grazie per esserti iscritto alla nostra newsletter.",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
    setEmail("");
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-10 md:p-16 rounded-3xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail size={48} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Resta Aggiornato
              </h2>
              <p className="text-lg text-white/80">
                Iscriviti alla nostra newsletter per ricevere gli ultimi
                articoli, tutorial e risorse direttamente nella tua casella di
                posta.
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <Input
              type="email"
              placeholder="Il tuo indirizzo email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white/20 border-white/30 text-white placeholder-white/70"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90"
            >
              Iscriviti Ora
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
