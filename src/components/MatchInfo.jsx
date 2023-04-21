import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";

export default function MatchInfo() {
  const { i18n } = useLingui();
  const matchDate = new Date("2022-02-17T20:00");
  return (
    <div
      className="text-gray-100 flex justify-center items-center flex-col p-8 gap-4 border border-opacity-25 rounded-lg bg-gray-900"
      style={{
        backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/2880px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg")',
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-bold text-xl">
        <Trans>Match Info</Trans>
      </h3>
      <div>
        <ul className="flex justify-center items-center w-full gap-8">
          <li className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            <span className="text-gray-200 font-lg font-bold">
              <Trans>📅 Date</Trans>
            </span>
            <span>{i18n.date(matchDate)}</span>
          </li>
          <li className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            <span className="text-gray-200 font-lg font-bold">
              <Trans>⏱️ Time</Trans>
            </span>
            <span>{i18n.date(matchDate, { timeStyle: "short" })}</span>
          </li>
          <li className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            <span className="text-gray-200 font-lg font-bold">
              <Trans>📍 Venue</Trans>
            </span>
            <span>Anfield</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
