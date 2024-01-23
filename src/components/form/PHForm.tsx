import { useForm } from "react-hook-form";

const PHForm = ({ onsubmit, children }) => {
  const handleSubmit = useForm();

  return <form onSubmit={handleSubmit(onsubmit)}>{children}</form>;
};

export default PHForm;
