// Message.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FiMessageSquare } from 'react-icons/fi';
// Optional: for styling

const Message = ({ text, sender, timestamp }) => {
    console.log("Timestamp:", timestamp); // Debugging line



    return (
        <div className="message">
            <div className="message-header">
                <span className="message-sender">{sender}</span>
                {/* <span className="message-timestamp">{formattedTime}</span> */}
            </div>
            <div className="message-body">
                {text}
            </div>
            <div className="message-footer">
                <Link
                    to="/customer-care"
                    className="text-gray-700 rounded-md  p-2 hover:text-green-500 transition duration-300 ease-in-out"
                >
                    <FiMessageSquare className='text-xl' />
                </Link>
            </div>
        </div>
    );
};



Message.propTypes = {
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
};

export default Message;