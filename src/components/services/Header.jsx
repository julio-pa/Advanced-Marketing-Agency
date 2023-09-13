import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className=" max-w-3xl xl:pt-40 xl:pb-64 lg:pb-48 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-32  sm:text-7xl">
                Software Development Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img src="https://th.bing.com/th/id/R.9e91b78ff42d738ef3db7a96764e3854?rik=%2bYGnCYLRZnROWA&pid=ImgRaw&r=0" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
