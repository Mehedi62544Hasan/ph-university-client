import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const academicSemester = useGetAllSemesterQuery(undefined);

  console.log(academicSemester);

  return (
    <div>
      <h1>This is academic semester route</h1>
    </div>
  );
};

export default AcademicSemester;
