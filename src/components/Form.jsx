import { Fragment } from 'react';
import {MARCA, YEARS, PLANES} from '../constants/data.js';
import useSeguros from '../hooks/useSeguros';
function Form() {
    const {handleChangeDatos} = useSeguros()
    return (
      <>
        <form>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>
                <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200' onChange={handleChangeDatos}>
                    <option value="">Selecciona Marca</option>
                    {MARCA.map(marca  => (
                        <option value={marca.id} key={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>Año</label>
                <select name="year" id="" className='w-full p-3 bg-white border border-gray-200' onChange={handleChangeDatos}>
                    <option value="">Selecciona Año</option>
                    {YEARS.map(year  => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="" className='block mb-3 font-bold text-gray-400 uppercase'>Plan</label>
               <div className='flex gap-3 items-center'>
                {PLANES.map((plan) => (
                    <Fragment key={plan.id}>
                        <label htmlFor="">{plan.nombre}</label>
                        <input type="radio" value={plan.id} name='plan' onChange={handleChangeDatos}/>
                    </Fragment>
                ))}
               </div>
            </div>
            <input type="submit" className='w-full bg-indigo-500 hover:bg-indigo-600 uppercase p-3 cursor-pointer text-white font-bold transition-colors rounded-lg' />
        </form>
      </>
    );
}

export default Form;