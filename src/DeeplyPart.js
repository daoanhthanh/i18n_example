import { useTranslation, Trans } from "react-i18next";
// Component using the Trans component
export default function DeeplyPart() {
	const { t } = useTranslation();
	return <div>{t("very.deeply.part.here")}</div>;
}
