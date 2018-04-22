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
  heroFooterText: string;

  landingCardAttemptButton: string;

  pageFooterText: string;

  logoutButtonText: string;

  onboardingStep: string;
  onboardingSelectEntryType: string;
  onboardingSelectCategory: string;
  onboardingPlan: string;

  onboardingPleaseSelectAtLeastOneEntryType: string;
  onboardingPleaseSelectCategoryTypeEachEntry: string;
  onboardingPleaseSelectMembershipPlan: string;

  onboardingSummarySelectedEntryType: string;
  onboardingSummarySelectedCategories: string;

  navigationBackButtonText: string;
  navigationNextButtonText: string;
  navigationFinishButtonText: string;
  selectionChangeButtonText: string;

  adminDashboardAppBarTitle: string;

  adminLinkDashboard: string;
  adminLinkEntryManager: string;
  adminLinkQuestManager: string;
  adminLinkTestManager: string;
  adminLinkUserManager: string;
  adminLinkPlanManager: string;
  adminLinkIndexManager: string;
  adminLinkRevenueManager: string;

  adminLoginFormTitle: string;
  adminLoginHeroTextPrimary: string;
  adminLoginHeroTextSecondary: string;
}

const strings: Strings = new LocalizedStrings(stringsJson);

export default strings;
