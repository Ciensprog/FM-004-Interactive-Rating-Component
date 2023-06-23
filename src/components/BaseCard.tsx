import type { PropsWithChildren } from 'react'

import clsx from 'clsx'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function BaseCard({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'bg-[radial-gradient(98.96%_98.96%_at_50%_0%,#232A34_0%,#181E27_100%)] p-8 rounded-[1.875rem] max-w-[25.75rem] w-full',
        className
      )}
    >
      {children}
    </div>
  )
}
