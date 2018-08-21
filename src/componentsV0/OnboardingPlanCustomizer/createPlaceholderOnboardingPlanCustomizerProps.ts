import { createPlaceholderQuantitySliderProps } from "componentsV0/QuantitySlider/createPlaceholderQuantitySliderProps";
import { OnboardingPlanCustomizerProps } from ".";

export const createPlaceholderOnboardingPlanCustomizerProps = (): OnboardingPlanCustomizerProps => ({
  ...createPlaceholderQuantitySliderProps(),
});
