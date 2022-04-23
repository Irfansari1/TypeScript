import React from 'react'


type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: `${HorizontalPosition}-${VerticalPosition}`
}

export const Toast = ({position}: ToastProps) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}

