export const Modal = ({ isOpen, setIsOpen, onSubmit, title, children }) => {
  return (
    isOpen && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border border-solid rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-3 border-b border-solid">
                <p className="text-xl font-semibold m-auto">{title}</p>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right leading-none outline-none focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="h-6 w-6 text-2xl font-semibold block border border-solid rounded">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">{children}</div>
              <div className="flex items-center justify-end p-3 border-t border-solid">
                <button
                  className="bg-gray-light font-bold uppercase text-sm px-6 pt-3 pb-2 rounded shadow hover:shadow-lg outline-none"
                  type="button"
                  onClick={() => onSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-60 fixed inset-0 z-40 bg-gray-light"></div>
      </>
    )
  );
};
