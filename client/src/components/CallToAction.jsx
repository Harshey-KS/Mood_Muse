import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Finding it difficult to take the first step?
            </h2>
            <p className='text-gray-500 my-2'>
                We are here for you!
            </p>
            <Button className='rounded-tl-xl '>
                <a href="https://www.youtube.com/watch?v=2FGR-OspxsU" target='_blank' rel='noopener noreferrer'>
                    CHECK IT OUT
                </a>
            </Button>
        </div>
       
        <div className="p-7 flex-1 ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2FGR-OspxsU?si=sYT82f2R67hnc3f9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
    </div>
  )
}
