import { AttemptCourseCardProps } from ".";
import { AttemptCourseCardHeaderProps } from "../../molecules/AttemptCourseCardHeader";

export const createPlaceholderData = (
  courseOnClick: (courseIndex: number) => void,
) => {
  const cardHeaderProps: AttemptCourseCardHeaderProps = {
    entry: "Army",
    label: "Army Mock Tests",
  };

  const courses: AttemptCourseCardProps["courses"] = [];
  for (let i = 0; i < 11; i += 1) {
    courses.push({
      courseTitle: "Soldier GD",
      onClick: () => courseOnClick(i),
      passText: "10th Pass",
    });
  }

  const placeholderData: AttemptCourseCardProps = {
    cardHeaderProps,
    courses,
  };

  return placeholderData;
};
