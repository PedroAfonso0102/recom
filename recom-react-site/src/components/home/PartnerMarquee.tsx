import { motion } from "framer-motion"

import logoMitsubishi from '../../assets/images/logo_mitsubishi.png'
import logo7leaders from '../../assets/images/logo_7leaders.png'
import logoBtfixo from '../../assets/images/logo_btfixo.png'
import logoKifix from '../../assets/images/logo_kifix.png'

const partners = [
  { name: "Mitsubishi Materials", logo: logoMitsubishi },
  { name: "7Leaders", logo: logo7leaders },
  { name: "BT Fixo", logo: logoBtfixo },
  { name: "Kifix", logo: logoKifix },
]

export function PartnerMarquee() {
  return (
    <div className="w-full bg-white border-y border-secondary/10 py-12 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-8 mb-8 text-center">
        <h3 className="text-sm font-heading font-black text-secondary/40 tracking-widest uppercase">
          Nossos Fornecedores & Parceiros Oficiais
        </h3>
      </div>

      <div className="flex">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex flex-none items-center gap-24 pr-24"
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
               <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
