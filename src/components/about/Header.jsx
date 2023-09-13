import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className=" max-w-3xl xl:pt-40 xl:pb-32 lg:pb-40 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-8  sm:text-7xl">
                About Us
              </h1>
              <p className="mt-6 text-2xl leading-10 text-black max-w-5xl ">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
