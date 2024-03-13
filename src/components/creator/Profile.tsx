import React from "react";

import Link from "next/link";
import Comment from "@/components/textareas/comment";
import UserComment from "@/data/usercomments";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 w-full pt-28">
        <div className="flex w-full h-[200px] rounded-lg bg-ube-300 items-center justify-center text-white relative mb-12">
          Background Image here
          <img
            className="inline-block h-24 w-24 rounded-full absolute -bottom-12 border-2 border-white"
            src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/405296453_24154188964229333_5613413593678815332_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=im3-nGFm9ZkAX87hKHv&_nc_ht=scontent.fceb1-2.fna&oh=00_AfBD6r7KOiSotFNXtc61KWG6JpDQLA1KeThQXGrcnqavDw&oe=65F4E302"
            alt=""
          />
        </div>

        <div className="mb-2 flex items-center flex-col gap-4">
          <div className="flex flex-row items-center rounded-md px-3">
           
            <div className="text-3xl font-quicksand font-bold text-blackberry-300 py-2 px-2">Aisle Sensei</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9741 1.07185C19.8495 0.448613 19.3022 0 18.6667 0C18.0311 0 17.4839 0.448613 17.3592 1.07185L17.0412 2.66192C16.9356 3.18974 16.5231 3.60231 15.9953 3.70788L14.4052 4.02589C13.7819 4.15054 13.3333 4.69776 13.3333 5.33333C13.3333 5.96891 13.7819 6.51613 14.4052 6.64077L15.9953 6.95879C16.5231 7.06435 16.9356 7.47693 17.0412 8.00474L17.3592 9.59482C17.4839 10.2181 18.0311 10.6667 18.6667 10.6667C19.3022 10.6667 19.8495 10.2181 19.9741 9.59482L20.2921 8.00474C20.3977 7.47693 20.8103 7.06435 21.3381 6.95879L22.9282 6.64077C23.5514 6.51613 24 5.96891 24 5.33333C24 4.69776 23.5514 4.15054 22.9282 4.02589L21.3381 3.70788C20.8103 3.60231 20.3977 3.18974 20.2921 2.66192L19.9741 1.07185Z"
                fill="#534DC2"
              />
              <path
                d="M7.93158 6.24503C7.75009 5.70057 7.24057 5.33333 6.66667 5.33333C6.09276 5.33333 5.58324 5.70057 5.40176 6.24503L4.49006 8.98012C4.35735 9.37826 4.04492 9.69068 3.64679 9.82339L0.911696 10.7351C0.36724 10.9166 0 11.4261 0 12C0 12.5739 0.36724 13.0834 0.911696 13.2649L3.64679 14.1766C4.04493 14.3093 4.35735 14.6217 4.49006 15.0199L5.40176 17.755C5.58324 18.2994 6.09276 18.6667 6.66667 18.6667C7.24057 18.6667 7.75009 18.2994 7.93158 17.755L8.84327 15.0199C8.97599 14.6217 9.28841 14.3093 9.68655 14.1766L12.4216 13.2649C12.9661 13.0834 13.3333 12.5739 13.3333 12C13.3333 11.4261 12.9661 10.9166 12.4216 10.7351L9.68655 9.82339C9.28841 9.69068 8.97599 9.37826 8.84327 8.98012L7.93158 6.24503Z"
                fill="#534DC2"
              />
              <path
                d="M17.2649 16.9117C17.0834 16.3672 16.5739 16 16 16C15.4261 16 14.9166 16.3672 14.7351 16.9117L14.4901 17.6468C14.3573 18.0449 14.0449 18.3573 13.6468 18.4901L12.9117 18.7351C12.3672 18.9166 12 19.4261 12 20C12 20.5739 12.3672 21.0834 12.9117 21.2649L13.6468 21.5099C14.0449 21.6427 14.3573 21.9551 14.4901 22.3532L14.7351 23.0883C14.9166 23.6328 15.4261 24 16 24C16.5739 24 17.0834 23.6328 17.2649 23.0883L17.5099 22.3532C17.6427 21.9551 17.9551 21.6427 18.3532 21.5099L19.0883 21.2649C19.6328 21.0834 20 20.5739 20 20C20 19.4261 19.6328 18.9166 19.0883 18.7351L18.3532 18.4901C17.9551 18.3573 17.6427 18.0449 17.5099 17.6468L17.2649 16.9117Z"
                fill="#534DC2"
              />
            </svg>
          </div>

          <div className="flex flex-row items-center gap-4 ">
            <div className="flex gap-4 ">
              <div className="pt-4">
                <div className="flex font-medium text-violet-500 bg-violet-50 items-center py-2 px-4 rounded-md">
                  <p className="text-center">40k Views</p>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex font-medium text-blueberry-300 bg-blueberry-50 items-center py-2 px-4 rounded-md">
                  <p className="text-center">120k Likes</p>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex font-medium text-strawberry-300 bg-strawberry-50 items-center py-2 px-4 rounded-md">
                  <p className="text-center">50k Hearts</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-md font-bold font-quicksand w-full text-center pt-8 text-blackberry-300">
            I am not just an artist; I am a storyteller, a dream weaver, and a
            guardian of the untold narratives that lie waiting in the shadows
            and light of our lives. My art is a reflection of my soul's journey
            through the myriad experiences of life, an exploration of the
            invisible threads that connect us all.
          </p>
        </div>

        <Comment />
        <div className="w-full flex flex-col gap-4">
          {UserComment.map((comment) => (
            <div key={comment.name}>
              <div className="flex space-x-3 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={comment.imgLink}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-gray-900">
                      {comment.name}
                    </a>
                  </div>
                  <div className="mt-1 text-sm text-gray-700">
                    <p>{comment.comment}</p>
                  </div>
                  <div className="mt-2 space-x-2 text-sm">
                    <span className="font-medium text-gray-500"></span>{" "}
                    <button type="button" className="font-medium text-gray-900">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
