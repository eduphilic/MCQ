import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import stringsJson from "../../settings/strings.json";

interface Strings extends LocalizedStringsMethods {
  heroHeader: string;

  // ${1} is required.
  formFieldIsRequired: string;
}

const strings: Strings = new LocalizedStrings(stringsJson);

export default strings;
