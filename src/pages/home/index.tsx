import { ShowAllColors } from '@/components'
import React from 'react'

export default function Home() {
  return (
    <div className="text-white">
      <h1>Custom Template</h1>
      <div className='absolute right-0 bottom-0 transform scale-80'>
        <ShowAllColors />
      </div>
    </div>
  )
}

