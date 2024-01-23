import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging in");

    // try {
    //   const userInfo = {
    //     id: data.id,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();

    //   const verifyUser = verifyToken(res.data.accessToken) as TUser;

    //   dispatch(
    //     setUser({
    //       user: verifyUser,
    //       token: res.data.accessToken,
    //     })
    //   );
    //   toast.success("logged in successful", { id: toastId, duration: 2000 });
    //   navigate(`/${verifyUser.role}/dashboard`);
    // } catch (error) {
    //   toast.error("Something want wrong", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Post</Button>
    </PHForm>
  );
};

export default Login;
