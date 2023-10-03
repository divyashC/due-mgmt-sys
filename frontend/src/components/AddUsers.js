import React from 'react'

const Addusers = () => {
  return (
    <div class="p-4 sm:ml-64 " >
   <div class="p-9 border-2 border-gray-200 border-dashed rounded-lg flex items-center justify-center">
      <div class="grid grid-cols-3 gap-4 mb-4 flex items-center justify-center"  >
         <div class="flex items-center justify-center h-24 rounded bg-gray-50">
		 <div class="mb-3">
  <label
    for="formFileMultiple"
    class="mb-2 inline-block text-neutral-700  "></label>
  <input
    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
    type="file"
    id="formFileMultiple"
    multiple />
</div>
 
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50">
		 <button
                type="submit"
                className="flex justify-center w-full px-3 py-2 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
            Upload
              </button>
         </div>
         
      </div>
      
   </div>
</div>
  )
}

export default Addusers