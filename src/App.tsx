/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  ChevronRight, 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Menu, 
  X,
  ArrowRight,
  Star,
  ExternalLink,
  Cake,
  CakeSlice,
  Cookie,
  CircleDot,
  Square,
  Layers
} from "lucide-react";
import { useState, useEffect } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Dubai Chocolate Classic",
    price: "12,000 ₸",
    description: "Легендарный дубайский шоколад с хрустящей начинкой из теста катаифи и премиальной фисташковой пасты.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=800",
    category: "Тренды"
  },
  {
    id: 2,
    name: "Dubai Strawberry Cup",
    price: "8,500 ₸",
    description: "Стакан с ягодами, тестом катаифи в фисташковой пасте и нежным молочным шоколадом.",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&q=80&w=800",
    category: "Тренды"
  },
  {
    id: 3,
    name: "Set 'Miracle'",
    price: "5,500 ₸",
    description: "Набор из 5 отборных ягод клубники в белом, молочном или розовом бельгийском шоколаде.",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=800",
    category: "Арт-фрукты"
  },
  {
    id: 4,
    name: "Set 'Delight'",
    price: "13,900 ₸",
    description: "Изысканный набор на 16 штук. Сочетание классики и нежности в каждой ягоде.",
    image: "https://images.unsplash.com/photo-1549007994-cb92cfd7d4d8?auto=format&fit=crop&q=80&w=800",
    category: "Наборы"
  },
  {
    id: 5,
    name: "Set 'Luxury'",
    price: "18,000 ₸",
    description: "Премиальный набор на 16 штук с добавлением малины, ежевики и голубики.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800",
    category: "Наборы"
  },
  {
    id: 6,
    name: "Strawberry Bouquet",
    price: "24,500 ₸",
    description: "Маленький букет из 30-33 отборных ягод клубники в шоколаде. Идеальный подарок.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800",
    category: "Наборы"
  },
  {
    id: 7,
    name: "Berry Mix (200g)",
    price: "28,500 ₸",
    description: "Эксклюзивный микс из голубики, ежевики и малины в премиальном шоколаде.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800",
    category: "Арт-фрукты"
  },
  {
    id: 8,
    name: "Mochi Mix Set",
    price: "7,450 ₸",
    description: "Набор из 5 моти с разнообразными вкусами: манго, баунти, вишня, клубника, киви.",
    image: "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=800",
    category: "Наборы"
  },
  {
    id: 9,
    name: "Exclusive Box 'Cartier'",
    price: "59,500 ₸",
    description: "Роскошная премиум-коробка из трех отсеков для самых особенных случаев.",
    image: "https://images.unsplash.com/photo-1549007994-cb92cfd7d4d8?auto=format&fit=crop&q=80&w=800",
    category: "Премиум"
  }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1549007994-cb92cfd7d4d8?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=600",
];

const SPECIALITIES = [
  { name: "Cupcakes", icon: <Cake size={32} strokeWidth={1.2} /> },
  { name: "Cheesecakes", icon: <CakeSlice size={32} strokeWidth={1.2} /> },
  { name: "Butter Cakes", icon: <Layers size={32} strokeWidth={1.2} /> },
  { name: "Cookies", icon: <Cookie size={32} strokeWidth={1.2} /> },
  { name: "Macarons", icon: <CircleDot size={32} strokeWidth={1.2} /> },
  { name: "Brownies", icon: <Square size={32} strokeWidth={1.2} /> },
];

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="w-12 h-12 rounded-full border-2 border-magenta flex items-center justify-center bg-pink-soft overflow-hidden relative shadow-lg shadow-magenta/20">
      <img 
        src="/logo.png" 
        alt="Chocolova Logo" 
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=C&background=e6007e&color=fff";
        }}
      />
    </div>
    <span className="font-display text-2xl tracking-tighter text-chocolate">Chocolova</span>
  </div>
);

const HERO_SLIDES = [
  {
    id: 1,
    name: "Dubai Pistachio",
    description: "Легендарный хрустящий шоколад с фисташковой пастой и тестом катаифи.",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=1000",
    accentColor: "#e6007e"
  },
  {
    id: 2,
    name: "Strawberry Gold",
    description: "Свежая клубника в бельгийском шоколаде с сусальным золотом.",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&q=80&w=1000",
    accentColor: "#ff85a2"
  },
  {
    id: 3,
    name: "Classic Truffle",
    description: "Изысканный набор конфет ручной работы по авторским рецептам.",
    image: "https://images.unsplash.com/photo-1549007994-cb92cfd7d4d8?auto=format&fit=crop&q=80&w=1000",
    accentColor: "#d4af37"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Все");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const filteredProducts = activeCategory === "Все" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-light-bg selection:bg-magenta selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-light-bg/95 backdrop-blur-xl py-4 border-b border-magenta/10 shadow-sm" : "py-10"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Logo />
          </motion.div>

          <div className="hidden md:flex gap-16 text-[10px] uppercase tracking-[0.4em] font-bold text-chocolate/60">
            {["Главная", "Каталог", "Галерея", "Контакты"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-magenta transition-all duration-500 relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-magenta transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/chocolova_kz/" target="_blank" rel="noopener noreferrer" className="text-magenta hover:scale-110 transition-transform duration-500">
              <Instagram size={22} />
            </a>
            <button 
              className="md:hidden text-chocolate"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-light-bg flex flex-col items-center justify-center gap-12 text-3xl font-display text-chocolate"
          >
            <button className="absolute top-10 right-10 text-magenta" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
            {["Главная", "Каталог", "Галерея", "Контакты"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-magenta transition-colors tracking-widest"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="Главная" className="relative h-screen flex items-center justify-center overflow-hidden bg-light-bg">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-transparent to-light-bg z-10 opacity-80" />
          <AnimatePresence mode="wait">
            <motion.div 
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-0"
              style={{ 
                background: `radial-gradient(circle at 50% 50%, ${slide.accentColor} 0%, transparent 60%)`,
                filter: 'blur(120px)'
              }}
            />
          </AnimatePresence>
        </div>

        {/* Centered Composition */}
        <div className="relative z-30 w-full max-w-4xl px-8 mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center"
            >
              {/* Central Product Image */}
              <div className="relative mb-16 flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 z-10">
                  <div className="absolute inset-0 bg-magenta/5 blur-[100px] rounded-full" />
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full p-4"
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.name} 
                      className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Centered Text Content */}
              <div className="max-w-2xl mx-auto space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-magenta uppercase tracking-[0.8em] text-[10px] font-bold">
                    Signature Dessert
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-8xl font-display tracking-tighter leading-none text-chocolate"
                >
                  {slide.name}
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-chocolate/55 text-lg font-serif italic max-w-lg mx-auto leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <motion.a 
                    whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#e6007e" }}
                    whileTap={{ scale: 0.95 }}
                    href="#Каталог"
                    className="px-14 py-5 bg-magenta text-white font-bold tracking-[0.4em] uppercase text-[10px] rounded-full shadow-2xl transition-colors duration-500"
                  >
                    Заказать сейчас
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-chocolate/10 z-40">
          <motion.div 
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            className="h-full bg-magenta"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-magenta via-magenta/50 to-transparent" />
        </motion.div>
      </section>

      {/* Specialities Section */}
      <section id="Specialities" className="py-40 bg-light-bg2 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          {/* Header with Background Text */}
          <div className="relative mb-32 flex flex-col items-center justify-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10rem] md:text-[15rem] font-display font-bold text-chocolate/[0.04] leading-none absolute select-none tracking-tighter"
            >
              OUR
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-serif italic text-magenta relative z-10 mt-12 md:mt-20"
            >
              Specialities
            </motion.h3>
          </div>

          {/* Grid of Circular Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 justify-items-center">
            {SPECIALITIES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center justify-center"
              >
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border border-chocolate/10 flex flex-col items-center justify-center transition-all duration-700 group-hover:border-magenta/40 group-hover:bg-magenta/[0.04] group-hover:shadow-[0_0_40px_rgba(230,0,126,0.08)] relative overflow-hidden bg-white/60">
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-magenta/0 to-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="text-magenta/50 group-hover:text-magenta transition-colors duration-500 mb-6 relative z-10 scale-110">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-chocolate/50 group-hover:text-chocolate transition-colors duration-500 relative z-10">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial About Section - Baking Maniac Style */}
      <section id="О нас" className="py-40 px-8 max-w-7xl mx-auto relative">
        {/* Vertical Label */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="text-[10px] uppercase tracking-[1em] text-magenta/20 font-bold vertical-text rotate-180">
            About Chocolova Studio
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-magenta/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=1200" 
                alt="Crafting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-20 -right-20 w-1/2 aspect-square overflow-hidden rounded-3xl border-4 border-chocolate shadow-2xl z-20 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=800" 
                alt="Dubai Chocolate" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="md:col-span-5 md:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-magenta font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Our Story</span>
              <h2 className="text-5xl md:text-7xl font-display mb-10 leading-tight">Арт-фрукты <br /> в Алматы</h2>
              <p className="text-chocolate/60 text-lg font-serif italic mb-10 leading-relaxed">
                "Мы не просто делаем десерты, мы создаем моменты, которые остаются в памяти навсегда."
              </p>
              <p className="text-chocolate/75 mb-12 leading-relaxed">
                Chocolova — это первая студия в Алматы, специализирующаяся на создании уникальных арт-фруктов. Наш секрет в сочетании премиального бельгийского шоколада и восточных традиций хрустящего теста катаифи.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-magenta/10 pt-10">
                <div>
                  <h4 className="text-magenta font-display text-3xl mb-2">100%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-chocolate/40">Handmade</p>
                </div>
                <div>
                  <h4 className="text-magenta font-display text-3xl mb-2">Premium</h4>
                  <p className="text-[10px] uppercase tracking-widest text-chocolate/40">Ingredients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Baking Maniac Style */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-magenta font-bold tracking-[0.5em] text-[10px] uppercase mb-8 block">Philosophy</span>
              <h2 className="text-6xl md:text-8xl font-display mb-12 tracking-tighter leading-none">Красота <br /> в деталях</h2>
              <div className="space-y-10">
                <div className="flex gap-8">
                  <span className="text-magenta font-display text-4xl">01</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-chocolate">Эстетика</h4>
                    <p className="text-chocolate/60 leading-relaxed">Мы верим, что десерт должен быть прекрасен не только на вкус, но и на вид. Каждый фрукт — это холст.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="text-magenta font-display text-4xl">02</span>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-3 text-chocolate">Качество</h4>
                    <p className="text-chocolate/60 leading-relaxed">Только лучшие ингредиенты со всего мира. Бельгийский шоколад, свежайшие ягоды и авторские рецепты.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-square rounded-full overflow-hidden border-8 border-magenta/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=1000" 
                alt="Philosophy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-magenta/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Secret Ingredients Section - Refined Editorial Layout */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pink-soft/5 -skew-y-3 z-0" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-32">
            <span className="text-magenta font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">The Essence</span>
            <h2 className="text-6xl md:text-8xl font-display tracking-tighter">Секреты Вкуса</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { 
                title: "Belgian Chocolate", 
                desc: "Callebaut высочайшего качества для идеального покрытия.", 
                img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=600",
                num: "01"
              },
              { 
                title: "Kataifi Dough", 
                desc: "Традиционное восточное тесто, обжаренное до золотистого хруста.", 
                img: "https://images.unsplash.com/photo-1549007994-cb92cfd7d4d8?auto=format&fit=crop&q=80&w=600",
                num: "02"
              },
              { 
                title: "Fresh Berries", 
                desc: "Отборная клубника и фрукты, доставляемые ежедневно.", 
                img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=600",
                num: "03"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className="relative mb-12">
                  <div className="aspect-square rounded-full overflow-hidden border border-magenta/10 shadow-2xl relative z-10">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-magenta flex items-center justify-center rounded-full z-20 shadow-xl">
                    <span className="text-white font-display text-2xl">{item.num}</span>
                  </div>
                  <div className="absolute -inset-4 border border-dashed border-magenta/20 rounded-full animate-spin-slow z-0" />
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-display mb-6 text-magenta tracking-tight">{item.title}</h4>
                  <p className="text-chocolate/60 leading-relaxed font-serif italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section - Refined Grid */}
      <section id="Каталог" className="py-40 relative">
        {/* Vertical Label */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="text-[10px] uppercase tracking-[1em] text-magenta/20 font-bold vertical-text">
            Exclusive Collections
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="text-left">
              <span className="text-magenta font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Collections</span>
              <h2 className="text-6xl md:text-7xl font-display">Наши Шедевры</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Все", "Тренды", "Арт-фрукты", "Наборы", "Премиум"].map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[10px] uppercase tracking-widest border border-magenta/20 rounded-full transition-all duration-500 ${activeCategory === cat ? "bg-magenta text-white" : "hover:bg-magenta hover:text-white"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative rounded-3xl border border-magenta/10 shadow-xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-chocolate/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-8 py-3 bg-white text-magenta font-bold uppercase tracking-[0.2em] text-[10px] rounded-full shadow-2xl">Посмотреть</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-magenta/50 uppercase tracking-[0.3em] text-[8px] mb-2 block font-bold">{product.category}</span>
                  <h3 className="text-2xl font-display mb-3 text-chocolate group-hover:text-magenta transition-colors duration-500">{product.name}</h3>
                  <p className="text-magenta font-bold tracking-widest">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Editorial Masonry */}
      <section id="Галерея" className="py-40 bg-light-bg2 relative">
        {/* Vertical Label */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="text-[10px] uppercase tracking-[1em] text-magenta/20 font-bold vertical-text">
            Visual Inspiration
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="mb-16">
                <span className="text-magenta font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">Gallery</span>
                <h2 className="text-7xl md:text-9xl font-display tracking-tighter">Artistry</h2>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="aspect-[4/5] overflow-hidden rounded-3xl border border-magenta/10 shadow-2xl"
                >
                  <img src={GALLERY[0]} alt="Gallery 0" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-[4/5] overflow-hidden rounded-3xl border border-magenta/10 shadow-2xl mt-12"
                >
                  <img src={GALLERY[1]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-3xl border border-magenta/10 shadow-2xl"
              >
                <img src={GALLERY[2]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="aspect-[3/4] overflow-hidden rounded-3xl border border-magenta/10 shadow-2xl"
              >
                <img src={GALLERY[3]} alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Baking Maniac Style */}
      <section className="py-40 relative overflow-hidden bg-light-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-magenta/10 shadow-2xl relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=1000" 
                  alt="Process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-magenta/10 blur-[100px] rounded-full z-0" />
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden lg:block z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-40 h-40 border border-dashed border-magenta/30 rounded-full flex items-center justify-center"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] text-magenta font-bold">Handmade with Love • </span>
                </motion.div>
              </div>
            </div>

            <div>
              <span className="text-magenta font-bold tracking-[0.5em] text-[10px] uppercase mb-8 block">The Process</span>
              <h2 className="text-6xl md:text-8xl font-display mb-16 tracking-tighter leading-none text-chocolate">Как мы <br /> творим</h2>
              
              <div className="space-y-12">
                {[
                  { step: "01", title: "Выбор Ягод", desc: "Мы лично отбираем каждую ягоду, чтобы она была идеальной формы и спелости." },
                  { step: "02", title: "Темперирование", desc: "Соблюдаем строгий температурный режим для идеального блеска бельгийского шоколада." },
                  { step: "03", title: "Декор", desc: "Каждый десерт украшается вручную, превращаясь в маленькое произведение искусства." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-10 group"
                  >
                    <span className="text-magenta/20 font-display text-6xl group-hover:text-magenta transition-colors duration-500">{item.step}</span>
                    <div>
                      <h4 className="text-2xl font-display mb-3 tracking-tight text-chocolate">{item.title}</h4>
                      <p className="text-chocolate/60 leading-relaxed font-serif italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Контакты" className="py-40 border-t border-magenta/5 relative">
        {/* Vertical Label */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="text-[10px] uppercase tracking-[1em] text-magenta/20 font-bold vertical-text rotate-180">
            Contact Our Studio
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24">
          <div>
            <span className="text-magenta font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Get in touch</span>
            <h2 className="text-6xl md:text-8xl font-display mb-12 leading-tight text-chocolate">Свяжитесь <br /> с нами</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 rounded-full border border-magenta/20 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-magenta mb-3 font-bold">Телефон / WhatsApp</p>
                  <p className="text-3xl font-display text-chocolate">+7 (700) 000-00-00</p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 rounded-full border border-magenta/20 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-magenta mb-3 font-bold">Адрес Студии</p>
                  <p className="text-3xl font-display text-chocolate">г. Алматы, ул. Абая 10</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-magenta/5 blur-3xl rounded-full" />
            <div className="relative bg-white/80 backdrop-blur-2xl p-12 rounded-[2.5rem] border border-magenta/10 shadow-2xl">
              <h3 className="text-3xl font-display mb-10 text-chocolate">Оставить заявку</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input type="text" className="w-full bg-transparent border-b border-magenta/20 py-4 focus:border-magenta outline-none transition-all text-chocolate placeholder:text-chocolate/30" placeholder="Ваше имя" />
                </div>
                <div className="relative">
                  <input type="tel" className="w-full bg-transparent border-b border-magenta/20 py-4 focus:border-magenta outline-none transition-all text-chocolate placeholder:text-chocolate/30" placeholder="Телефон" />
                </div>
                <div className="relative">
                  <textarea className="w-full bg-transparent border-b border-magenta/20 py-4 focus:border-magenta outline-none transition-all h-32 text-chocolate placeholder:text-chocolate/30 resize-none" placeholder="Ваше сообщение"></textarea>
                </div>
                <button className="w-full py-6 bg-magenta text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] transition-all duration-500 rounded-full shadow-2xl shadow-magenta/40">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-magenta/10 bg-light-bg2">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <Logo className="justify-center mb-12 scale-125" />
          <div className="flex justify-center gap-12 mb-16 text-[10px] uppercase tracking-[0.4em] text-chocolate/40">
            <a href="#Главная" className="hover:text-magenta transition-colors">Главная</a>
            <a href="#Каталог" className="hover:text-magenta transition-colors">Каталог</a>
            <a href="#Галерея" className="hover:text-magenta transition-colors">Галерея</a>
            <a href="#Контакты" className="hover:text-magenta transition-colors">Контакты</a>
          </div>
          <div className="flex justify-center gap-8 mb-16">
            <a href="https://www.instagram.com/chocolova_kz/" target="_blank" className="w-14 h-14 rounded-full border border-magenta/20 flex items-center justify-center text-magenta hover:bg-magenta hover:text-white transition-all duration-500">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-chocolate/30 text-[10px] uppercase tracking-[0.5em]">© 2024 Chocolova_kz. Art Fruits Studio Almaty.</p>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-light-bg/98 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative bg-white/95 backdrop-blur-3xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row border border-magenta/20 rounded-[3rem] shadow-2xl"
            >
              <button 
                className="absolute top-10 right-10 z-10 text-chocolate/40 hover:text-magenta transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={32} />
              </button>
              
              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="md:w-1/2 p-16 flex flex-col justify-center">
                <span className="text-magenta uppercase tracking-[0.4em] text-[10px] mb-6 font-bold">{selectedProduct.category}</span>
                <h2 className="text-5xl md:text-6xl font-display mb-6 leading-tight text-chocolate">{selectedProduct.name}</h2>
                <p className="text-3xl text-magenta font-display mb-10">{selectedProduct.price}</p>
                <p className="text-chocolate/60 text-lg font-serif italic mb-12 leading-relaxed">
                  {selectedProduct.description}
                </p>
                <div className="space-y-6">
                  <button className="w-full py-6 bg-magenta text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] transition-all duration-500 rounded-full shadow-2xl shadow-magenta/40 flex items-center justify-center gap-4">
                    Заказать через WhatsApp <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-[10px] uppercase tracking-[0.3em] text-chocolate/30">Доставка по всему Алматы</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
