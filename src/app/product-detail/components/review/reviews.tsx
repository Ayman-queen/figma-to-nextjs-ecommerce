import React from 'react'
import ReviewCard from './reviewcard'
import { Button } from '@/components/Ui/button'

function Reviews() {
  return (
    <div className='mt-[39px] flex flex-col justify-center items-center'>
        <ReviewCard />
        <Button className='w-[230px] h-[52px] mt-[36.42px] bg-transparent text-black text-[16px] rounded-full border-[1px] border-[rgba(0,0,0,0.1)]'>
        Load More Reviews
        </Button>
    </div>
  )
}

export default Reviews