"use client"

import React, { useState } from "react"
import "./focus-cards.css"

export const Card = React.memo(({ card, index, hovered, setHovered }) => {
  const isBlurred = hovered !== null && hovered !== index
  const isActive = hovered === index

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={`fc-card${isBlurred ? " fc-card-blurred" : ""}`}
    >
      <img className="fc-img" src={card.src || "/placeholder.svg"} alt={card.title} />
      <div className={`fc-overlay${isActive ? " is-visible" : ""}`}>
        <div className="fc-overlay-content">
          <div className="fc-title">{card.title}</div>
          {card.description ? <p className="fc-desc">{card.description}</p> : null}
        </div>
      </div>
    </div>
  )
})

Card.displayName = "Card"

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="fc-grid">
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  )
}
