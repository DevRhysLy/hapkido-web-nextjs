import React from "react"

export default function Author({ author }) {
  return (
    <div className="author">
      <img
        src={author.fields.avatar.fields.file.url}
        alt={author.fields.name}
      />
      <div className="info">
        <span className="name">{author.fields.name}</span>
        <span className="bio">{author.fields.bio}</span>
      </div>
      </div>
  )
}