"use client"
import React, { useState } from 'react';

export default function Modal({ params }: any) {
  
  return (
    <div>
      <div className='flex flex-row items-center justify-between w-full h-full px-2 md:px-20 z-10'>
        <h1>Nro Serviço: {params.srvId} </h1>
      </div>       
    </div>
  )
}
