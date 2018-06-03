import { createPlaceholderQuantitySliderProps } from "components/QuantitySlider/createPlaceholderQuantitySliderProps";
import { OnboardingPlanCustomizerProps } from ".";

export const createPlaceholderOnboardingPlanCustomizerProps = (): OnboardingPlanCustomizerProps => ({
  ...createPlaceholderQuantitySliderProps(),
});
