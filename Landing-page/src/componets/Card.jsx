// import photo from '../assets/1.svg'
const Card =({photo,heading,para})=>{
    return(
        <div className='flex flex-col items-center  space-y-4  p-8'>
            <img className='w-40 mb-8' src={photo} alt="" />
            <h3 className="font-bold">{heading}</h3>
            <p className="items-center leading-7 tracking-wide">{para}</p>
        </div>
    )
}
export default Card ;