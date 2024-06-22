'use client';
import React from 'react'
import { ConnectButton, useActiveAccount } from 'thirdweb/react'
import {chain,client} from '../utils/constants'
import CGPA from './cgpa';
import "../styles/login.css";

const Login : React.FC = () => {
    const account = useActiveAccount();
  return (
    <div style={
        {
            display: "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center" ,
            height : "100vh"
        }}>  

        {account ? (
          <div >
              <div className='top-right-corner'> 
              <ConnectButton
              client={client}
              chain ={chain}
              connectModal={{
                 size : "compact"
             }}/>
              </div>
             <CGPA />
             </div>
          
        ) : (
                  <div style={{ textAlign : "center"}}> 
                  <ConnectButton
                  client={client}
                  chain ={chain}
                  connectModal={{
                     size : "compact"
                 }}/>
                 </div>
              
        )}
    
          
    

    </div>
  )
}
export default Login