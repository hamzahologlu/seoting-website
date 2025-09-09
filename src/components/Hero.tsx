'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Camera, TrendingUp } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg pt-20 sm:pt-24">
      <ParticleBackground />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary-400 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-accent-400 opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap size={35} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-blue-400 opacity-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Camera size={45} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-cyan-400 opacity-20"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <TrendingUp size={38} />
      </motion.div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 mt-8 sm:mt-4 relative z-40"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-500/30 text-sm font-medium text-primary-300 backdrop-blur-sm">
            🏆 İstanbul'un #1 Dijital Pazarlama Ajansı
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-6 leading-none"
        >
          <span className="gradient-text">SEOTING</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            İstanbul Dijital Pazarlama Hizmetleri
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            İstanbul'un en büyük firmalarına danışmanlık hizmeti veren, 
            <span className="text-primary-400 font-semibold"> Başakşehir merkezli</span> 
            <span className="text-accent-400 font-semibold"> dijital pazarlama uzmanları</span> ile 
            markanızı İstanbul'da zirveye taşıyoruz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.a
            href="/iletisim"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-2 neon-glow"
          >
            Hemen Başlayalım
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
          
          <motion.a
            href="/hizmetlerimiz"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-full font-semibold text-white transition-all duration-300 inline-block"
          >
            Hizmetleri Keşfet
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "500+", label: "Başarılı Proje" },
            { number: "50+", label: "Mutlu Müşteri" },
            { number: "5+", label: "Yıl Deneyim" },
            { number: "24/7", label: "Destek" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

