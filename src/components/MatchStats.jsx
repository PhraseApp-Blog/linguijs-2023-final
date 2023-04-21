import { i18n } from "@lingui/core";
import { t, Trans } from "@lingui/macro";

export default function MatchStats() {
  return (
    <div
      className="flex items-center gap-4 border border-opacity-30 rounded-lg bg-gray-900 flex-col text-gray-100 justify-center p-4"
      style={{
        backgroundImage:
          'url("https://static.standard.co.uk/2021/08/17/08/PLHow2WatchLiverpoolEverton.jpg?width=1024&auto=webp&quality=50&crop=968%3A645%2Csmart")',
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-bold text-xl">
        <Trans>Final Score</Trans>
      </h3>
      <div className="flex items-center gap-2">
        <h3 className="font-medium text-lg">Liverpool</h3>
        <img
          src="https://www.freepnglogos.com/uploads/liverpool-logo-0.png"
          // Custom ID with `t`
          alt={t({ id: "liverpool.caption", message: `Logo of Liverpool` })}
          className="h-16 p-2 rounded-full"
        />
        <span className="text-6xl">
          {/* Number formatting */}
          {i18n.number(2)} : {i18n.number(0)}
        </span>
        <h3 className="font-medium text-lg">Everton</h3>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/06/Everton-Logo.png"
          alt={t({ id: "everton.caption", message: `Logo of Everton` })}
          className="h-16 p-2 rounded-full"
        />
      </div>
    </div>
  );
}
