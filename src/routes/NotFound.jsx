import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <h1>Not Found</h1>
    <h2>{useRouteError}</h2>
    </>
  )
}
