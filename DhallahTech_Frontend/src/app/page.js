"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


const splashLogoPath = "/image-removebg-preview.png";      
const headerLogoPath = "/logo-icon.png";    
const placeholderLogo = "https://placehold.co/600x200/ffffff/5E3085?text=ضالتك";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function App() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[#E6E6FA] bg-gradient-to-br from-[#E6E6FA] via-[#ececec] to-[#8955bc] bg-no-repeat bg-fixed flex flex-col justify-between overflow-x-hidden">   
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=El+Messiri:wght@600;700&display=swap" rel="stylesheet" />

     
      <div className="absolute top-[-5%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-br from-[#E6E6FA]/15 via-[#C9B1E6]/5 to-transparent blur-[80px] md:blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-tr from-[#9966CC]/15 via-transparent to-transparent blur-[80px] md:blur-[100px] pointer-events-none z-0" />

      <motion.header 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full px-4 md:px-12 py-3.5 flex items-center justify-between bg-white/70 backdrop-blur-md border-b border-purple-100/30 sticky top-0 z-50 shadow-[0_2px_20px_-10px_rgba(94,48,133,0.05)]"
      >
        <img
          src={headerLogoPath}
          alt="Logo"
          className="h-8 md:h-9 w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => router.push("/")}
        />
        
        <div className="flex items-center gap-1.5 sm:gap-3">
        
          
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/signup")}
            className="text-[#5E3085] hover:text-[#4A2669] text-xs sm:text-sm font-bold px-3 py-2 rounded-xl hover:bg-purple-50 flex items-center gap-1.5 transition-colors"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <RegisterIcon />
            <span className="hidden sm:inline">إنشاء حساب</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/login")}
            className="bg-[#5E3085] text-white px-4 sm:px-5 py-2 rounded-xl text-xs font-bold shadow-sm hover:bg-[#4A2669] flex items-center gap-1.5 transition-all"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <LoginIcon />
            <span>تسجيل الدخول</span>
          </motion.button>
        </div>
      </motion.header>

     
      <main className="w-full flex-1 flex flex-col items-center relative z-10">
        <SplashScreen router={router} />
      </main>

    
      <footer className="w-full py-6 text-center bg-white border-t border-gray-100 relative z-30 mt-auto">
        <p className="text-gray-400 text-xs font-bold tracking-wide px-4" style={{ fontFamily: "'Cairo', sans-serif" }}>
          جميع الحقوق محفوظة © منصة ضالتك 2026
        </p>
      </footer>
    </div>
  );
}

const SplashScreen = ({ router }) => (
  <div className="w-full flex flex-col items-center text-center">
    
  
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto pt-10 pb-8 px-4 md:px-8 flex flex-col items-center justify-center gap-5 relative z-10 text-center"
    >
     
      <motion.div variants={itemVariants} className="mb-1 flex items-center justify-center w-full max-w-[220px] md:max-w-[280px]">
        <img src={splashLogoPath} onError={(e) => { e.currentTarget.src = placeholderLogo; }} alt="DhallaTec Logo" className="w-full h-auto object-contain" />
      </motion.div>

      
      <motion.div variants={itemVariants} className="py-1 px-2 flex items-center justify-center w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black leading-tight text-[#1A0B2E] text-center tracking-tight" style={{ fontFamily: "'El Messiri', sans-serif" }}>
          ضالتك.. تعود بكل سهولة
        </h1>
      </motion.div>
      
      <motion.p variants={itemVariants} className="text-gray-600 text-xs md:text-base leading-relaxed max-w-2xl mx-auto font-medium px-2" style={{ fontFamily: "'Cairo', sans-serif" }}>
            ضالتك منصة رقمية ذكية تعنى بإعادة المفقودات لذويها بسرعة ودقة، عبر نظام تطابق مدعوم بالذكاء الاصطناعي، تربط الأفراد بالجهات المحلية في منطقة مكة المكرمة ضمن تجربة موثوقة وسلسة ضمن حل تقني مبتكر يعزز جودة الحياة ويدعم مستهدفات رؤية المملكة العربية السعودية 2030.
               </motion.p>
    </motion.div>

 
    <div className="w-full flex flex-col items-center relative z-20">
  
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-r from-purple-50/10 via-purple-100/50 to-purple-40/10 py-4 mb-8 border-y border-purple-500/10 backdrop-blur-sm flex items-center justify-center"
      >
        <h2 className="text-[#250A3F] text-xl md:text-2xl font-black text-center tracking-wide flex items-center gap-2.5" style={{ fontFamily: "'El Messiri', sans-serif" }}>
          <span className="w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse" />
           استعد ضالتك
          <span className="w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse" />
        </h2>
      </motion.div>

     
      <div className="w-full max-w-5xl px-4 md:px-8 mb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
        >
          <FeatureCard number="1" title="الإبلاغ عن المفقود" desc="قم بتسجيل تقرير مفصل عن العنصر المفقود " icon={<FileIcon />} />
          <FeatureCard number="2" title="المطابقة الذكية" desc="يقوم النظام تلقائياً بمطابقة المفقودات مع العناصر الموجودة في مكاتب المفقودات" icon={<SparkleIcon />} />
          <FeatureCard number="3" title= "التحقق من الملكية"desc="يتم التحقق من ملكية العنصر عبر أسئلة ذكية قبل تسليمه لصاحبه" icon={<BoxIcon />} />
        </motion.div>
      </div>
    </div>


    <div className="w-full flex flex-col items-center relative z-20">

      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        className="w-full bg-gradient-to-r from-purple-50/10 via-purple-100/40 to-purple-50/10 py-4 mb-8 border-y border-purple-500/10 backdrop-blur-sm flex items-center justify-center"
      >
        <h2 className="text-[#250A3F] text-xl md:text-2xl font-black text-center tracking-wide flex items-center gap-2.5" style={{ fontFamily: "'El Messiri', sans-serif" }}>
          <span className="w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse" />
          نطاق التغطية
          <span className="w-2 h-2 rounded-full bg-[#5E3085] block animate-pulse" />
        </h2>
      </motion.div>

  
      <div className="w-full max-w-4xl px-4 md:px-8 mb-16">
  <motion.div 
    initial={{ scale: 0.98, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="w-full text-center bg-white p-5 md:p-8 rounded-[24px] border border-purple-100/40 shadow-[0_15px_40px_rgba(94,48,133,0.03)] flex flex-col items-center"
  >
    <p className="text-[#5E3085] text-xs font-bold mb-4 tracking-wide bg-purple-50 inline-block px-4 py-1.5 rounded-full border border-purple-100" style={{ fontFamily: "'Cairo', sans-serif" }}>
      مكاتب المفقودات المسجلة بالنظام
    </p>
    <p className="text-gray-600 text-xs md:text-sm mb-6 max-w-xl mx-auto leading-relaxed font-semibold px-2" style={{ fontFamily: "'Cairo', sans-serif" }}>
      يمكنك تصفح الخريطة للتعرف على نقاط الاستلام والتسليم المعتمدة لمنصة ضالتك في منطقة مكة المكرمة.
    </p>
    
   
    <div className="bg-white p-1.5 rounded-[18px] shadow-sm border-2 border-gray-100 overflow-hidden w-full aspect-[4/3] md:aspect-[21/9] relative">
      <div className="w-full h-full overflow-hidden rounded-[14px] relative">
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=15MW32QGlRg5rr-QMsP9P3d3-t2COdEc&ehbc=2E312F" 
          className="absolute w-full border-0"
          style={{
            height: 'calc(100% + 54px)', 
            top: '-54px',               
          }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </motion.div>
</div>
    </div>

  </div>
);


const FeatureCard = ({ number, title, desc, icon }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 35px rgba(94,48,133,0.06)", borderColor: "rgba(164,130,199,0.3)" }}
    className="bg-white p-5 md:p-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.01)] border border-gray-100/80 text-right w-full transition-all duration-300 cursor-pointer group relative z-10 flex flex-col justify-between"
  >
    <div>
      <div className="flex items-center gap-3 mb-3 justify-start">
        <div className="w-9 h-9 bg-purple-50 text-[#5E3085] rounded-xl flex items-center justify-center font-bold text-xs shadow-sm shrink-0">
          {number}
        </div>
        <div className="text-[#5E3085] shrink-0 scale-100 md:scale-110 mr-0.5">{icon}</div>
        <h3 className="text-[#1A0B2E] font-bold text-lg text-right pr-0.5 tracking-tight" style={{ fontFamily: "'El Messiri', sans-serif" }}>{title}</h3>
      </div>
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium text-right group-hover:text-gray-800 transition-colors duration-300" style={{ fontFamily: "'Cairo', sans-serif" }}>{desc}</p>
    </div>
  </motion.div>
);



const RegisterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
);
const LoginIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
);
const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
);
const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
);
const BoxIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m7.5 4.21 4.5 2.6 4.5-2.6" /><path d="m3 8 9 5.19 9-5.19" /><path d="M12 13.19V21.5" /></svg>
);