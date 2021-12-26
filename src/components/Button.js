import PropTypes from 'prop-types';

function Button({text, color, onClick}) {
    return (
        <button className="btn" 
        style={{backgroundColor: color}} 
        onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button'
}

Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
