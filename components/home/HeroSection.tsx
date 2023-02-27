import Header from '@/components/shared/Header'
import Image from 'next/image'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import courseHeroIllustration from '@/assets/course-hero-illustration.svg'
import topicsHeroIllustration from '@/assets/topics-hero-illustration.svg'
import roadmapsHeroIllustration from '@/assets/roadmaps-hero-illustration.svg'

export const meta = {
  title: 'Project Tiro: Metacademy Enhanced',
}
const HomePage = () => (
  <div className="relative">
    <Header />
    <div className="bg-orangeJuice px-6 py-24  sm:pt-32 sm:pb-40 lg:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-y-12 text-center text-white">
        <div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-sm leading-6 ring-1 ring-inset ring-white">
            Learn anything
          </span>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight tracking-wider text-white sm:text-5xl">
            Knowledge graphs for guided self learning
          </h1>
          <p className="mt-6 text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div>
            <label htmlFor="concept" className="sr-only">
              Concept
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-7 w-7 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="concept"
                id="concept"
                className="block w-full rounded-full border-2 border-white py-4 pl-12 text-neutral-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="search"
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-x-4  text-sm font-medium">
            <span className="uppercase tracking-wide opacity-60">popular:</span>
            <Link href="#" className="underline">
              Vector spaces
            </Link>
            <Link href="#" className="underline">
              Frontend Development
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto -mt-20 max-w-7xl rounded-3xl bg-white p-6 shadow-6">
      <div className="grid grid-cols-3 gap-x-6">
        <Link href="#" className="rounded-3xl border-4 border-transparent bg-blue-500 hover:border-black">
          <div className="flex h-97 w-full flex-col items-center gap-y-7 rounded-3xl bg-blue-500 p-3.5">
            <div className="aspect-w-3 aspect-h-2 relative w-full rounded-lg">
              <Image src={courseHeroIllustration} fill alt="playful illustration" />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="font-heading text-3xl tracking-wider text-neutral-1">Course Guides</h2>
              <p className="text-lg text-neutral-2">We realize ideas from simple to complex, everything becomes easy</p>
            </div>
          </div>
        </Link>
        <Link href="#" className="rounded-3xl border-4 border-transparent bg-orange-400 hover:border-black">
          <div className="flex h-97 w-full flex-col items-center gap-y-7 rounded-3xl bg-orange-400 p-3.5">
            <div className="aspect-w-3 aspect-h-2 relative w-full rounded-lg">
              <Image src={roadmapsHeroIllustration} fill alt="playful illustration" />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="font-heading text-3xl tracking-wider text-neutral-1">Roadmaps</h2>
              <p className="text-lg text-neutral-2">We realize ideas from simple to complex, everything becomes easy</p>
            </div>
          </div>
        </Link>
        <Link href="#" className="rounded-3xl border-4 border-transparent bg-neutral-3 hover:border-black">
          <div className="flex h-97 w-full flex-col items-center gap-y-7 rounded-3xl bg-neutral-3 p-3.5">
            <div className="aspect-w-3 aspect-h-2 relative w-full rounded-lg">
              <Image src={topicsHeroIllustration} fill alt="playful illustration" />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="font-heading text-3xl tracking-wider text-neutral-12">Browse topics</h2>
              <p className="text-lg text-neutral-11">
                We realize ideas from simple to complex, everything becomes easy
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
)
export default HomePage
