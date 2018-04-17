import { AttemptCourseCardProps } from ".";

export const createPlaceholderData = (
  courseOnClick: (courseIndex: number) => void,
) => {
  const cardHeaderProps = {
    image: "https://via.placeholder.com/160x120?text=Service%20Branch",
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
