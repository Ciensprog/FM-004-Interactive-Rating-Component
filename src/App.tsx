import { RadioGroup } from '@headlessui/react'

import { IconPayment } from '@/assets/icons/payment'
import { IconStar } from '@/assets/icons/start'

import { useRatingData } from '@/contexts/RatingProvider'

import { Attribution } from '@/components/Attribution'
import { BaseCard } from '@/components/BaseCard'
import { RatingOption } from '@/components/RatingOption'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

const ratings = [1, 2, 3, 4, 5]

export function App() {
  const { currentRating, isSubmitted, onSubmit, updateRating } = useRatingData()

  return (
    <>
      <main className="my-10 z-10">
        {!isSubmitted && (
          <BaseCard>
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

            <form className="mt-6" onSubmit={onSubmit}>
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

              <button
                className="bg-orange-normal font-bold mt-8 py-3 rounded-[1.375rem] uppercase text-slate-50 tracking-[0.125rem] transition-colors w-full [&:is(:not([disabled]))]:hover:bg-slate-50 [&:is(:not([disabled]))]:hover:text-orange-normal disabled:cursor-not-allowed"
                type="submit"
                disabled={currentRating === null}
              >
                Submit
              </button>
            </form>
          </BaseCard>
        )}

        {isSubmitted && (
          <BaseCard className="pb-11 pt-11">
            <div className="flex items-center justify-center rounded-full w-full">
              <span className="h-[6.75rem] w-[10.125rem]">
                <IconPayment />
              </span>
            </div>
            <div className="my-8 text-center text-orange-normal">
              <span className="bg-blue-dark leading-6 px-5 py-1 rounded-[1.375rem] text-[0.9375rem]">
                You selected {currentRating} out of 5
              </span>
            </div>
            <h1 className="font-bold leading-9 text-[1.75rem] text-center text-slate-50">
              Thank you!
            </h1>
            <p className="leading-6 mt-2.5 pr-2 text-[0.9375rem] text-center text-grey-light">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </BaseCard>
        )}
      </main>

      <Attribution />
    </>
  )
}
