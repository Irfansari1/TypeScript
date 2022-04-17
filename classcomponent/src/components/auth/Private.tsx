import { Login } from './Login'
import {ProfileProps} from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

/* we are going to check whether the user is logged in or out */
export const Private = ({isLoggedIn, component: Component}:PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Irfan'/>
    } else{
        return <Login/>
    }
}
