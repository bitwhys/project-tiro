import React, { type ReactNode } from 'react'
import { cx } from 'class-variance-authority'

export type SectionProps = {
  children: ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cx(className)}>
      <div className="h-full px-1 sm:px-20 xl:px-8">
        <div className="max-w-mobile sm:max-w-tablet xl:max-w-desktop mx-auto h-full py-8">{children}</div>
      </div>
    </section>
  )
}

export default Section
