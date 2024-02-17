import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      console.log(res);

      const verifyUser = verifyToken(res.data.accessToken) as TUser;

      dispatch(
        setUser({
          user: verifyUser,
          token: res.data.accessToken,
        })
      );
      toast.success("logged in successful", { id: toastId, duration: 2000 });
      navigate(`/${verifyUser.role}/dashboard`);
    } catch (error) {
      toast.error("Something want wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type={"text"} name={"id"} label={"ID:"} />
        <PHInput type={"text"} name={"password"} label={"Password:"} />
        <Button htmlType="submit">Post</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
