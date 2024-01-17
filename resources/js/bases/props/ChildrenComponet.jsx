
import PropTypes from 'prop-types';

export const ChildrenComponet = ({btnText}) => {
  return (
   <>
   <button>Propiedad: {btnText} </button>
   </>
  )
}

ChildrenComponet.propTypes = {
    btnText: PropTypes.string.isRequired,
}
