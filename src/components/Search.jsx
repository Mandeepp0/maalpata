import React, {useState, useEffect} from 'react'
import {data} from './DATA'



const Search = () => {

    const [val, setVal] = useState(29);

  return (
    <>
        <div >
            <div className='flex justify-center'>
                <input type="text" className='border px-2 rounded-md  my-5 py-2  outline-none focus:bg-blue-50 w-[90%] focus:shadow-inner' placeholder='serach'
            
            onChange={(e)=>{console.log(e.target.value)}}
            />
            </div>
            
            <div className='flex justify-center'>
                <table className='mx-auto table-auto w-[90%] '>
                    <thead>
                        <tr>
                            <th className='text-start'>S.No: </th>
                            <th className='text-start'>First Name </th>
                            <th className='text-start'>Last Name </th>
                            <th className='text-start'>Email</th>
                            <th className='text-start'>Gender</th>
                            <th className='text-start'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr  key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>   
            </div>
        
       
        </div>
        
    </>
  )
}

export default Search