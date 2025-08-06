import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { translations } = useLanguage()
  return <h1>{translations.welcome}</h1>
}
