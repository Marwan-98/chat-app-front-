import react from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {checkLogin} from "../api/index";

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const navigate = useNavigate();

	useEffect(() => {
			checkLogin().then((res) => {
			 console.log(res.status)
			}).catch((err) => {
				if(err) {
					navigate("/signUp");
				}
			})
	},[])

	return(
	<>{children}</>
	)
}

export default Protected;