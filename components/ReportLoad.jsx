import React from 'react'
import { ContextUser } from '../utils/Context'
import { BallTriangle } from 'react-loader-spinner';

const ReportLoad = () => {

    const { reportLoad } = ContextUser();

  return (
    <div className={`fixed top-0 left-0 h-[100vh] w-[100vw] items-center flex-col justify-center bg-white bg-opacity-95 z-50 ${reportLoad ? 'flex' : 'hidden'}`}>
        <BallTriangle width={100} height={100} color='#3296F6' />
        <p className="mt-10 text-primary text-3xl">Analysing Your Website</p>
    </div>
  )
}

export default ReportLoad