import type { RatingOptionProps } from '@/typings/components'

import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function RatingOption({ value }: RatingOptionProps) {
  return (
    <RadioGroup.Option
      className={clsx(
        'cursor-pointer flex h-[3.125rem] items-center justify-center overflow-hidden rounded-full transition-colors w-[3.125rem]',

        'bg-blue-dark text-grey-medium hover:bg-orange-normal hover:text-slate-50',
        'aria-checked:bg-grey-medium aria-checked:text-slate-50'
      )}
      value={value}
    >
      {value}
    </RadioGroup.Option>
  )
}
