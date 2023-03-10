import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const AddServices = () => {
  const { user } = useContext(AuthContext)
  const name = user?.displayName;
  const photo = user?.photoURL;
  const email = user?.email;

  const handleSubmit = event => {
    event.preventDefault();
    const title = event.target.name.value;
    const price = event.target.number.value;
    const url = event.target.image.value;
    const about = event.target.details.value;
    console.log(title, price, url, about);

    const service = {
      title,
      price,
      url,
      about,
      author: {
        name,
        email,
        photo,
      },
      reviews: {
        rating: 0,
        total_reviews: 0,
      },
      time: new Date(),
    }

    fetch('https://the-tech-hub-server.vercel.app/new/services', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('successfully create service')
      })
    event.target.reset();
  }

  return (
    <div>
      <div className="bg-gray-100 py-32 px-10 min-h-screen">
        <div className="p-10 md:w-3/4 lg:w-1/2 mx-auto rounded-2xl shadow-lg border bg-white">
          <h1 className='text-gray-900 text-2xl font-semibold text-center py-2'>Add Product</h1>
          <form onSubmit={handleSubmit} action="">

            <div className="flex items-center mb-5">
              <label htmlFor="name" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Service Name</label>
              <input type="text" id="name" name="name" placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" />
            </div>
            <div className="flex items-center mb-5">
              <label htmlFor="number" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Price</label>
              <input type="number" id="number" name="number" placeholder="number"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" />
            </div>
            <div className="flex items-center mb-5">
              <label htmlFor="image" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Image</label>
              <input type="text" id="image" name="image" placeholder="Image url"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none" />
            </div>
            <div className="flex items-center mb-5">
              <label htmlFor="details" className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Service Details</label>
              <textarea type="text" id="details" name="details" placeholder="Service Details"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none h-10" />
            </div>

            <div className="text-right">
              <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button>
            </div>

          </form>
        </div>
      </div>



      {/* //         <div>
            //             <div className="relative min-h-screen flex items-center justify-center bg-center  py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover"
            // 	style={{backgroundImage: "url('https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')"}} >
            // 	<div className="absolute bg-black opacity-30 inset-0 z-0"></div>
            // 	<div className=" w-1/3 mx-auto space-y-8 p-10 bg-transparent rounded-xl shadow-lg z-10">
            // <div className="grid  gap-8 grid-cols-1">
            // 	<div className="flex flex-col ">
            // 			<div className="flex flex-col sm:flex-row items-center">
            // 				<h2 className="font-semibold text-lg mr-auto">Add Service</h2>
            // 				<div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
            // 			</div>
            // 			<div className="mt-5">
            // 				<div className="form">
            // 					<div className="md:space-y-2 mb-3">
            // 						<label className="text-lg font-semibold text-gray-600 py-2">Service Image<abbr className="hidden" title="required">*</abbr></label>
            // 						<div className="flex items-center py-6">
                                        
            // 								<label className="cursor-pointer ">
            //                   <span className="focus:outline-none text-white text-sm py-2 px-10 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">Browse</span>
            //                   <input type="file" className="hidden"  />
            //                 </label>
            // 							</div>
            // 						</div>
            // 						<div className="md:flex flex-row md:space-x-4 w-full text-xs">
            // 							<div className="mb-3 space-y-2 w-full text-xs">
            // 								<label className="font-semibold text-gray-300 py-2">Book Name <abbr title="required">*</abbr></label>
            // 								<input placeholder="Company Name" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-900 rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name" />
            // 								<p className="text-red text-xs hidden">Please fill out this field.</p>
            // 							</div>
            // 							<div className="mb-3 space-y-2 w-full text-xs">
            // 								<label className="font-semibold text-gray-600 py-2">Company  Mail <abbr title="required">*</abbr></label>
            // 								<input placeholder="Email ID" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" required="required" type="text" name="integration[shop_name]" id="integration_shop_name" />
            // 								<p className="text-red text-xs hidden">Please fill out this field.</p>
            // 							</div>
            // 						</div>
            // 						<div className="mb-3 space-y-2 w-full text-xs">
            // 							<label className=" font-semibold text-gray-600 py-2">Company  Website</label>
            // 							<div className="flex flex-wrap items-stretch w-full mb-4 relative">
            // 								<div className="flex">
            // 									<span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
            //                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            //                                     </svg>
            //                                    </span>
            // 								</div>
            // 								<input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="https://" />
            //                   </div>
            // 							</div>
            // 							<div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
            // 								<div className="w-full flex flex-col mb-3">
            // 									<label className="font-semibold text-gray-600 py-2">Company Address</label>
            // 									<input placeholder="Address" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4" type="text" name="integration[street_address]" id="integration_street_address" />
            //               </div>
            // 									<div className="w-full flex flex-col mb-3">
            // 										<label className="font-semibold text-gray-600 py-2">Location<abbr title="required">*</abbr></label>
            // 										<select className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
            //                   <option value="">Seleted location</option>
            //                   <option value="">Cochin,KL</option>
            //                   <option value="">Mumbai,MH</option>
            //                   <option value="">Bangalore,KA</option>
            //                 </select>
            // 										<p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
            // 									</div>
            // 								</div>
            // 								<div className="flex-auto w-full mb-1 text-xs space-y-2">
            // 									<label className="font-semibold text-gray-600 py-2">Description</label>
            // 									<textarea required="" name="message" id="" className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Enter your comapny info" spellcheck="false"></textarea>
            // 									<p className="text-xs text-gray-400 text-left my-3">You inserted 0 characters</p>
            // 								</div>
            // 								<p className="text-xs text-red-500 text-right my-3">Required fields are marked with an
            // 									asterisk <abbr title="Required field">*</abbr></p>
            // 								<div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
            // 									<button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"> Cancel </button>
            // 									<button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">Save</button>
            // 								</div>
            // 							</div>
            // 						</div>
            // 					</div>
            // 				</div>
            // 			</div>
            //             </div>
            //         </div> */}
    </div>
  );
};

export default AddServices;