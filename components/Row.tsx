import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
}
function Row({ title, movies }: Props) {
  console.log('Movie')
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
          className=" absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-5 transition
        ease-out hover:scale-125 group-hover:opacity-100"
        />

        <div
          className="flex flex-row items-center space-x-1 overflow-x-scroll 
        scrollbar-hide md:space-x-3 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-5 transition
        ease-out hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  )
}

export default Row
