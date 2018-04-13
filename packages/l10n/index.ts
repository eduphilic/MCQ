import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import stringsJson from "../../settings/strings.json";

interface Strings extends LocalizedStringsMethods {
  heroHeader: string;
}

const strings: Strings = new LocalizedStrings(stringsJson);

export default strings;
