import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Ventas from './Ventas';
import Loading from '../../UX/Loading/Loading';

const VentasPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'VENTAS_LOADING', payload:{}});
        try {
          const {data:{venta,status} }= await privateAxios.get('/api/v1/ventas/all');
         
          dispatch({type:'VENTAS_SUCCESS', payload: {venta}});
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'VENTAS_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { venta, isLoading, errors } = useSelector(state=>state.ventas);
  return (
    <>
      {isLoading && (<Loading />)}
      <Ventas ventas={venta} />
    </>
  )
}

export default VentasPage;