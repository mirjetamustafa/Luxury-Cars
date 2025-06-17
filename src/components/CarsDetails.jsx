import { RiCloseLargeFill } from 'react-icons/ri'

const CarsDetails = ({ details, setDetails }) => {
  return (
    <div>
      {details && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center overflow-auto">
          <div className="bg-white w-[90%] md:w-300 h-170  rounded-lg overflow-hidden relative">
            <div className="h-[400px] overflow-hidden rounded-t-md">
              <img
                src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
              <button
                className="float-end text-xl absolute top-0 right-0 m-6 bg-white rounded-full p-2 cursor-pointer"
                onClick={() => setDetails(false)}
              >
                <RiCloseLargeFill />
              </button>
            </div>

            <div className="md:flex justify-between mx-9 my-5">
              <div className="">
                <h1 className="md:text-2xl text-3xl font-bold">
                  Porsche 911 Carrera
                </h1>
                <span className="text-gray-500">Sports</span>
              </div>
              <div className="max-md:float-right max-md:mr-13 mt-3">
                <h1 className="text-2xl font-bold ml-7">$106,100</h1>
                <span className="text-gray-500 text-sm">
                  Lease from $1299/mo
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarsDetails
