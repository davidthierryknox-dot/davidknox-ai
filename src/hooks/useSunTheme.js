import { useState, useEffect } from 'react'

// Calculate sunrise/sunset using simplified solar position algorithm
function getSunTimes(lat, lng, date = new Date()) {
  const rad = Math.PI / 180
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000)

  // Solar declination
  const declination = -23.45 * Math.cos(rad * (360 / 365) * (dayOfYear + 10))

  // Hour angle for sunrise/sunset (when sun is at horizon, -0.833 degrees for atmospheric refraction)
  const cosHourAngle = (Math.sin(-0.833 * rad) - Math.sin(lat * rad) * Math.sin(declination * rad)) /
    (Math.cos(lat * rad) * Math.cos(declination * rad))

  // Handle polar day/night
  if (cosHourAngle > 1) return { sunrise: null, sunset: null, isPolarlNight: true }
  if (cosHourAngle < -1) return { sunrise: null, sunset: null, isPolarDay: true }

  const hourAngle = Math.acos(cosHourAngle) / rad

  // Solar noon (approximate, ignoring equation of time for simplicity)
  const solarNoon = 12 - (lng / 15)

  const sunriseHour = solarNoon - (hourAngle / 15)
  const sunsetHour = solarNoon + (hourAngle / 15)

  const sunrise = new Date(date)
  sunrise.setHours(Math.floor(sunriseHour), (sunriseHour % 1) * 60, 0, 0)

  const sunset = new Date(date)
  sunset.setHours(Math.floor(sunsetHour), (sunsetHour % 1) * 60, 0, 0)

  return { sunrise, sunset }
}

function isDaytime(lat, lng) {
  const now = new Date()
  const { sunrise, sunset, isPolarDay, isPolarNight } = getSunTimes(lat, lng, now)

  if (isPolarDay) return true
  if (isPolarNight) return false

  return now >= sunrise && now < sunset
}

export function useSunTheme() {
  const [theme, setTheme] = useState(null)
  const [location, setLocation] = useState(null)
  const [manualOverride, setManualOverride] = useState(null) // null = auto, 'light' or 'dark' = manual

  // Fetch location via IP
  useEffect(() => {
    async function fetchLocation() {
      try {
        // Using ip-api.com (free, no key required, allows CORS)
        const res = await fetch('https://ip-api.com/json/?fields=lat,lon,status')
        const data = await res.json()

        if (data.status === 'success') {
          setLocation({ lat: data.lat, lng: data.lon })
        } else {
          setLocation(null)
        }
      } catch {
        setLocation(null)
      }
    }

    fetchLocation()
  }, [])

  // Determine theme based on sun position
  useEffect(() => {
    if (location === null) {
      // Location fetch still pending or failed - use system preference as fallback
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
      return
    }

    function updateTheme() {
      const daytime = isDaytime(location.lat, location.lng)
      setTheme(daytime ? 'light' : 'dark')
    }

    updateTheme()

    // Check every minute for sunrise/sunset transitions
    const interval = setInterval(updateTheme, 60000)
    return () => clearInterval(interval)
  }, [location])

  // Apply theme to document
  useEffect(() => {
    const activeTheme = manualOverride || theme
    if (!activeTheme) return

    if (activeTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, manualOverride])

  // Keyboard shortcut: Escape to toggle
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        setManualOverride((prev) => {
          if (prev === null) return 'dark'
          if (prev === 'dark') return 'light'
          return null // cycle back to auto
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return manualOverride || theme
}
