import { Movie } from '../typings'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { PlayIcon, InformationCircleIcon } from '@heroicons/react/solid'

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  // console.log('data', netflixOriginals)
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[80vh] lg:justify-end lg:pb-12">
      <div className=" absolute top-0 left-0 -z-10 h-[100vh] w-full">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className=" max-w-lg text-xs text-shadow md:max-w-lg md:text-lg lg:max-w-3xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex flex-row space-x-3">
        <button className="bannerBtn bg-white text-black">
          <PlayIcon className="inline h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerBtn bg-[gray]/70">
          More Info
          <InformationCircleIcon className="inline h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner
