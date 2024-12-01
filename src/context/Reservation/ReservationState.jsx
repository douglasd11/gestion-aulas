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


    const insertReservation = async (data) => {
        try {
            console.log(data);
            const respuesta = await API_PROTOTYPES.reservation.post(data);
            
            console.log(respuesta)
            
            dispatch({
                type: "SET_RESERVATION",
                payload: respuesta.reservation
            })
        } catch (error) {
            console.log(error)
            // showMessage(error.response.data)
        }
    }

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

    const getReservation = async (userId) => {
        try {

            console.log(userId, "linea 58")
            const respuesta = await API_PROTOTYPES.reservation.get(userId);

            console.log(respuesta, "aca")
            
            dispatch({
                type: "GET_RESERVATIONS",
                payload: respuesta.reservations
            })
            

        } catch (error) {
            console.log(error)
        }
    }

    const updateReservation = async (data) => {
        try {
            const respuesta = await API_PROTOTYPES.reservation.put(data);

            console.log(respuesta, "linea 77")

            if (respuesta.reservation !== null){
                dispatch({
                    type: "UPDATE_RESERVATION",
                    payload: respuesta.reservation
                })
            }
            
        } catch (error) {
            console.log(error)
        }   
    }

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
            const userId = session.user.id ? session.user.id : session.user.uuid;
            getReservation(userId)
        }
    }, [session]);

    return (
        <ReservationContext.Provider
            value={{
                reservation: state.reservation,
                reservations: state.reservations,
                // getCategoria,
                insertReservation,
                getReservation,
                updateReservation,
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