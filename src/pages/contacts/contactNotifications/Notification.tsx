import React, { useEffect, useState } from "react";

interface NotificationProps {
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress > 0) {
          return prevProgress - 1;
        }
        return prevProgress;
      });
    }, 40); // Adjust this interval to control the speed of the progress bar

    // Hide the notification after 4 seconds (if not in loading state)
    const hideTimeout = setTimeout(() => {
      onClose();
    }, 4000);

    // Clear the timeouts when the component is unmounted or notification is closed manually

    return () => {
      clearInterval(progressInterval);
      clearTimeout(hideTimeout);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="">
      {isVisible && (
        <div
          id="toast-success"
          className="animate__animated animate__slideInRight left-[8rem] right-0 lg:left-[60rem] bg-white flex-col flex w-full max-w-xs  text-gray-500 rounded-t-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="flex text-center mx-auto space-x-4 md:px-4 h-4 pt-4 items-center ">
            {/* Success icon */}
            <div className="mr-2">
              <svg
                className="w-5 h-5 text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>

              {/* <span className="sr-only">Check icon</span> */}
            </div>

            {/* Success message */}
            <div className="flex-grow">User is invited successfully.</div>
            {/* Close button */}
            <button
              type="button"
              className="text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={handleClose}
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
            </button>
          </div>

          {/* Loading progress bar */}
          <div className="w-full pt-4">
            <div className="bg-green-300 h-1 rounded-full">
              <div
                className={`h-full bg-green-600 rounded-full`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;

// import React, { useEffect, useState } from "react";

// interface NotificationProps {
//   onClose: () => void;
// }

// const Notification: React.FC<NotificationProps> = ({ onClose }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [progress, setProgress] = useState(100);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress > 0) {
//           return prevProgress - 1;
//         }
//         return prevProgress;
//       });
//     }, 1000); // Adjust this interval to control the speed of the progress bar

//     // Hide the notification after 4 seconds (if not in loading state)
//     const hideTimeout = setTimeout(() => {
//       onClose();
//     }, 100000);

//     // Clear the timeouts when the component is unmounted or notification is closed manually

//     return () => {
//       clearInterval(progressInterval);
//       clearTimeout(hideTimeout);
//     };
//   }, [onClose]);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   return (
//     <div className="">
//       {isVisible && (
//         <div
//           id="toast-success"
//           className="animate__animated animate__slideInRight left-[8rem] right-0 lg:left-[60rem] bg-white flex-col flex w-full max-w-xs  text-gray-500 rounded-t-lg shadow dark:text-gray-400 dark:bg-gray-800"
//           role="alert"
//         >
//           <div className="flex text-center mx-auto space-x-4 px-4 h-4 pt-4 items-center ">
//             {/* Success icon */}
//             <div className="mr-2">
//               <svg
//                 className="w-5 h-5 text-green-400"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//               </svg>

//               {/* <span className="sr-only">Check icon</span> */}
//             </div>

//             {/* Success message */}
//             <div className="flex-grow">User is invited successfully.</div>
//             {/* Close button */}

//             <button
//               type="button"
//               className="text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
//               onClick={handleClose}
//             >
//               <svg
//                 className="w-3 h-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Loading progress bar */}
//           <div className="w-full pt-4">
//             <div className="bg-green-300 h-1 rounded-full">
//               <div
//                 className={`h-full bg-green-600 rounded-full`}
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notification;
