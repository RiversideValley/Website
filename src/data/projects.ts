import Games from "@fluentui/svg-icons/icons/games_24_regular.svg?raw";
import Flash from "@fluentui/svg-icons/icons/flash_24_regular.svg?raw";
import Pen from "@fluentui/svg-icons/icons/calligraphy_pen_24_regular.svg?raw";
import Star from "@fluentui/svg-icons/icons/star_emphasis_24_regular.svg?raw";

export type FeatureCardData = {
	title: string;
	description: string;
	icon: any;
};

export interface FileData {
	name: string;
	icon: string;
}

export const featureCards: FeatureCardData[] = [
	{
		title: "Emerald",
		description:
			"A stylish fluent Minecraft launcher made using WinUI technologies in the fast C# language really pushes the boundary of the platform. A true compliment to any gamer's setup.",
		icon: Games
	},
	{
		title: "Fluid",
		description:
			"A usable yet professional cross-platform programming framework for desktop, mobile, web and IoT apps. Fluid is an easy language to learn targeting at all developers across the world. Due to it's Python and C architecture, it can process normal Python code, heaven for any developer.",
		icon: Flash
	},
	{
		title: "Inspire",
		description:
			"A powerful and helpful integrated development environment which enhances your experience has a developer, with support for all of your favourite languages. Powered by Esmerelda AI, it can detect what you're aiming to write or give you helpful tips on how to improve, for free.",
		icon: Pen
	},
	{
		title: "Otherworld",
		description:
			"An engaging and exhilerating 12+ videogame series by Riverside Valley, quality for gamers with high standards. Made using our Momentum game engine to deliver stunning graphics with speedy performance for any platform.",
		icon: Star
	}
];

export const fluxExamples = [ 
	{
		name: "Sample1",
		extension: "fl",
		icon: "/ui/icons/code.svg",
		code: `# Sample: Hello World\nfrom System import Console;\n\nConsole.Write("Hello World!") # This prints write after the last printed text, without making a new line.\n# With a new line:\nConsole.WriteLine("Hello World!")`
	},
	{
		name: "Sample2",
		extension: "fl",
		icon: "/ui/icons/code.svg",
		code: `# Sample: Present the current time, with seconds to the user.\nfrom System import Chrononlogy, Console;\n\nCurrentTime = Chronology.Time("Local", WithSeconds = True)\nConsole.WriteLine(CurrentTime)`
	}
//	{
//		name: "Sample3",
//		extension: "fl",
//		icon: "/ui/icons/code.svg",
//		code: `# Sample: Obtains Outlook emails on the Exchange server and compares them with local versions.\n# This sample relies on the non-existent Microsoft.Exchange API, so technically this code could not be run.\nfrom Microsoft import Exchange\nfrom Riverside import Esmerelda\n\ndef OnlineOrLocalMailDiff:\n  return Esmerelda.Core.Calculation.Difference(Andrexial.Esmerelda.Core.Data.Query(Microsoft.Exchange.Outlook.Inbox, param=System.Formatting.Json(f"user: crescent@andrexial.org.uk, pass: {Andrexial.Esmerelda.Enigma.Encryption.Vault.Password.Crescent.Pass}")), Andrexial.Esmerelda.Core.Data.Query(Local:Microsoft.Exchange.Outlook.Inbox, param=System.Formatting.Json(f"user: lamparter"))`,
//	}
];
