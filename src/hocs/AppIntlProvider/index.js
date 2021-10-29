import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import messages_en from "../../i18n/en.json";
import messages_ru from "../../i18n/ru.json";
import dayjs from "dayjs";

const AppIntlProvider = ({
	children
}) => {
	//const currentLanguage = useSelector((state) => state.language.selectedLanguage) ?? "ru";
	const currentLanguage = navigator.language.slice(
		0,
		2
	) && "en";
	//if need to show currency use it else - delete
	const formats = {
		number: {
			CURRENCY: {
				style: "currency",
				currency: "USD", // default currency
			},
		},
	};

	// dictionary keys with translation
	const messages = {
		"en": messages_en,
		"ru": messages_ru,
	};

	useEffect(
		() => {
			document.documentElement.lang = currentLanguage;

			dayjs.locale(currentLanguage);
		},
		[currentLanguage]
	);

	return (
		<IntlProvider
			locale={currentLanguage}
			messages={messages[currentLanguage]}
			formats={formats}
		>
			{children}
		</IntlProvider>
	);
};

export default AppIntlProvider;
