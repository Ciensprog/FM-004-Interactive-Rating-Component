import { Attribution } from '@/components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <div className="bg-[radial-gradient(98.96%_98.96%_at_50%_0%,#232A34_0%,#181E27_100%)] p-8 rounded-[1.875rem] max-w-[25.75rem]">
          <h1 className="font-bold text-3xl text-slate-50">How did we do?</h1>
          <p className="mt-[0.4375rem] text-[0.9375rem] text-grey-light">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
      </main>

      <Attribution />
    </>
  )
}
