"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full">
        <div className="relative hidden flex-1 lg:block w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e82c2197-0087-4cca-9a4e-c3ffb2f1fcde/dgrb9nq-ea8c918d-1071-4468-a439-3d10b6c30f63.png/v1/fill/w_1920,h_919,q_80,strp/sunset_in_space__2_by_digitaldimensions51_dgrb9nq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U4MmMyMTk3LTAwODctNGNjYS05YTRlLWMzZmZiMmYxZmNkZVwvZGdyYjlucS1lYThjOTE4ZC0xMDcxLTQ0NjgtYTQzOS0zZDEwYjZjMzBmNjMucG5nIiwiaGVpZ2h0IjoiPD05MTkiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9lODJjMjE5Ny0wMDg3LTRjY2EtOWE0ZS1jM2ZmYjJmMWZjZGVcL2RpZ2l0YWxkaW1lbnNpb25zNTEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.HX_Abn0bc2YuGwcp-chNQn5gMphc_11yt6oQEe5wOec"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <a href="/">
                <svg
                  width="95"
                  height="24"
                  viewBox="0 0 95 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7225 7.51161C18.7225 10.7696 15.8542 13.7837 12.04 14.6703C10.3252 15.0692 8.58523 15.2743 6.85155 14.9141C6.0698 14.7535 6.0635 15.1303 6.01307 15.518C5.86807 16.6096 5.77351 17.7011 5.65372 18.7927C5.54656 19.8177 5.4646 20.8428 5.3133 21.8623C5.06742 23.4912 2.9807 24.4609 1.26592 23.7793C0.339191 23.4081 -0.0958056 22.6048 0.0176719 21.6905C0.295062 19.5129 0.522017 17.3299 0.780493 15.1468C1.07049 12.6701 1.3668 10.1934 1.6694 7.71663C1.81441 6.53643 1.87744 5.34516 2.18005 4.18713C2.87982 1.52755 4.41177 0.369527 7.5261 0.048161C11.605 -0.37848 16.6737 2.08717 18.1552 5.15677C18.5397 5.94911 18.7856 6.75807 18.7225 7.51161ZM8.91935 10.4039C10.1865 10.4039 11.2015 10.1878 12.0715 9.72793C13.7674 8.83587 13.9817 7.26228 12.5948 6.04884C11.5483 5.14015 10.2622 4.6858 8.8374 4.50296C7.82241 4.36999 7.19197 4.81324 7.08481 5.71639C6.94611 6.91875 6.88937 8.12664 6.74437 9.32899C6.66872 9.9828 6.85785 10.2986 7.67741 10.3153C8.08089 10.3263 8.50328 10.3984 8.91935 10.4039Z"
                    fill="#807CCC"
                  />
                  <path
                    d="M21.0134 19.2099C21.3617 14.1761 21.7222 9.35505 22.3088 4.55073C22.4188 3.67823 22.4677 2.79455 22.651 1.93883C22.9871 0.367215 25.0585 -0.477319 26.6045 0.28332C27.4784 0.713976 27.7655 1.41309 27.6739 2.26321C27.515 3.80687 27.3195 5.34492 27.1667 6.88299C26.9223 9.34387 26.684 11.8104 26.4702 14.2768C26.3295 15.8876 26.2624 17.5096 26.1341 19.1203C26.0301 20.4235 24.7591 21.4023 23.3171 21.3295C21.8383 21.2512 20.9644 20.3676 21.0011 19.2043L21.0134 19.2099Z"
                    fill="#E55456"
                  />
                  <path
                    d="M42.6549 11.0499C43.4411 8.00004 44.1203 4.96103 44.5983 1.89503C44.8185 0.502373 45.5544 -0.0644056 47.0575 0.00576695C48.479 0.0705416 49.7872 1.11233 49.7306 2.29447C49.6803 3.37945 49.4538 4.46443 49.2463 5.5386C48.3971 9.98107 47.4161 14.402 46.3027 18.8012C45.9694 20.1183 45.0448 20.82 43.548 20.8308C42.441 20.8363 41.7366 20.4368 41.2964 19.5623C40.3592 17.7163 39.4283 15.8756 38.4849 14.0349C38.3717 13.8189 38.3214 13.5652 38.0321 13.3872C37.3717 15.7945 36.7552 18.1804 36.2521 20.5879C35.9754 21.9104 35.4156 22.4609 34.1766 22.6391C32.4784 22.8875 30.7174 21.4137 31.0381 19.9725C32.0822 15.2171 33.3086 10.4939 34.818 5.83009C35.164 4.75591 36.1641 4.09737 37.4408 4.04879C38.6484 4.0002 39.3026 4.43204 39.8811 5.58179C40.7931 7.40627 41.7366 9.21996 42.6612 11.0391L42.6549 11.0499Z"
                    fill="#EDA406"
                  />
                  <path
                    d="M62.7019 13.996C61.3161 14.3337 60.0297 14.4677 58.7558 14.2319C55.6921 13.6583 53.952 11.9108 53.2996 9.35926C52.6408 6.79165 53.1193 4.28836 54.2379 1.8762C54.878 0.482501 56.3521 -0.374638 57.8063 0.161398C59.2915 0.708155 59.6196 2.24606 59.023 3.62368C58.3767 5.10313 57.8609 6.61476 58.2151 8.22822C58.5445 9.73449 59.9054 10.3348 61.5025 9.65408C62.795 9.10197 63.777 8.22822 64.3859 7.13472C64.852 6.29849 64.7278 5.31218 64.8956 4.39557C65.0446 3.5647 65.1069 2.72313 65.2435 1.88692C65.461 0.536105 66.5547 -0.144662 68.1581 0.0429511C69.5811 0.209122 70.5382 1.32944 70.3765 2.56232C70.0285 5.24786 69.7925 7.94413 69.2269 10.6029C68.5992 13.5725 67.6423 16.4349 65.2498 18.7775C64.2679 19.7369 63.0871 20.482 61.7448 21.0395C60.3094 21.6345 59.054 21.3129 58.4015 20.1925C57.6868 18.9651 58.1032 17.6303 59.4704 17.046C60.8499 16.4564 61.8567 15.5933 62.5154 14.4087C62.5713 14.3123 62.6086 14.2051 62.7019 13.9907V13.996Z"
                    fill="#01B27E"
                  />
                  <path
                    d="M89.3944 16.1061C89.3944 17.4508 89.3944 18.8009 89.3944 20.1455C89.3944 21.4901 88.4678 22.3553 86.9015 22.46C85.3941 22.5592 84.1282 21.7161 83.9846 20.41C83.8671 19.3464 83.8606 18.2664 83.8671 17.1973C83.8671 16.7179 83.6779 16.5801 83.1166 16.5745C81.7593 16.5636 80.4019 16.5195 79.0512 16.4313C78.4834 16.3983 78.2811 16.5856 78.1963 17.0044C77.9287 18.2608 77.6286 19.5117 77.3675 20.7683C77.0673 22.19 76.1668 22.8017 74.5745 22.6419C73.0671 22.4876 71.7879 21.2697 72.0295 20.0684C72.8321 16.04 73.7718 12.0337 75.7556 8.27539C77.0543 5.82311 78.627 3.5086 81.0219 1.67352C81.9094 0.990195 82.8948 0.433611 84.0629 0.141542C85.6161 -0.24421 86.8493 0.158073 87.639 1.35391C88.5591 2.74812 88.781 4.29664 88.8854 5.84516C89.1138 9.26181 89.2247 12.684 89.3878 16.1116L89.3944 16.1061ZM83.704 6.47337C83.5995 6.45684 83.4951 6.44032 83.3908 6.42379C81.942 7.95577 80.8718 9.6696 80.0496 11.5047C79.906 11.8243 80.043 11.9125 80.3955 11.918C81.2894 11.929 82.1835 11.929 83.071 11.9731C83.5604 11.9951 83.717 11.8794 83.7104 11.4496C83.6779 9.79084 83.6975 8.13211 83.6975 6.47337H83.704Z"
                    fill="#00A4B8"
                  />
                </svg>
              </a>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Dont have an account?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => router.push("/dashboard")}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
