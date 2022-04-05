import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Proveedores from './Proveedores';
import Loading from '../../UX/Loading/Loading';

const ProveedoresPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'PROVEEDORES_LOADING', payload:{}});
        try {
          const {data:{proveedor,status} }= await privateAxios.get('/api/v1/proveedores/all');
         
          dispatch({type:'PROVEEDORES_SUCCESS', payload: {proveedor}});
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'PROVEEDORES_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { proveedor, isLoading, errors } = useSelector(state=>state.proveedores);
  return (
    <>
      {isLoading && (<Loading />)}
      <Proveedores proveedores={proveedor} />
    </>
  )
}

export default ProveedoresPage;