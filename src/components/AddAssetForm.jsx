
const AddAssetForm = ({coin}) => {
    

    
    return ( 
        <form style={{width: '100%'}}>
    <img src={coin.icon} alt={coin.name} />
    {coin.name}
        </form>
     );
}
 
export default AddAssetForm;