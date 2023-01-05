import Games from "@fluentui/svg-icons/icons/games_24_regular.svg?raw";
import Flash from "@fluentui/svg-icons/icons/flash_24_regular.svg?raw";
import Pen from "@fluentui/svg-icons/icons/calligraphy_pen_24_regular.svg?raw";
import Link from "@fluentui/svg-icons/icons/link_square_24_regular.svg?raw";

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
		title: "Flux",
		description:
			"A professional yet usable Python framework, fit for any developer. Flux is an easy language to learn targeting at all developers across the world. Due to it's Python architecture, it can process normal Python code, heaven for any developer.",
		icon: Flash
	},
	{
		title: "Inspire",
		description:
			"A powerful and helpful integrated development environment enhanced for Flux development, yet supporting any of your favourite languages. Powered by Esmerelda AI, it can detect what you're aiming to write or give you helpful tips on how to improve, for free.",
		icon: Pen
	},
	{
		title: "Protocol",
		description:
			"A worldwide gaming platform where anyone can make games for others to download and play! With games even by Depth itself, Protocol really is quality for gamers with high standards.",
		icon: Link
	}
];

export const fluxExamples = [
	{
		name: "Sample1",
		extension: "py",
		icon: "/ui/icons/code.svg",
		code: `# Sample: Hello World\nfrom Foundation import *\n\nSystem.Console.Write("Hello World!") # This prints write after the last printed text, without making a new line.\n# With a new line:\nSystem.Console.WriteLine("Hello World!")`
	},
	{
		name: "Sample2",
		extension: "py",
		icon: "/ui/icons/code.svg",
		code: `# Sample: Present the current time, with seconds to the user.\nfrom Foundation import *\n\nCurrentTime = System.Chronology.Time("Local", WithSeconds = True)\nSystem.Console.WriteLine(CurrentTime)`
	},
	{
		name: "Sample3",
		extension: "py",
		icon: "/ui/icons/code.svg",
		code: `# Sample: Obtains Outlook emails on the Exchange server and compares them with local versions.\n# This sample relies on the non-existent Microsoft.Exchange API, so technically this code could not be run.\nfrom Foundation import *\n\ndef OnlineOrLocalMailDiff:\n  msgdiff = Andrexial.Esmerelda.Core.Calculation.Difference(Andrexial.Esmerelda.Core.Data.Query(Microsoft.Exchange.Outlook.Inbox, param=System.Formatting.Json(f"user: crescent@andrexial.org.uk, pass: {Andrexial.Esmerelda.Enigma.Encryption.Vault.Password.Crescent.Pass}")), Andrexial.Esmerelda.Core.Data.Query(Local:Microsoft.Exchange.Outlook.Inbox, param=System.Formatting.Json(f"user: crescent@andrexial.org.uk"))\n  return msgdiff`,
	}
];
