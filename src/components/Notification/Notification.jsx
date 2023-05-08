import PropTypes from 'prop-types';
import { Message } from './index'

export const Notification = ({ message }) => {
    return(
        <Message>{ message }</Message>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}