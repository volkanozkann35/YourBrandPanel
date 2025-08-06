import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { translations } = useLanguage()
  return <p>{translations.about_text}</p>
}
