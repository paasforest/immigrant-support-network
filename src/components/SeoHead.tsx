import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath } from '../lib/seo'

export default function SeoHead() {
  const location = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(location.pathname)
    if (!seo) return

    document.title = seo.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', seo.description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', seo.canonical)

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    if (seo.ogTitle) setOg('og:title', seo.ogTitle)
    if (seo.ogDescription) setOg('og:description', seo.ogDescription)
    setOg('og:url', seo.canonical)
  }, [location.pathname])

  return null
}
