'use client'

import { motion } from 'framer-motion'
import React from 'react'

export const NavMotionItem = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
