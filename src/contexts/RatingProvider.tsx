import type { FormEvent, PropsWithChildren } from 'react'

import { createContext, useContext, useState } from 'react'

/*
|-------------------------------------------------------------------------------
| Context
|-------------------------------------------------------------------------------
*/

type RatingProviderType = {
  currentRating: number | null
  isSubmitted: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  updateRating: (value: number | null) => void
}

const RatingContext = createContext<RatingProviderType | null>(null)

export function useRatingData() {
  const context = useContext(RatingContext)

  if (!context) {
    throw new Error('useRatingData must be used within a RatingProvider')
  }

  return context
}

export function RatingProvider({ children }: PropsWithChildren) {
  const [currentRating, setCurrentRating] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit: RatingProviderType['onSubmit'] = (event) => {
    event.preventDefault()

    setIsSubmitted(true)
  }

  return (
    <RatingContext.Provider
      value={{
        currentRating,
        isSubmitted,
        onSubmit,
        updateRating: setCurrentRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  )
}
