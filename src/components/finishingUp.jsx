function FinishingUp() {
  return (
    <div className="p-12">
      <div>
        <h1 className="text-3xl font-bold text-blue-950">
          Finishing up
        </h1>

        <p className="text-gray-400 mt-2">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mt-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-blue-950">
              Arcade (Monthly)
            </h2>

            <button className="text-indigo-600 underline cursor-pointer">
              Change
            </button>
          </div>

          <p className="font-bold text-blue-950">
            $9/mo
          </p>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Online service
          </span>

          <span className="text-gray-600">
            +$1/mo
          </span>
        </div>

        <div className="flex justify-between mt-3">
          <span className="text-gray-400">
            Larger storage
          </span>

          <span className="text-gray-600">
            +$2/mo
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 px-6">
        <span className="text-gray-400">
          Total (per month)
        </span>

        <span className="text-2xl font-bold text-indigo-600">
          $12/mo
        </span>
      </div>
    </div>
  );
}

export default FinishingUp;