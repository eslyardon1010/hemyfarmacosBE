import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Medicamentos from './Medicamentos';
import Loading from '../../UX/Loading/Loading';

const MedicamentosPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'MEDICAMENTOS_LOADING', payload:{}});
        try {
          const {data:{medicamento,status} }= await privateAxios.get('/api/v1/medicamentos/all');
         
          dispatch({type:'MEDICAMENTOS_SUCCESS', payload: {medicamento}});
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'MEDICAMENTOS_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { medicamento, isLoading, errors } = useSelector(state=>state.medicamentos);
  return (
    <>
      {isLoading && (<Loading />)}
      <Medicamentos medicamentos={medicamento} />
    </>
  )
}

export default MedicamentosPage;