import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "lib/icons";
import { NextSeo } from "next-seo";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const RenderModal = () => {
    const dummy = [
      { title: "General", icon: GeneralIcon },
      { title: "Display", icon: DisplayIcon },
      { title: "Content", icon: ContentIcon },
      { title: "Profile", icon: ProfileIcon },
      { title: "Subscription", icon: SubscriptionIcon },
      { title: "Shortcuts", icon: ShortcutsIcon },
    ];

    return (
      <div className="fixed inset-0 z-10 w-full h-full flex items-center justify-center">
        <div
          className="backdrop absolute inset-0 w-full h-full"
          onClick={() => setModal(false)}
        />
        <div className="border border-gray-200 dark:border-gray-800 min-w-[500px] rounded-xl relative z-10 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
          <div className="py-2 border-b border-gray-300/40 dark:border-gray-800/50 px-3 flex items-center justify-between">
            <div className="text-gray-500 flex items-center">
              <span className="opacity-40 w-4 h-4 mr-2">{PreferencesIcon}</span>
              Preferences
            </div>
            <div
              className="text-gray-400 dark:text-gray-600 text-sm hover:text-gray-500 cursor-pointer w-5 h-5"
              onClick={() => setModal(false)}
            >
              {CloseIcon}
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 border-r border-gray-300/40 dark:border-gray-800/50">
              {dummy?.map((item) => (
                <div
                  className="text-gray-500 px-3 border-b border-gray-300/20 last:border-b-0 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/20 cursor-pointer hover:text-gray-600 dark:hover:text-gray-400 w-full py-4 flex items-center text-sm"
                  key={item.title}
                >
                  <div className="w-4 h-4 opacity-40 mr-2">{item.icon}</div>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
            <div className="w-2/3 flex items-center justify-center dark:text-gray-700 text-gray-300 text-sm pointer-events-none">
              ...
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>
    <NextSeo
      title="Modal Component - Rishi Mohan"
      description="An open-source modal component implementation for web apps made in Tailwind CSS and React"
      openGraph={{
        site_name: "Hi, I'm Rishi Mohan!",
        title: "Modal Component - Rishi Mohan",
        description:
          "An open-source modal component implementation for web apps made in Tailwind CSS and React",
      }}
    />
    <div className="min-h-screen flex bg-gray-100/50 dark:bg-gray-900 p-10 items-center justify-center flex-col">
      <button
        onClick={() => setModal(true)}
        className="border px-4 py-2 dark:border-gray-800 border-gray-300 hover:border-gray-400/80 bg-white text-gray-500 dark:bg-gray-800/50 dark:hover:border-gray-700 rounded-lg dark:text-gray-500 shadow-sm dark:shadow"
      >
        Open modal
      </button>
      <div className="mt-5 opacity-30 text-sm">
        <Link href="/experiments" className="flex items-center">

          <span className="w-4 h-4 rotate-180 mr-1">{ArrowIcon}</span>Back to experiments
        </Link>
      </div>
    </div>
    {modal ? <RenderModal /> : ""}
  </>;
}

const PreferencesIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.50003 8.85964L11.5 14.0596C11.6521 14.1474 11.8245 14.1936 12 14.1936C12.1756 14.1936 12.348 14.1474 12.5 14.0596L21.5 8.85964C21.6512 8.77238 21.7768 8.64709 21.8646 8.49622C21.9523 8.34535 21.999 8.17415 22 7.99964C22.0007 7.82343 21.9549 7.65016 21.8671 7.49738C21.7792 7.34461 21.6526 7.21774 21.5 7.12964L12.5 1.93964C12.348 1.85187 12.1756 1.80566 12 1.80566C11.8245 1.80566 11.6521 1.85187 11.5 1.93964L2.50003 7.12964C2.34743 7.21774 2.22081 7.34461 2.13301 7.49738C2.04521 7.65016 1.99933 7.82343 2.00003 7.99964C2.00108 8.17415 2.04779 8.34535 2.13551 8.49622C2.22322 8.64709 2.34889 8.77238 2.50003 8.85964ZM12 3.99964L19 7.99964L12 11.9996L5.00003 7.99964L12 3.99964ZM20.5 11.1696L12 15.9996L3.50003 11.1296C3.3859 11.0635 3.25981 11.0206 3.12903 11.0035C2.99825 10.9863 2.86537 10.9951 2.73803 11.0295C2.61069 11.0639 2.49141 11.1232 2.38706 11.2038C2.28271 11.2845 2.19536 11.3851 2.13003 11.4996C1.99966 11.7293 1.96539 12.0011 2.03471 12.2559C2.10403 12.5107 2.2713 12.7277 2.50003 12.8596L11.5 18.0596C11.6521 18.1474 11.8245 18.1936 12 18.1936C12.1756 18.1936 12.348 18.1474 12.5 18.0596L21.5 12.8596C21.7288 12.7277 21.896 12.5107 21.9654 12.2559C22.0347 12.0011 22.0004 11.7293 21.87 11.4996C21.8047 11.3851 21.7173 11.2845 21.613 11.2038C21.5087 11.1232 21.3894 11.0639 21.262 11.0295C21.1347 10.9951 21.0018 10.9863 20.871 11.0035C20.7402 11.0206 20.6142 11.0635 20.5 11.1296V11.1696ZM20.5 15.1696L12 19.9996L3.50003 15.1296C3.3859 15.0635 3.25981 15.0206 3.12903 15.0035C2.99825 14.9863 2.86537 14.9951 2.73803 15.0295C2.61069 15.0639 2.49141 15.1232 2.38706 15.2038C2.28271 15.2845 2.19536 15.3851 2.13003 15.4996C1.99966 15.7293 1.96539 16.0011 2.03471 16.2559C2.10403 16.5107 2.2713 16.7277 2.50003 16.8596L11.5 22.0596C11.6521 22.1474 11.8245 22.1936 12 22.1936C12.1756 22.1936 12.348 22.1474 12.5 22.0596L21.5 16.8596C21.7288 16.7277 21.896 16.5107 21.9654 16.2559C22.0347 16.0011 22.0004 15.7293 21.87 15.4996C21.8047 15.3851 21.7173 15.2845 21.613 15.2038C21.5087 15.1232 21.3894 15.0639 21.262 15.0295C21.1347 14.9951 21.0018 14.9863 20.871 15.0035C20.7402 15.0206 20.6142 15.0635 20.5 15.1296V15.1696Z" />
  </svg>
);

const GeneralIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V9C11 9.26522 11.1054 9.51957 11.2929 9.70711C11.4804 9.89464 11.7348 10 12 10C12.2652 10 12.5196 9.89464 12.7071 9.70711C12.8946 9.51957 13 9.26522 13 9V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9V15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22C13.8565 22 15.637 21.2625 16.9497 19.9497C18.2625 18.637 19 16.8565 19 15V9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM17 15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5979 19.4732 13.3261 20 12 20C10.6739 20 9.40215 19.4732 8.46447 18.5355C7.52678 17.5979 7 16.3261 7 15V9C7 7.67392 7.52678 6.40215 8.46447 5.46447C9.40215 4.52678 10.6739 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9V15Z" />
  </svg>
);

const DisplayIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.4199 15.5404C7.23365 15.7277 7.12911 15.9812 7.12911 16.2454C7.12911 16.5096 7.23365 16.763 7.4199 16.9504C7.51286 17.0441 7.62346 17.1185 7.74532 17.1693C7.86718 17.22 7.99789 17.2462 8.1299 17.2462C8.26191 17.2462 8.39262 17.22 8.51448 17.1693C8.63633 17.1185 8.74694 17.0441 8.8399 16.9504C9.02615 16.763 9.13069 16.5096 9.13069 16.2454C9.13069 15.9812 9.02615 15.7277 8.8399 15.5404C8.74694 15.4467 8.63633 15.3723 8.51448 15.3215C8.39262 15.2707 8.26191 15.2446 8.1299 15.2446C7.99789 15.2446 7.86718 15.2707 7.74532 15.3215C7.62346 15.3723 7.51286 15.4467 7.4199 15.5404ZM7.4199 7.05038C7.23365 7.23775 7.12911 7.4912 7.12911 7.75538C7.12911 8.01957 7.23365 8.27302 7.4199 8.46038C7.51286 8.55411 7.62346 8.62851 7.74532 8.67927C7.86718 8.73004 7.99789 8.75618 8.1299 8.75618C8.26191 8.75618 8.39262 8.73004 8.51448 8.67927C8.63633 8.62851 8.74694 8.55411 8.8399 8.46038C9.02615 8.27302 9.13069 8.01957 9.13069 7.75538C9.13069 7.4912 9.02615 7.23775 8.8399 7.05038C8.74694 6.95665 8.63633 6.88226 8.51448 6.83149C8.39262 6.78072 8.26191 6.75458 8.1299 6.75458C7.99789 6.75458 7.86718 6.78072 7.74532 6.83149C7.62346 6.88226 7.51286 6.95665 7.4199 7.05038ZM12.3699 17.0504C12.1721 17.0504 11.9788 17.109 11.8143 17.2189C11.6499 17.3288 11.5217 17.485 11.446 17.6677C11.3703 17.8504 11.3505 18.0515 11.3891 18.2455C11.4277 18.4395 11.5229 18.6176 11.6628 18.7575C11.8026 18.8973 11.9808 18.9926 12.1748 19.0312C12.3688 19.0698 12.5699 19.0499 12.7526 18.9743C12.9353 18.8986 13.0915 18.7704 13.2014 18.606C13.3112 18.4415 13.3699 18.2482 13.3699 18.0504C13.3767 17.9149 13.3558 17.7795 13.3086 17.6523C13.2614 17.5252 13.1888 17.4089 13.0953 17.3107C13.0017 17.2125 12.8892 17.1343 12.7645 17.081C12.6398 17.0276 12.5055 17.0002 12.3699 17.0004V17.0504ZM6.3699 11.0504C6.17212 11.0504 5.97878 11.109 5.81433 11.2189C5.64988 11.3288 5.52171 11.485 5.44602 11.6677C5.37033 11.8504 5.35053 12.0515 5.38911 12.2455C5.4277 12.4395 5.52294 12.6176 5.66279 12.7575C5.80264 12.8973 5.98083 12.9926 6.17481 13.0312C6.36879 13.0698 6.56986 13.0499 6.75258 12.9743C6.93531 12.8986 7.09149 12.7704 7.20137 12.606C7.31125 12.4415 7.3699 12.2482 7.3699 12.0504C7.37668 11.9149 7.35583 11.7795 7.30862 11.6523C7.26141 11.5252 7.18883 11.4089 7.09529 11.3107C7.00174 11.2125 6.8892 11.1343 6.76449 11.081C6.63979 11.0276 6.50554 11.0002 6.3699 11.0004V11.0504ZM12.3699 5.05038C12.1721 5.05038 11.9788 5.10903 11.8143 5.21891C11.6499 5.32879 11.5217 5.48497 11.446 5.6677C11.3703 5.85043 11.3505 6.05149 11.3891 6.24547C11.4277 6.43945 11.5229 6.61764 11.6628 6.75749C11.8026 6.89734 11.9808 6.99258 12.1748 7.03117C12.3688 7.06975 12.5699 7.04995 12.7526 6.97426C12.9353 6.89857 13.0915 6.7704 13.2014 6.60595C13.3112 6.4415 13.3699 6.24816 13.3699 6.05038C13.3767 5.91492 13.3558 5.77948 13.3086 5.65233C13.2614 5.52517 13.1888 5.40895 13.0953 5.31073C13.0017 5.21251 12.8892 5.13434 12.7645 5.08099C12.6398 5.02764 12.5055 5.00021 12.3699 5.00038V5.05038ZM15.9099 7.10038C15.7695 7.24 15.6736 7.41817 15.6346 7.61231C15.5955 7.80645 15.6149 8.00783 15.6905 8.1909C15.766 8.37397 15.8941 8.5305 16.0587 8.64065C16.2233 8.75079 16.4169 8.80959 16.6149 8.80959C16.8129 8.80959 17.0065 8.75079 17.1711 8.64065C17.3357 8.5305 17.4638 8.37397 17.5393 8.1909C17.6149 8.00783 17.6343 7.80645 17.5952 7.61231C17.5562 7.41817 17.4603 7.24 17.3199 7.10038C17.1392 6.90734 16.8895 6.7937 16.6252 6.78433C16.361 6.77496 16.1038 6.87062 15.9099 7.05038V7.10038ZM22.2099 7.10038C21.2956 5.27268 19.8903 3.7358 18.1515 2.66208C16.4127 1.58837 14.4091 1.02027 12.3655 1.02149C10.3219 1.02271 8.31902 1.5932 6.58148 2.669C4.84395 3.74479 3.44045 5.28335 2.52838 7.11214C1.61631 8.94094 1.23172 10.9877 1.41774 13.0228C1.60377 15.0579 2.35305 17.001 3.58157 18.6341C4.81008 20.2672 6.46926 21.5259 8.37304 22.2688C10.2768 23.0118 12.3499 23.2097 14.3599 22.8404C14.8653 22.7453 15.3468 22.5504 15.776 22.2671C16.2053 21.9838 16.5737 21.6177 16.8599 21.1904C17.1682 20.7258 17.381 20.2044 17.4857 19.6567C17.5905 19.109 17.5851 18.546 17.4699 18.0004C17.4069 17.6707 17.3735 17.336 17.3699 17.0004C17.3743 16.0313 17.6602 15.0845 18.1928 14.2749C18.7254 13.4653 19.4817 12.828 20.3699 12.4404C20.8488 12.226 21.2786 11.9157 21.6329 11.5287C21.9872 11.1417 22.2585 10.6863 22.4299 10.1904C22.6033 9.68367 22.6732 9.14729 22.6354 8.61307C22.5976 8.07884 22.4529 7.55764 22.2099 7.08038V7.10038ZM20.5099 9.54038C20.4246 9.7797 20.2921 9.99947 20.1203 10.1867C19.9486 10.3739 19.741 10.5248 19.5099 10.6304C18.2799 11.181 17.2349 12.0749 16.5006 13.2049C15.7662 14.3348 15.3736 15.6528 15.3699 17.0004C15.3714 17.4705 15.4183 17.9393 15.5099 18.4004C15.571 18.6822 15.575 18.9734 15.5218 19.2567C15.4685 19.5401 15.3591 19.81 15.1999 20.0504C15.0652 20.2608 14.888 20.4407 14.6796 20.5784C14.4712 20.7162 14.2362 20.8089 13.9899 20.8504C13.4558 20.9508 12.9134 21.001 12.3699 21.0004C11.1641 21.001 9.97041 20.7592 8.85982 20.2895C7.74923 19.8198 6.74435 19.1317 5.90486 18.2661C5.06537 17.4005 4.40838 16.375 3.97291 15.2506C3.53745 14.1261 3.33238 12.9256 3.3699 11.7204C3.44751 9.47318 4.3589 7.33534 5.92653 5.72334C7.49415 4.11135 9.60573 3.14066 11.8499 3.00038H12.3599C14.0357 3.0008 15.678 3.46907 17.102 4.35245C18.526 5.23583 19.6751 6.49923 20.4199 8.00038C20.6491 8.47536 20.6815 9.02167 20.5099 9.52038V9.54038ZM12.3699 11.0004C12.1721 11.0004 11.9788 11.059 11.8143 11.1689C11.6499 11.2788 11.5217 11.435 11.446 11.6177C11.3703 11.8004 11.3505 12.0015 11.3891 12.1955C11.4277 12.3895 11.5229 12.5676 11.6628 12.7075C11.8026 12.8473 11.9808 12.9426 12.1748 12.9812C12.3688 13.0198 12.5699 12.9999 12.7526 12.9243C12.9353 12.8486 13.0915 12.7204 13.2014 12.556C13.3112 12.3915 13.3699 12.1982 13.3699 12.0004C13.3699 11.7352 13.2645 11.4808 13.077 11.2933C12.8895 11.1057 12.6351 11.0004 12.3699 11.0004Z" />
  </svg>
);

const ContentIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 9.25C4.4561 9.25 3.92442 9.41129 3.47218 9.71346C3.01995 10.0156 2.66747 10.4451 2.45933 10.9476C2.25119 11.4501 2.19673 12.0031 2.30284 12.5365C2.40895 13.0699 2.67086 13.56 3.05546 13.9445C3.44005 14.3291 3.93005 14.5911 4.4635 14.6972C4.99695 14.8033 5.54988 14.7488 6.05238 14.5407C6.55488 14.3325 6.98437 13.9801 7.28654 13.5278C7.58872 13.0756 7.75 12.5439 7.75 12C7.75 11.2707 7.46027 10.5712 6.94455 10.0555C6.42882 9.53973 5.72935 9.25 5 9.25ZM5 13.25C4.75277 13.25 4.5111 13.1767 4.30554 13.0393C4.09998 12.902 3.93976 12.7068 3.84515 12.4784C3.75054 12.2499 3.72579 11.9986 3.77402 11.7561C3.82225 11.5137 3.9413 11.2909 4.11612 11.1161C4.29093 10.9413 4.51366 10.8223 4.75614 10.774C4.99861 10.7258 5.24995 10.7505 5.47836 10.8452C5.70676 10.9398 5.90199 11.1 6.03934 11.3055C6.17669 11.5111 6.25 11.7528 6.25 12C6.25 12.3315 6.11831 12.6495 5.88388 12.8839C5.64946 13.1183 5.33152 13.25 5 13.25ZM12 9.25C11.4561 9.25 10.9244 9.41129 10.4722 9.71346C10.0199 10.0156 9.66747 10.4451 9.45933 10.9476C9.25119 11.4501 9.19673 12.0031 9.30284 12.5365C9.40895 13.0699 9.67086 13.56 10.0555 13.9445C10.4401 14.3291 10.9301 14.5911 11.4635 14.6972C11.997 14.8033 12.5499 14.7488 13.0524 14.5407C13.5549 14.3325 13.9844 13.9801 14.2865 13.5278C14.5887 13.0756 14.75 12.5439 14.75 12C14.75 11.2707 14.4603 10.5712 13.9445 10.0555C13.4288 9.53973 12.7293 9.25 12 9.25ZM12 13.25C11.7528 13.25 11.5111 13.1767 11.3055 13.0393C11.1 12.902 10.9398 12.7068 10.8452 12.4784C10.7505 12.2499 10.7258 11.9986 10.774 11.7561C10.8223 11.5137 10.9413 11.2909 11.1161 11.1161C11.2909 10.9413 11.5137 10.8223 11.7561 10.774C11.9986 10.7258 12.2499 10.7505 12.4784 10.8452C12.7068 10.9398 12.902 11.1 13.0393 11.3055C13.1767 11.5111 13.25 11.7528 13.25 12C13.25 12.3315 13.1183 12.6495 12.8839 12.8839C12.6495 13.1183 12.3315 13.25 12 13.25ZM19 7.75C19.5439 7.75 20.0756 7.58872 20.5278 7.28654C20.9801 6.98437 21.3325 6.55488 21.5407 6.05238C21.7488 5.54988 21.8033 4.99695 21.6972 4.4635C21.5911 3.93005 21.3291 3.44005 20.9445 3.05546C20.56 2.67086 20.0699 2.40895 19.5365 2.30284C19.0031 2.19673 18.4501 2.25119 17.9476 2.45933C17.4451 2.66747 17.0156 3.01995 16.7135 3.47218C16.4113 3.92442 16.25 4.4561 16.25 5C16.25 5.72935 16.5397 6.42882 17.0555 6.94455C17.5712 7.46027 18.2707 7.75 19 7.75ZM19 3.75C19.2472 3.75 19.4889 3.82331 19.6945 3.96066C19.9 4.09802 20.0602 4.29324 20.1549 4.52165C20.2495 4.75005 20.2742 5.00139 20.226 5.24386C20.1778 5.48634 20.0587 5.70907 19.8839 5.88388C19.7091 6.0587 19.4863 6.17775 19.2439 6.22598C19.0014 6.27421 18.7501 6.24946 18.5216 6.15485C18.2932 6.06024 18.098 5.90003 17.9607 5.69446C17.8233 5.4889 17.75 5.24723 17.75 5C17.75 4.66848 17.8817 4.35054 18.1161 4.11612C18.3505 3.8817 18.6685 3.75 19 3.75ZM19 9.25C18.4561 9.25 17.9244 9.41129 17.4722 9.71346C17.0199 10.0156 16.6675 10.4451 16.4593 10.9476C16.2512 11.4501 16.1967 12.0031 16.3028 12.5365C16.409 13.0699 16.6709 13.56 17.0555 13.9445C17.4401 14.3291 17.9301 14.5911 18.4635 14.6972C18.997 14.8033 19.5499 14.7488 20.0524 14.5407C20.5549 14.3325 20.9844 13.9801 21.2865 13.5278C21.5887 13.0756 21.75 12.5439 21.75 12C21.75 11.2707 21.4603 10.5712 20.9445 10.0555C20.4288 9.53973 19.7293 9.25 19 9.25ZM19 13.25C18.7528 13.25 18.5111 13.1767 18.3055 13.0393C18.1 12.902 17.9398 12.7068 17.8452 12.4784C17.7505 12.2499 17.7258 11.9986 17.774 11.7561C17.8223 11.5137 17.9413 11.2909 18.1161 11.1161C18.2909 10.9413 18.5137 10.8223 18.7561 10.774C18.9986 10.7258 19.2499 10.7505 19.4784 10.8452C19.7068 10.9398 19.902 11.1 20.0393 11.3055C20.1767 11.5111 20.25 11.7528 20.25 12C20.25 12.3315 20.1183 12.6495 19.8839 12.8839C19.6495 13.1183 19.3315 13.25 19 13.25ZM5 2.25C4.4561 2.25 3.92442 2.41129 3.47218 2.71346C3.01995 3.01563 2.66747 3.44513 2.45933 3.94762C2.25119 4.45012 2.19673 5.00305 2.30284 5.5365C2.40895 6.06995 2.67086 6.55995 3.05546 6.94455C3.44005 7.32914 3.93005 7.59105 4.4635 7.69716C4.99695 7.80327 5.54988 7.74881 6.05238 7.54067C6.55488 7.33253 6.98437 6.98005 7.28654 6.52782C7.58872 6.07558 7.75 5.5439 7.75 5C7.75 4.27066 7.46027 3.57118 6.94455 3.05546C6.42882 2.53973 5.72935 2.25 5 2.25ZM5 6.25C4.75277 6.25 4.5111 6.17669 4.30554 6.03934C4.09998 5.90199 3.93976 5.70676 3.84515 5.47836C3.75054 5.24995 3.72579 4.99861 3.77402 4.75614C3.82225 4.51366 3.9413 4.29093 4.11612 4.11612C4.29093 3.9413 4.51366 3.82225 4.75614 3.77402C4.99861 3.72579 5.24995 3.75054 5.47836 3.84515C5.70676 3.93976 5.90199 4.09998 6.03934 4.30554C6.17669 4.5111 6.25 4.75277 6.25 5C6.25 5.33152 6.11831 5.64946 5.88388 5.88388C5.64946 6.11831 5.33152 6.25 5 6.25ZM12 16.25C11.4561 16.25 10.9244 16.4113 10.4722 16.7135C10.0199 17.0156 9.66747 17.4451 9.45933 17.9476C9.25119 18.4501 9.19673 19.0031 9.30284 19.5365C9.40895 20.0699 9.67086 20.56 10.0555 20.9445C10.4401 21.3291 10.9301 21.5911 11.4635 21.6972C11.997 21.8033 12.5499 21.7488 13.0524 21.5407C13.5549 21.3325 13.9844 20.9801 14.2865 20.5278C14.5887 20.0756 14.75 19.5439 14.75 19C14.75 18.2707 14.4603 17.5712 13.9445 17.0555C13.4288 16.5397 12.7293 16.25 12 16.25ZM12 20.25C11.7528 20.25 11.5111 20.1767 11.3055 20.0393C11.1 19.902 10.9398 19.7068 10.8452 19.4784C10.7505 19.2499 10.7258 18.9986 10.774 18.7561C10.8223 18.5137 10.9413 18.2909 11.1161 18.1161C11.2909 17.9413 11.5137 17.8223 11.7561 17.774C11.9986 17.7258 12.2499 17.7505 12.4784 17.8452C12.7068 17.9398 12.902 18.1 13.0393 18.3055C13.1767 18.5111 13.25 18.7528 13.25 19C13.25 19.3315 13.1183 19.6495 12.8839 19.8839C12.6495 20.1183 12.3315 20.25 12 20.25ZM12 2.25C11.4561 2.25 10.9244 2.41129 10.4722 2.71346C10.0199 3.01563 9.66747 3.44513 9.45933 3.94762C9.25119 4.45012 9.19673 5.00305 9.30284 5.5365C9.40895 6.06995 9.67086 6.55995 10.0555 6.94455C10.4401 7.32914 10.9301 7.59105 11.4635 7.69716C11.997 7.80327 12.5499 7.74881 13.0524 7.54067C13.5549 7.33253 13.9844 6.98005 14.2865 6.52782C14.5887 6.07558 14.75 5.5439 14.75 5C14.75 4.27066 14.4603 3.57118 13.9445 3.05546C13.4288 2.53973 12.7293 2.25 12 2.25ZM12 6.25C11.7528 6.25 11.5111 6.17669 11.3055 6.03934C11.1 5.90199 10.9398 5.70676 10.8452 5.47836C10.7505 5.24995 10.7258 4.99861 10.774 4.75614C10.8223 4.51366 10.9413 4.29093 11.1161 4.11612C11.2909 3.9413 11.5137 3.82225 11.7561 3.77402C11.9986 3.72579 12.2499 3.75054 12.4784 3.84515C12.7068 3.93976 12.902 4.09998 13.0393 4.30554C13.1767 4.5111 13.25 4.75277 13.25 5C13.25 5.33152 13.1183 5.64946 12.8839 5.88388C12.6495 6.11831 12.3315 6.25 12 6.25Z" />
  </svg>
);

const ProfileIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C10.0605 2.00369 8.16393 2.57131 6.54128 3.63374C4.91862 4.69617 3.63994 6.20754 2.86099 7.98377C2.08204 9.76 1.83643 11.7244 2.15408 13.6378C2.47173 15.5511 3.33893 17.3308 4.65005 18.76C5.58647 19.775 6.72299 20.5851 7.98799 21.1392C9.25298 21.6933 10.619 21.9793 12 21.9793C13.3811 21.9793 14.7471 21.6933 16.0121 21.1392C17.2771 20.5851 18.4136 19.775 19.35 18.76C20.6612 17.3308 21.5284 15.5511 21.846 13.6378C22.1637 11.7244 21.9181 9.76 21.1391 7.98377C20.3602 6.20754 19.0815 4.69617 17.4588 3.63374C15.8362 2.57131 13.9396 2.00369 12 2ZM12 20C9.92851 19.9969 7.93896 19.1903 6.45005 17.75C6.90209 16.6495 7.67108 15.7083 8.6593 15.0459C9.64752 14.3835 10.8104 14.0298 12 14.0298C13.1897 14.0298 14.3526 14.3835 15.3408 15.0459C16.329 15.7083 17.098 16.6495 17.55 17.75C16.0611 19.1903 14.0716 19.9969 12 20ZM10 10C10 9.60444 10.1173 9.21776 10.3371 8.88886C10.5569 8.55996 10.8692 8.30362 11.2347 8.15224C11.6001 8.00087 12.0023 7.96126 12.3902 8.03843C12.7782 8.1156 13.1346 8.30608 13.4143 8.58579C13.694 8.86549 13.8844 9.22186 13.9616 9.60982C14.0388 9.99778 13.9992 10.3999 13.8478 10.7654C13.6964 11.1308 13.4401 11.4432 13.1112 11.6629C12.7823 11.8827 12.3956 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2108 11.0391 10 10.5304 10 10ZM18.91 16C18.0166 14.4718 16.6415 13.283 15 12.62C15.5092 12.0427 15.841 11.3307 15.9555 10.5694C16.0701 9.80822 15.9625 9.03011 15.6458 8.3285C15.3291 7.62688 14.8166 7.03156 14.17 6.61397C13.5233 6.19637 12.7698 5.97425 12 5.97425C11.2303 5.97425 10.4768 6.19637 9.83014 6.61397C9.18346 7.03156 8.67102 7.62688 8.3543 8.3285C8.03758 9.03011 7.93004 9.80822 8.04458 10.5694C8.15912 11.3307 8.49088 12.0427 9.00005 12.62C7.35865 13.283 5.98352 14.4718 5.09005 16C4.37799 14.7871 4.00177 13.4065 4.00005 12C4.00005 9.87827 4.8429 7.84344 6.34319 6.34315C7.84349 4.84285 9.87832 4 12 4C14.1218 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C19.9983 13.4065 19.6221 14.7871 18.91 16Z" />
  </svg>
);

const SubscriptionIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 9.66966C21.9368 9.48674 21.822 9.32608 21.6693 9.20716C21.5167 9.08823 21.3328 9.01615 21.14 8.99966L15.45 8.16966L12.9 2.99966C12.8181 2.83059 12.6902 2.688 12.5311 2.58823C12.3719 2.48846 12.1878 2.43555 12 2.43555C11.8121 2.43555 11.6281 2.48846 11.4689 2.58823C11.3097 2.688 11.1819 2.83059 11.1 2.99966L8.54998 8.15966L2.85998 8.99966C2.6749 9.02596 2.5009 9.10362 2.35773 9.22381C2.21455 9.34401 2.10794 9.50193 2.04998 9.67966C1.99692 9.85333 1.99216 10.0382 2.03621 10.2143C2.08025 10.3905 2.17144 10.5514 2.29998 10.6797L6.42998 14.6797L5.42998 20.3597C5.3896 20.5481 5.40453 20.7442 5.47296 20.9243C5.54139 21.1044 5.66041 21.261 5.81571 21.3751C5.971 21.4891 6.15595 21.5559 6.34831 21.5674C6.54066 21.5789 6.73224 21.5345 6.89998 21.4397L12 18.7697L17.1 21.4397C17.2403 21.5188 17.3988 21.5602 17.56 21.5597C17.7718 21.5604 17.9784 21.4939 18.15 21.3697C18.3051 21.2585 18.4252 21.1053 18.4961 20.9281C18.567 20.7509 18.5857 20.5571 18.55 20.3697L17.55 14.6897L21.68 10.6897C21.8244 10.5673 21.9311 10.4066 21.9877 10.226C22.0444 10.0455 22.0486 9.85253 22 9.66966ZM15.85 13.6697C15.7342 13.7821 15.6474 13.9208 15.5969 14.074C15.5464 14.2273 15.5337 14.3905 15.56 14.5497L16.28 18.7497L12.52 16.7497C12.3738 16.6774 12.213 16.6398 12.05 16.6398C11.8869 16.6398 11.7261 16.6774 11.58 16.7497L7.81998 18.7497L8.53998 14.5497C8.56622 14.3905 8.55354 14.2273 8.50305 14.074C8.45255 13.9208 8.36572 13.7821 8.24998 13.6697L5.24998 10.6697L9.45998 10.0597C9.62198 10.0371 9.77598 9.9752 9.90848 9.87931C10.041 9.78342 10.1479 9.65649 10.22 9.50966L12 5.69966L13.88 9.51966C13.952 9.66649 14.059 9.79342 14.1915 9.88931C14.324 9.9852 14.478 10.0471 14.64 10.0697L18.85 10.6797L15.85 13.6697Z" />
  </svg>
);

const ShortcutsIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.562 14.6338L14.0003 12L18.562 9.36621C18.7915 9.23353 18.959 9.0151 19.0276 8.75896C19.0962 8.50281 19.0603 8.22991 18.9277 8.00026C18.7952 7.7706 18.5768 7.60299 18.3207 7.53427C18.0646 7.46555 17.7917 7.50134 17.562 7.63379L13 10.2678V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5195 4.10536 12.2652 4 12 4C11.7347 4 11.4804 4.10536 11.2928 4.29289C11.1053 4.48043 11 4.73478 11 5V10.2678L6.43795 7.63376C6.20823 7.50131 5.93531 7.46552 5.6792 7.53424C5.42309 7.60296 5.20475 7.77057 5.07218 8.00023C4.93962 8.22988 4.90368 8.50278 4.97227 8.75893C5.04086 9.01507 5.20836 9.2335 5.43795 9.36618L9.99964 12L5.43795 14.6338C5.20836 14.7665 5.04086 14.9849 4.97227 15.241C4.90368 15.4972 4.93962 15.7701 5.07218 15.9997C5.20475 16.2294 5.42309 16.397 5.6792 16.4657C5.93531 16.5345 6.20823 16.4987 6.43795 16.3662L11 13.7322V19C11 19.2652 11.1053 19.5196 11.2928 19.7071C11.4804 19.8946 11.7347 20 12 20C12.2652 20 12.5195 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13.7322L17.562 16.3662C17.7917 16.4987 18.0646 16.5345 18.3207 16.4658C18.5768 16.397 18.7952 16.2294 18.9277 15.9998C19.0603 15.7701 19.0962 15.4972 19.0276 15.2411C18.959 14.9849 18.7915 14.7665 18.562 14.6338V14.6338Z" />
  </svg>
);

const CloseIcon = (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.4099 12.0002L17.7099 7.71019C17.8982 7.52188 18.004 7.26649 18.004 7.00019C18.004 6.73388 17.8982 6.47849 17.7099 6.29019C17.5216 6.10188 17.2662 5.99609 16.9999 5.99609C16.7336 5.99609 16.4782 6.10188 16.2899 6.29019L11.9999 10.5902L7.70994 6.29019C7.52164 6.10188 7.26624 5.99609 6.99994 5.99609C6.73364 5.99609 6.47824 6.10188 6.28994 6.29019C6.10164 6.47849 5.99585 6.73388 5.99585 7.00019C5.99585 7.26649 6.10164 7.52188 6.28994 7.71019L10.5899 12.0002L6.28994 16.2902C6.19621 16.3831 6.12182 16.4937 6.07105 16.6156C6.02028 16.7375 5.99414 16.8682 5.99414 17.0002C5.99414 17.1322 6.02028 17.2629 6.07105 17.3848C6.12182 17.5066 6.19621 17.6172 6.28994 17.7102C6.3829 17.8039 6.4935 17.8783 6.61536 17.9291C6.73722 17.9798 6.86793 18.006 6.99994 18.006C7.13195 18.006 7.26266 17.9798 7.38452 17.9291C7.50638 17.8783 7.61698 17.8039 7.70994 17.7102L11.9999 13.4102L16.2899 17.7102C16.3829 17.8039 16.4935 17.8783 16.6154 17.9291C16.7372 17.9798 16.8679 18.006 16.9999 18.006C17.132 18.006 17.2627 17.9798 17.3845 17.9291C17.5064 17.8783 17.617 17.8039 17.7099 17.7102C17.8037 17.6172 17.8781 17.5066 17.9288 17.3848C17.9796 17.2629 18.0057 17.1322 18.0057 17.0002C18.0057 16.8682 17.9796 16.7375 17.9288 16.6156C17.8781 16.4937 17.8037 16.3831 17.7099 16.2902L13.4099 12.0002Z" />
  </svg>
);
