import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import "./App.css";
import FavoriteClubs from "./components/FavoriteClubs";
import LanguageSwitcher from "./components/LanguageSwitcher";
import MatchInfo from "./components/MatchInfo";
import MatchStats from "./components/MatchStats";
import MatchSummary from "./components/MatchSummary";
import UserNotification from "./components/UserNotification";

function App({ locale, handleLocaleChange }) {
  const { i18n } = useLingui();
  const currentDate = new Date();
  const name = "Vaibhav";

  // Usage of `t` macro
  const message = t({
    id: "message.greeting",
    comment: "A greeting message for the user",
    message: `Hello ${name}. Greetings from MySoccerStat. Enjoy your match details! :)`,
  });

  return (
    <div className="bg-gray-800">
      <header className="px-10 py-6 bg-gray-900">
        <nav className="flex justify-between">
          <a className="font-bold text-lg italic text-yellow-400" href="#">
            <span className="mr-2 not-italic">⚽</span>
            MySoccerStat
          </a>
          <ul className="text-gray-200 flex gap-12">
            <li className="underline underline-offset-8 text-yellow-400 font-medium hover:opacity-80">
              {/* TRANSLATIONS */}
              <a href="#">
                <Trans>Matches</Trans>
              </a>
            </li>
            <li>
              <Trans>Teams</Trans>
            </li>
            <li>
              <Trans>Competitions</Trans>
            </li>
            <li>
              <Trans>Account</Trans>
            </li>
          </ul>
          <LanguageSwitcher
            locale={locale}
            handleLocaleChange={handleLocaleChange}
          />
        </nav>
      </header>
      <div className="flex items-center justify-between my-10 container mx-auto">
        <h2 dir="auto" className="text-gray-200 text-2xl font-medium">👋 {message}</h2>
        <UserNotification />
      </div>
      <div className="grid gap-8 grid-cols-2 m-10 container mx-auto">
        <MatchStats />
        <MatchSummary />
        <MatchInfo />
        <FavoriteClubs userXPPoints={1000} />
      </div>
      <footer className="text-white pb-20 text-sm text-center" id="footer">
        <Trans>
          {/* Date formatting */}
          Copyright © {i18n.date(currentDate, { year: "numeric" })} MySoccerStat
          Inc. All Rights Reserved. <br />
          {/* Translating complex JSX */}
          <a
            href="/privacy"
            className="underline underline-offset-8 text-yellow-400 hover:opacity-80"
          >
            Privacy Policy
          </a>
        </Trans>
      </footer>
    </div>
  );
}

export default App;
