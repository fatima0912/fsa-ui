import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../Services/userService";
import User from "../User/User";
const UserDetail =() =>{   //its working without props here
    const [user, setUser] = useState({});
    const params = useParams();
    useEffect( async() => {
    
        const res = await userService.getUserByEmail(params.email);
        setUser(res.data);

}, []);
    return <div>
        <User user={user} />
    </div>
};

export default UserDetail;