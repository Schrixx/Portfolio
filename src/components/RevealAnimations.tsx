import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
    children: ReactNode,
    className?: string,
}

type RevealStagProps = {
    children: ReactNode,
    className?: string,
    index: number,
}

const isMobile = window.innerWidth < 1024;

export const RevealVertical = ({children, className}: RevealProps) => {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.25 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const RevealLeft = ({children, className}: RevealProps) => {

  let motionAttributes = {
    variants: {
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0 },
    },
    transition: {duration: 1.5, delay: 0.3}
  }

  if (!isMobile) {
    motionAttributes = {
      variants: {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      },
      transition: {duration: 1, delay: 0.25}
    }
  }

  return (
    <motion.div
      variants={motionAttributes.variants}
      initial="hidden"
      whileInView="visible"
      transition={motionAttributes.transition}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const RevealRight = ({children, className}: RevealProps) => {

  let motionAttributes = {
    variants: {
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0 },
    },
    transition: {duration: 1.5, delay: 0.3}
  }

  if (!isMobile) {
    motionAttributes = {
      variants: {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      },
      transition: {duration: 1, delay: 0.25}
    }
  }

  return (
    <motion.div
      variants={motionAttributes.variants}
      initial="hidden"
      whileInView="visible"
      transition={motionAttributes.transition}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const RevealStaggered = (({children, className, index}: RevealStagProps) => {

  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ delay: 0.05 * index }}
    viewport={{ once: true }}
    className={className}
    >
      {children}
    </motion.div>
  )

})
