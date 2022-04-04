import ('./Tabla.css'); 

const BaseTabla = ({children, ...rest})=>{
    return (
        <table {...rest}>
            <tr>
                <th>{children}</th>
                <th>{children}</th>
                <th>{children}</th>
                <th>{children}</th>
                <th>{children}</th>
            </tr>
            <tr>
                <td>{children}</td>
                <td>{children}</td>
                <td>{children}</td>
                <td>{children}</td>
                <td>{children}</td>
            </tr>
        </table>
    );
}

export const Tabla = ({className:  customClassName, children, ...rest}) => {
    return ( 
        <section className="body">
            <BaseTabla
            className= {["rwd-table", customClassName].join(' ')}
            {...rest}
            >
             {children}
            </BaseTabla>
        </section>
    )
}


