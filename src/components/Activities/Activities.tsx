"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import { useTranslation } from "react-i18next"
import "./Activities.css"

interface Activity {
  name: string
  description: string
  images: string[]
}

const activities: Activity[] = [
  {
    name: "Trekking",
    description:
      "Trekking en el cerro Mailhos ubicado a 90 kilómetros de la ciudad de Mendoza, en Valle del Sol, Las Vegas. Tiene un recorrido de 8 kilómetros de ida y vuelta, con una duración de 3 horas aproximadamente y una altitud de casi 3.000 metros sobre el nivel del mar. Dificultad media-baja, sin dificultad técnica y vistas espectaculares.",
    images: ["/images/Trekking.png", "/images/cordilleracaballo.jpg", "/images/tekking2.jpg"],
  },
  {
    name: "Trekking y Rafting",
    description:
      "Rafting de 12 kilómetros con duración de 1 hora aproximadamente por el Río Mendoza. Recorrido emocionante ideal para familias y grupos de amigos.",
    images: ["/images/rafting2.jpg", "/images/Rafting.jpg", "/images/rafting1.jpg"],
  },
  {
    name: "Trekking y Rappel",
    description:
      "Trekking y Rappel en Garganta del Diablo. Ubicado a 80 kilómetros de la ciudad de Mendoza, El Salto, Potrerillos. Recorrido de 2 horas, de dificultad media-baja a 1700 metros sobre el nivel del mar.",
    images: ["/images/Rappel.jpeg", "/images/gargantasup.jpg", "/images/gargantainf.jpg"],
  },
]

const ImageSlider: React.FC<{ images: string[]; name: string }> = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  const handleImageChange = useCallback(
    (direction: "next" | "prev") => {
      setCurrentIndex((prevIndex) => {
        const totalImages = images.length
        return direction === "next" ? (prevIndex + 1) % totalImages : (prevIndex - 1 + totalImages) % totalImages
      })
    },
    [images.length],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      handleImageChange("next")
    }, 6000)

    return () => clearInterval(timer)
  }, [handleImageChange])

  return (
    <div className="activity-slider">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={t(`activities.${name}`) || name}
        className="activity-image"
        loading="lazy"
      />
      <button
        className="slider-button prev"
        onClick={(e) => {
          e.preventDefault()
          handleImageChange("prev")
        }}
        aria-label="Previous image"
      >
        <span aria-hidden="true">&#10094;</span>
      </button>
      <button
        className="slider-button next"
        onClick={(e) => {
          e.preventDefault()
          handleImageChange("next")
        }}
        aria-label="Next image"
      >
        <span aria-hidden="true">&#10095;</span>
      </button>
    </div>
  )
}

const Activities: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="activities-section">
      <div className="activities-container">
        <h2 className="activities-title">{t("activities.title")}</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <HashLink smooth to="/#contact-info" key={index} className="activity-card">
              <div className="activity-title-container">
                <h3 className="activity-name">{t(`activities.${activity.name}`)}</h3>
              </div>
              <div className="activity-image-container">
                <ImageSlider images={activity.images} name={activity.name} />
              </div>
              <div className="activity-description-container">
                <p className="activity-description">{t(`activities.${activity.name}Desc`)}</p>
              </div>
            </HashLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities

