import { RadioGroup } from '@headlessui/react'

import { IconStar } from '@/assets/icons/start'

import { useRatingData } from '@/contexts/RatingProvider'

import { Attribution } from '@/components/Attribution'
import { RatingOption } from '@/components/RatingOption'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

const ratings = [1, 2, 3, 4, 5]

export function App() {
  const { currentRating, updateRating } = useRatingData()

  return (
    <>
      <main className="my-10 z-10">
        <div className="bg-[radial-gradient(98.96%_98.96%_at_50%_0%,#232A34_0%,#181E27_100%)] p-8 rounded-[1.875rem] max-w-[25.75rem]">
          <div className="bg-blue-dark flex h-12 items-center justify-center mb-[1.875rem] rounded-full w-12">
            <span className="h-4 text-orange-normal w-4">
              <IconStar />
            </span>
          </div>
          <h1 className="font-bold leading-9 text-[1.75rem] text-slate-50">
            How did we do?
          </h1>
          <p className="mt-[0.4375rem] text-[0.9375rem] text-grey-light">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <form className="mt-6">
            <RadioGroup
              className="flex justify-between"
              name="rating"
              value={currentRating}
              onChange={updateRating}
            >
              {ratings.map((rating) => (
                <RatingOption value={rating} key={rating} />
              ))}
            </RadioGroup>
          </form>
        </div>
      </main>

      <Attribution />
    </>
  )
}
