import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from 'react'

function CategoriesHeader({ categories }) {

  const location = useLocation()
  const navigate = useNavigate()

  // SEARCH
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => navigate("/s=" + term), 0.2);
    setTerm("");
  };


  return (
    <div className="w-full bg-gray-100 py-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">

          <div className="space-x-8 px-6">
            <div className="relative">
              <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <ul
                  role="list"

                  className="mx-4 inline-flex space-x-6 sm:mx-6 "
                >
                  <Link to='/blog'
                    className={`${location.pathname === '/blog' ? "text-red-500 bg-white" : "text-gray-900 hover:text-red-500 border border-gray-100 hover:border-gray-200"} py-2 px-6   rounded-md text-lg font-regular`}>
                    All
                  </Link>
                  {
                    categories && categories.map((category, index) => (
                      <Link key={index} to={`/category/${category.slug}`}
                        className={`${location.pathname === `/category/${category.slug}` ? "text-red-500 bg-white" : "text-gray-900 border border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-lg font-regular`}>
                        {category.name}
                      </Link>
                    ))
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
        <form onSubmit={(e) => onSubmit(e)} className="relative col-span-3 mr-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
          <input
            id='search'
            name='search'
            value={term}
            onChange={(e) => handleChange(e)}
            type='search'
            className={`
              py-2.5 pl-10 pr-3 
              block w-full rounded-md
              border border-gray-200
            focus:border-gray-200 focus:ring-gray-200
              focus:outline-none focus:ring-1
            placeholder-gray-600 focus:placeholder-gray-500
                        `}
          />
        </form>
      </div>
    </div>
  )
}
export default CategoriesHeader