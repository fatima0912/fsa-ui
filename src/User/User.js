import UserIcon from '../img/UserIcon.png';
import ShouldRender from '../utils/ShouldRender';
import { Link } from 'react-router-dom';
const Degree =[
        'BE/BTech',
        'BCA',
        'BSc',
        'Others'
    ]  
    
    const Qualification = [
        //'',
        '10+2',
        'UG',
        'PG',
        'Others'
    ]; //array can be used ... if index doesnt start from zero thn..u start mapping with empty element ''
    
    const User = ({ user }) => {
    return <div className="col-md-3 m-3">
        <div className='card'>
                <img width="150" height='220' className="card-img-top" src={UserIcon}/>
                <div className="card-header"> {user.fisrtName} {user.lastName}</div>
                <div className="card-body">
                    <Link to={`/users/${user.email}`}>                    <div><i className="fa fa-envelope"></i>{user.email}</div>
                    <ShouldRender cond ={user.degree || user.qualification} >
                    <div>
                    <div><b>{Degree[user.degree]}</b> </div>
                    <div> <b>{Qualification[user.qualification]}</b></div>
                </div>
                </ShouldRender>
                </Link>
                <div className="card-footer">
                    <button className="btn btn-danger">
                        <i className="fa fa-heart"></i>
                        &nbsp;
                        Shortlist
                    </button>
                
                </div>
            </div>
     </div>   
</div>
}

// return <> 
    //         <img style = { { borderRadius:'50px' } } className = "img immg-thumbnail"
    //         src = {user.avatar_url} width="100" height="100" alt="abc...."/>
    //         <h5>{user.login}</h5>
    //         <hr/>
    //         </>


export default User;