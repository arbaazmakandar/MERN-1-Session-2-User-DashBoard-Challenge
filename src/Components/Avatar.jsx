import {  useEffect } from "react";

const Avatar = ({userDetails}) => {
        // console.log(userDetails);
    

    return (
        <> {userDetails ?  
        
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
            <div>
                <ul>
                    <li>Email: {userDetails.email}</li>
                    <li>Name: {userDetails.first_name}</li>
                </ul>
            </div>
         <img width={500} height={500} src={userDetails.avatar} alt="Not Available" />
        </div> : 
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
        <div>
                <ul>
                    <li>Email:</li>
                    <li>Name:</li>
                </ul>
            </div>
         <img width={500} height={500} src = "" alt="Not Available" />
        </div>
        }
            
        </>
    );
};


export default Avatar