import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import App from './App'
import { absoluteUrl, getRouteSeo, SOCIAL_IMAGE, structuredData } from './seo'
import './styles.css'

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getRouteSeo(pathname)
    const pageUrl = absoluteUrl(pathname === '/' ? '/' : pathname)

    document.title = metadata.title
    upsertMeta('name', 'description', metadata.description)
    upsertMeta('property', 'og:title', metadata.title)
    upsertMeta('property', 'og:description', metadata.description)
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:image', SOCIAL_IMAGE)
    upsertMeta('name', 'twitter:title', metadata.title)
    upsertMeta('name', 'twitter:description', metadata.description)
    upsertMeta('name', 'twitter:image', SOCIAL_IMAGE)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = pageUrl

    const structuredDataScript = document.getElementById('structured-data')
    if (structuredDataScript) structuredDataScript.textContent = JSON.stringify(structuredData)
  }, [pathname])

  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SeoManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
