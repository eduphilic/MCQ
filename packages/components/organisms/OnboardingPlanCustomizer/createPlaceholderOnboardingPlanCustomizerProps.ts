import { OnboardingPlanCustomizerProps } from ".";
import { createPlaceholderQuantitySliderProps } from "../../molecules/QuantitySlider/createPlaceholderQuantitySliderProps";

export const createPlaceholderOnboardingPlanCustomizerProps = (): OnboardingPlanCustomizerProps => ({
  ...createPlaceholderQuantitySliderProps(),
});
