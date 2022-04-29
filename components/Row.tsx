import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
}
function Row({ title, movies }: Props) {
  const rowRefrance = useRef<HTMLDivElement>(null)
  const [isMove, setIsMove] = useState(false)

  const handleScroll = (dirction: string) => {
    setIsMove(true)
    console.log(
      'width: ',
      rowRefrance.current?.clientWidth,
      ' left :',
      rowRefrance.current?.scrollLeft
    )

    if (rowRefrance.current) {
      const { clientWidth, scrollLeft } = rowRefrance.current
      const scrollTo =
        dirction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRefrance.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }
  return (
    <div className="h-40 space-y-1 md:space-y-2">
      <h1
        className="w-60 cursor-pointer text-sm font-semibold 
      text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl"
      >
        {title}
      </h1>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={` absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-5 transition
        ease-out hover:scale-125 group-hover:opacity-100 ${
          !isMove && 'hidden'
        }`}
          onClick={() => handleScroll('left')}
        />

        <div
          className="flex flex-row items-center space-x-1 overflow-x-scroll 
        scrollbar-hide md:space-x-3 md:p-2"
          ref={rowRefrance}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-5 transition
        ease-out hover:scale-125 group-hover:opacity-100"
          onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  )
}

export default Row
