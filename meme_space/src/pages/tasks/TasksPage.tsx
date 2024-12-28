import { Title } from "../../components/primitives/Title";

const TasksPage = () => {
  return (
    <div className="w-full xl:w-[380px] xl:m-auto flex flex-col items-stretch px-5 justify-stretch">
      <Title text="Tasks" className="w-full" />
    </div>
  );
};
export default TasksPage;
