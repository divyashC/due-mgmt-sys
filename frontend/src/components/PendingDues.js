import React from 'react'

const PendingDues = () => {
  return (
    <div className="flex flex-col items-center px-3 align-middle">
      <div class="bg-white mt-5 mb-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl class="flex gap-x-10 gap-y-5 text-center ">
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-blue-50 p-5 rounded-lg">
              <dt class="text-base leading-7 text-sky-950">Amount Collected</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
                Nu. 54,000
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-2 bg-blue-50 p-5 rounded-lg">
              <dt class="text-base leading-7 text-sky-950">Amount Due</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-sky-900 sm:text-5xl">
                Nu. 12,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
      </div>

  )
}

export default PendingDues