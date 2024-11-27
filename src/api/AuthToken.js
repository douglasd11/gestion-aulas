import axiosInstance from './axios';

let requestInterceptorId = null;

const AuthToken = async () => {
    const token = false;
    // Si hay un token, agrega el interceptor de solicitud
    if (token) {
        // Agregar interceptor de solicitud
        requestInterceptorId = axiosInstance.interceptors.request.use(
            config => {
                config.headers['Authorization'] = token;
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    } else {
        // Si no hay token, eliminar el interceptor de solicitud si existe
        if (requestInterceptorId !== null) {
            axiosInstance.interceptors.request.eject(requestInterceptorId);
            requestInterceptorId = null;
        }
    }

    return token;
}

export default AuthToken;
