
const Error = ({message}) => {
    return ( 
        <div className="alert alert-danger text-center">
            <strong>{message}</strong>
        </div>
     );
}
 
export default Error;