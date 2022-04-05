
import { style } from "@mui/system";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native-web";
import Nav from "../../UX/Nav/Nav";
import Page from "../../UX/Page/Page";
import './Principal.css'
import { useNavigate } from 'react-router-dom';
const PrincipalPage=  () => {
    const routerNavigator = useNavigate();
    return (
        <Page header={<h2>Inicio</h2>} >
		
 <View>
 <button className="button"  onClick={() => routerNavigator("/medicamentos")}>
     <img className="img" src="https://i.ibb.co/jGV4w75/medicamentos.png" alt="" />
    <h3>MEDICAMENTOS</h3>
	<div className="button__horizontal"></div>
	<div className="button__vertical"></div>
</button>
<button className="button" onClick={() => routerNavigator("/clientes")} >
<img className="img" src="https://i.ibb.co/q9DRXGQ/target.png" alt="" />
	<h3>CLIENTES</h3> 
	<div className="button__horizontal"></div>
	<div className="button__vertical"></div>
</button>
<button className="button" onClick={() => routerNavigator("/proveedores")}>
<img className="img" src="https://i.ibb.co/Y2hDjbj/fundraiser.png" alt="" />
<h3>PROVEEDORES</h3>
	
	<div className="button__horizontal"></div>
	<div className="button__vertical"></div>
</button>
<button className="button" onClick={() => routerNavigator("/ventas")}>
<img className="img" src="https://i.ibb.co/N9VDVn3/sales.png" alt="" />
	<h3>   VENTAS</h3>
 
	<div className="button__horizontal"></div>
	<div className="button__vertical"></div>
</button>
    </View>

        </Page>

    )
}

const ButtonItem =() => {
   
}


export default PrincipalPage;