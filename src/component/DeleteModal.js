import axios from 'axios';
import { toast } from 'react-hot-toast';
import dynamic from 'next/dynamic';

const DeleteModal = ({postId, showModal, setShowModal}) => {
const deletePost = ()=>{


axios.delete(`https://blogapi-developertanbir-gmailcom.vercel.app/api/posts/${postId}`, {
  data: {
    username: 'imtias'
  }
})
.then(response => {
  // Handle successful response
  if(response.status === 200){
    toast.success(response.data)
    window.location.reload();
  }
  setShowModal(false)
})
.catch(error => {
  console.log(error)
  if(error.response.status === 401){
    return toast.error("You have access only to Delete by default imtias author post")
  }
  // Handle error
  console.error('Error deleting post:', error);
  toast.error("Delete Fail!")
  setShowModal(false)
});
}
    return (
        <>
        {showModal && <div className="fixed z-10 inset-0 overflow-y-auto" x-show="showModal">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
     <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Modal Title
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
              Are you sure you want to delete the post permanently?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={()=>deletePost()}>
          Confirm
        </button>
        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={()=>setShowModal(false)}>
          Cancel
        </button>
      </div>
    </div>
   
  </div>
</div>}
</>
    );
};

export default DeleteModal;