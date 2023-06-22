import type { PropsWithChildren } from 'react'

import { createContext, useContext, useState } from 'react'

/*
|-------------------------------------------------------------------------------
| Context
|-------------------------------------------------------------------------------
*/

type RatingProviderType = {
  currentRating: number | null
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
  let [currentRating, setCurrentRating] = useState<number | null>(null)

  return (
    <RatingContext.Provider
      value={{
        currentRating,
        updateRating: setCurrentRating,
      }}
    >
      {children}
    </RatingContext.Provider>
  )
}
