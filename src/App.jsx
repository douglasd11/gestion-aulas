import './App.css'
import { Box, Button, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

import { CheckboxInput, PageMetaData, PasswordInput } from "../components";
import { FormInput } from "../components";
// import useLogin from "./useLogin";
// import AuthLayout from "../AuthLayout";

/**
 * Bottom Links goes here
 */
// const BottomLink = () => {
//   return <Box sx={{
//     my: "16px",
//     display: "flex",
//     justifyContent: "center"
//   }}>
//       <Typography variant="body2" color={"text.secondary"} sx={{
//       display: "flex",
//       flexWrap: "nowrap",
//       gap: 0.5
//     }}>
//         Don&apos;t have an account?&nbsp;
//         <Link to="/auth/register">
//           <Typography variant="subtitle2" component={"span"}>
//             Register
//           </Typography>
//         </Link>
//       </Typography>
//     </Box>;
// };

const App = () => {
  // const {
  //   loading,
  //   login,
  //   control
  // } = useLogin();
  return <>
      <PageMetaData title={"Login"} />  

      {/* <AuthLayout authTitle="Login In" helpText="Enter your email address and password to access admin panel." bottomLinks={<BottomLink />}> */}
        
        <form>
          <FormInput name="email" type="email" label="Email Address" control={true} />

          <Box sx={{
          mt: 2
        }}>
            <PasswordInput name="password" type="password" label={"Password"} control={true} />
          </Box>

          <Box sx={{
          mt: 1
        }}>
            <CheckboxInput name="rememberMe" label="Remember me" control={true} />
          </Box>

          <Box sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2
        }}>
            <Button variant="contained" color="primary" type="submit" disabled={false} size={"large"}>
              Login
            </Button>
          </Box>
        </form>

      {/* </AuthLayout> */}
    </>;
};

export default App;