import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Clientes from './Clientes';
import Loading from '../../UX/Loading/Loading';

const ClientesPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'CLIENTES_LOADING', payload:{}});
        try {
          const {data:{cliente,status} }= await privateAxios.get('/api/v1/clientes/all');
         
          dispatch({type:'CLIENTES_SUCCESS', payload: {cliente}});
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'CLIENTES_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { cliente, isLoading, errors } = useSelector(state=>state.clientes);
  return (
    <>
      {isLoading && (<Loading />)}
      <Clientes clientes={cliente} />
    </>
  )
}

export default ClientesPage;