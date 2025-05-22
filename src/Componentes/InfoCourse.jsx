const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      {/* Header */}
      <h1>{course.name}</h1>

      {/* Content */}
      {course.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}

      {/* Total */}
      <p>
        <strong>Number of exercises {total}</strong>
      </p>
    </div>
  );
};

export default Course;
