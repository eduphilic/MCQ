import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import stringsJson from "../../settings/strings.json";

interface Strings extends LocalizedStringsMethods {
  heroHeader: string;

  // ${1} is required.
  formFieldIsRequired: string;

  onboardingFormLoginTitle: string;
  onboardingFormLoginButtonLabel: string;
  onboardingFormLoginForgotPassword: string;
  onboardingFormSignupTitle: string;
  onboardingFormSignupButtonLabel: string;
  onboardingFormEnterMobileNumber: string;
  onboardingFormEnterMobileNumberFieldValidationDescription: string;
  onboardingFormEnterPassword: string;
  onboardingFormEnterPasswordFieldValidationDescription: string;
  onboardingFormEnterYourName: string;
  onboardingFormEnterYourNameFieldValidationDescription: string;

  languageSelectSelectPreferredLanguage: string;
  languageSelectEnglish: string;
  languageSelectHindi: string;

  heroPrimaryText: string;
  heroSecondaryText: string;
}

const strings: Strings = new LocalizedStrings(stringsJson);

export default strings;
