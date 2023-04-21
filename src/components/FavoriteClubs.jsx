import { defineMessage, Trans } from "@lingui/macro";

const isLoggedIn = true;

// Lazy translation by picking messages based on variable value
const userSoccerXPBasic = 100;
const userSoccerXPPro = 1000;
const userSoccerXPExpert = 10000;

const userSoccerXPMessages = {
  [userSoccerXPBasic]: defineMessage({
    message: "You have a basic membership",
  }),
  [userSoccerXPPro]: defineMessage({
    message: "You have a pro membership",
  }),
  [userSoccerXPExpert]: defineMessage({
    message: "You have an expert membership",
  }),
};

// Lazy translation by passing messages as props
function ActionButton(props) {
  return (
    <button className="font-medium text-yellow-400 hover:underline">
      {props.label}
    </button>
  );
}

export default function FavoriteClubs({ userXPPoints }) {
  // Lazy translations
  const favoriteTeamLogoColors = [
    defineMessage({ message: "Red, Gold, Blue, White", name: "Arsenal" }),
    defineMessage({ message: "Blue, Gold, White", name: "Manchester City" }),
    defineMessage({ message: "Red, Yellow", name: "Manchester United" }),
    defineMessage({ message: "Blue", name: "Tottenham Hotspur" }),
  ];

  return (
    <div className="text-gray-100 flex justify-center items-center flex-col p-8 gap-4 border border-opacity-25 rounded-lg bg-gray-900">
      <div className="flex items-center gap-6">
        <h3 className="font-bold text-xl">
          <Trans>Your favorite clubs and their colors</Trans>
        </h3>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">
          <Trans id={userSoccerXPMessages[userXPPoints].id} />
        </span>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Trans>Favorite Club</Trans>
              </th>
              <th scope="col" className="px-6 py-3">
                <Trans>Club Color</Trans>
              </th>
              <th scope="col" className="px-6 py-3">
                <Trans>Action</Trans>
              </th>
            </tr>
          </thead>
          <tbody>
            {favoriteTeamLogoColors.map((color) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {color.name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Trans id={color.id} />
                  {color.color}
                </th>
                <td className="px-6 py-4">
                  <ActionButton
                    label={
                      isLoggedIn ? (
                        <Trans>Edit</Trans>
                      ) : (
                        <Trans>!Login to Edit!</Trans>
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
