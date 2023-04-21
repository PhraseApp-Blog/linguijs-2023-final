import { Plural } from "@lingui/macro";

export default function UserNotification() {
  const notificationCount = 2;
  const userName = "Vaibhav";

  return (
    <div className="p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
        >
          <title>bell</title>
          <g fill="none">
            <path
              fill="currentcolor"
              d="M6 11c0-4.8 4-6 6-6 4.8 0 6 4 6 6v4l2 2H4l2-2v-4z"
            ></path>
            <path
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5c-2 0-6 1.2-6 6v4l-2 2h16l-2-2v-4c0-2-1.2-6-6-6zm0 0V3M9 18c0 1 .6 3 3 3s3-2 3-3"
            ></path>
          </g>
        </svg>
        <span className="sr-only">Info</span>
        <p className="font-medium">
          <Plural
            value={notificationCount}
            _0={
              <Trans>
                Oops! There are <strong>#</strong> notifications in your inbox,{" "}
                {userName}!
              </Trans>
            }
            one="You have # new notification"
            two="You have 2 new notifications. Hehe"
            _3="You have 3 new notifications"
            few="You have a few new notifications"
            many="You have many new notifications!"
            other="You have # new notifications 🔔"
          />
        </p>
      </div>
    </div>
  );
}
