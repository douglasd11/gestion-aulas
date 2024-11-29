import { useEffect, useReducer, useState  } from 'react';

import { node } from '@/tools/Types';

import ReservationContext from './ReservationContext';
import ReservationReducer from './ReservationReducer';
import useSession from '../Auth/useSession';

import { API_PROTOTYPES } from '../../api/services'



const ReservationState = ({ children }) => {

    const { session } = useSession()

    
    
    const initialState = {
        reservation: null,
        reservations: []
    }

    const [state, dispatch] = useReducer(ReservationReducer, initialState);


    // const insertCategoria = async (data) => {
    //     try {
    //         const respuesta = await API_PROTOTYPES.categorias.post(data);
    //         showMessage(respuesta)

    //         dispatch({
    //             type: TYPES.INSERTAR_CATEGORIA,
    //             payload: respuesta.data
    //         })
    //     } catch (error) {
    //         showMessage(error.response.data)
    //     }
    // }

    // const getCategoria = async (id) => {
    //     try {
    //         const res = await API_PROTOTYPES.categorias.get(id);
    //         dispatch({
    //             type: TYPES.OBTENER_CATEGORIA,
    //             payload: res.data
    //         })
    //     } catch (error) {
    //         showMessage(error.response.data)
    //     }
    // }

    const getReservatios = async (userId) => {
        try {

            const respuesta = await API_PROTOTYPES.reservation.get(userId);

            console.log(respuesta)
            
            dispatch({
                type: "GET_RESERVATIONS",
                payload: respuesta.reservations
            })
            

        } catch (error) {
            // showMessage(error.response.data)
            console.log(error)
        }
    }

    // const updateCategoria = async (data) => {
    //     try {
    //         const respuesta = await API_PROTOTYPES.categorias.put(data);
    //         showMessage(respuesta)

    //         dispatch({
    //             type: TYPES.ACTUALIZAR_CATEGORIA,
    //             payload: respuesta.data
    //         })
    //     } catch (error) {
    //         showMessage(error.response.data)
    //     }
    // }

    // const deleteCategoria = async (id) => {
    //     try {
    //         const respuesta = await API_PROTOTYPES.categorias.delete(id)
    //         showMessage(respuesta)

    //         dispatch({
    //             type: TYPES.ELIMINAR_CATEGORIA,
    //             payload: { ...respuesta.data, id: id }
    //         })
    //     } catch (error) {
    //         showMessage(error.response.data)
    //     }
    // }

    useEffect(() => {
        if (session){
            const userId = "3266"
            getReservatios(userId)
        }
    }, [session]);

    return (
        <ReservationContext.Provider
            value={{
                reservation: state.reservation,
                reservations: state.reservations,
                // insertCategoria,
                // getCategoria,
                getReservatios,
                // updateCategoria,
                // deleteCategoria
            }}
        >
            {children}
        </ReservationContext.Provider>
    )
}

ReservationState.propTypes = {
    children: node
}
export default ReservationState;