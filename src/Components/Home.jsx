import Avatar from "./Avatar"
import axios from 'axios';
import { useEffect, useState } from "react";

const Home = () => {
    const [userDetails, setUserDetails] = useState({});

    const getUserDetails = async (id) => {
        try {
          const response = await axios.get(`https://reqres.in/api/users/${id}`);
          return await response;
        } catch (error) {
          alert('Failed to fetch Data');
          // console.error(error);
          return error;
        }
      }
      
      const handleUserDetails = async (id) => {
        const response = await getUserDetails(id);
        console.log(response)

        if(response.status === 200)
          setUserDetails(response.data.data);
        else{
          setUserDetails(response.data)
        }
      }

      useEffect(()=>{
        const defaultObject = {email: '', first_name: '', last_name: '', avatar: 'https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg'}
        setUserDetails(defaultObject);
      },[])


    return (
        <>
            <button style={{ width: '80px', height: '40px' }} onClick={() => handleUserDetails('1')}>1</button>
            <button style={{ width: '80px', height: '40px' }} onClick={() => handleUserDetails('2')}>2</button>
            <button style={{ width: '80px', height: '40px' }} onClick={() => handleUserDetails('3')}>3</button>
            <button style={{ width: '80px', height: '40px' }} onClick={() => handleUserDetails('100')}>100</button>
            <Avatar userDetails={userDetails}/>
        </>
    )
}

export default Home