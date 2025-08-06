import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { translations } = useLanguage()
  return <p>{translations.contact_text}</p>
}
