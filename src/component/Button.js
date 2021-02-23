import PropTypes from 'prop-types'

export const Button = ({classcolor ,text  ,onClick}) => {
    return (
        <>
         <button onClick={onClick} className="{classcolor}">
           {text}
        </button>
            
        </>
    )
}
// Button.propTypes = {
//     text = PropTypes.string,
//     classcolor = PropTypes.string
// }

export default Button