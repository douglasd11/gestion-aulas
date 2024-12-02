import { useState } from 'react';
import { useFormValidate } from 'use-form-validate';
import Logo from '../assets/LogoIsoft.png';
import useSession from '../context/Auth/useSession';
import { ROUTES } from '../tools/CONSTANTS';
import SweetAlert2 from 'react-sweetalert2';

function Register() {
  const [responseError, setResponseError] = useState('')
  const {
    handleSubmit,
    getFieldProps,
    getFieldError,
    resetForm,
    errors,
  } = useFormValidate();

  const { handleSignUp, loading_auth } = useSession()
  const [swalProps, setSwalProps] = useState({});

  const onSubmit = (formData) => {
    console.log(formData)
    handleSignUp(formData)
      .then(({ response }) => {
        if (response.status === 200) {
          resetForm()
          setSwalProps({
            show: true,
            title: "Registro exitoso",
            text: "Se ha registrado correctamente",
            icon: "success",
            onResolve: () => {
              setSwalProps({
                show: false,
              });
            },
          });
        } else {
          console.log(response)
          if (response.data.message) {
            setResponseError(response.data.message)
          } else {
            console.error(response)
          }
        }
      })
      .catch((error) => {
        if (error.response.data) {
          if (error.response.data.message) {
            alert(error.response.data.message)
          } else {
            console.error(error)
          }
        }
      })
  };
  return (
<>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative max-w-md w-full p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="absolute top-2 right-2">
            <img src={Logo} alt="Company Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
          <input
            type="text"
            placeholder="Name"
            {...getFieldProps("name", { required: true })}
            className={`w-full p-2 mb-1 border ${errors['name'] ? 'border-red-500' : 'border-gray-300'}  rounded`}
          />
          <p className="text-red-500">{getFieldError("name")}</p>
          <input
            type="email"
            placeholder="Email"
            {...getFieldProps("email", { required: true, email: true })}
            className={`w-full p-2 mb-1 mt-3 border ${errors['email'] ? 'border-red-500' : 'border-gray-300'}  rounded`}
          />
          <p className="text-red-500">{getFieldError("email")}</p>
          <input
            type="password"
            placeholder="Password"
            {...getFieldProps("password", { required: true })}
            className={`w-full p-2 mb-1 mt-3 border ${errors['password'] ? 'border-red-500' : 'border-gray-300'}  rounded`}
          />
          <p className="text-red-500">{getFieldError("password")}</p>
          <select
            {...getFieldProps("role", { required: true }, undefined, 'usuario')}
            className={`w-full p-2 mb-1 mt-3 border ${errors['rol'] ? 'border-red-500' : 'border-gray-300'}  rounded`}
          >
            <option value="usuario">Estudiante/Profesor</option>
            <option value="administrativo">administrativo</option>
          </select>
          <p className="text-red-500">{getFieldError("rol")}</p>

          {
            loading_auth ?
              <p className="text-center">Loading...</p>
              :
              <button
                className="w-full p-2 mb-1 mt-3 text-white bg-blue-500 rounded"
              >
                Register
              </button>
          }
          <div>
            <p className="text-red-500">{responseError}</p>
          </div>
          <div>
            <p className="text-center">Already have an account? <a href={ROUTES.auth.login} className="text-blue-500">Login</a></p>
          </div>
        </form >
      </div>
    </div >
    <SweetAlert2 {...swalProps} />
    </>
  );
}

export default Register;