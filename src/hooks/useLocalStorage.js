// Hook personalizado para gestionar datos en localStorage.
// Permite guardar y recuperar información de forma persistente.

import { useState, useEffect } from 'react'

export const useLocalStorage = (key, initialValue) => {

  //  Inicializamos el estado leyendo localStorage
  const [value, setValue] = useState(() => {
    try {
      /**
       * Intentamos leer datos guardados
       * usando la clave recibida.
       */
      const stored = localStorage.getItem(key)
      //Si existen datos: 
      return stored 
      ? JSON.parse(stored) //convertimos JSON en Objeto JS
      : initialValue //si no el valor inicial
    
    } catch (error) {
      console.error("Error leyendo localStorage:", error)
      return initialValue
    }
  })

  // Guardamos en localStorage cada vez que cambia el valor
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error("Error guardando en localStorage:", error)
    }
  }, [key, value])

  return [value, setValue]
}