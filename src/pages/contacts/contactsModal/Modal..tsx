import { useState } from "react";
import Notification from "../contactNotifications/Notification";

const Modal = () => {
  const [isModal, setModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDropdown = () => {
    setModal((prevState) => !prevState);
  };

  const handleInviteClick = () => {
    // Display a notification when "Invite" is clicked
    setShowNotification(true);
    console.log(setShowNotification);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div className="relative inline-block ">
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        onClick={toggleDropdown}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </button>
      {/* modal */}
      {isModal && (
        <div
          id="defaultModal"
          onClick={toggleDropdown}
          // tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 md:w-[60%] p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full text-center flex justify-center mx-auto items-center"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-3xl shadow dark:bg-gray-700">
              <div className="flex items-start bg-green-500 justify-between p-4 border-b rounded-t-2xl dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create Contact
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6"></div>

              <div className="flex flex-row-reverse items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  onClick={handleInviteClick}
                  type="button"
                  className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  invite
                </button>

                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-green-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* notification */}
      {showNotification && (
        <div
          id="toast-success"
          className="top-0 -left-[16rem] right-0 md:-right-[20rem] lg:left-0 z-50 absolute text-gray-500 rounded-xl"
          role="alert"
        >
          {/* Rest of the notification code */}
          <Notification onClose={handleNotificationClose} />
        </div>
      )}
    </div>
  );
};

export default Modal;
