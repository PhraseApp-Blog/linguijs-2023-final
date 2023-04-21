import { Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";

export default function MatchSummary() {
  const { i18n } = useLingui();
  const matchDate = new Date("2022-02-17T20:00");
  return (
    <div className="text-gray-100 flex justify-center items-center flex-col p-8 gap-4 border border-opacity-25 rounded-lg bg-gray-900">
      <h3 className="font-bold text-xl">
        {/* `Custom ID with Trans */}
        <Trans id="summary.title">Match Summary</Trans>
      </h3>
      <p dir="auto" className="text-gray-200 leading-8">
        <Trans id="summary.description">
          On {i18n.date(matchDate, { dateStyle: "full" })}, Liverpool proved...
        </Trans>
      </p>
    </div>
  );
}
