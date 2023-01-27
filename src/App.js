import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";
import DeeplyPart from "./DeeplyPart";

// use hoc for class based components
class LegacyWelcomeClass extends Component {
	render() {
		const { t } = this.props;
		return <h2>{t("title")}</h2>;
	}
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
	return (
		<Trans i18nKey="description.part1">
			To get started, edit <code>src/App.js</code> and save to reload.
		</Trans>
	);
}

// page uses the hook
function Page() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Welcome />
				<button type="button" onClick={() => changeLanguage("vi")}>
					vn
				</button>
				<button type="button" onClick={() => changeLanguage("en")}>
					en
				</button>
			</div>
			<div className="App-intro">
				<MyComponent />
			</div>
			<div>{t("description.part2")}</div>
			<DeeplyPart />
		</div>
	);
}

// loading component for suspense fallback
const Loader = () => (
	<div className="App">
		<img src={logo} className="App-logo" alt="logo" />
		<div>loading...</div>
	</div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Page />
		</Suspense>
	);
}
