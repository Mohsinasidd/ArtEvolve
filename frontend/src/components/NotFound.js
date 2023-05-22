import React from 'react'

const NotFound = () => {
    return (
        <>
            <svg
                width="380px"
                height="500px"
                viewBox="0 0 837 1045"
                xmlns="http://www.w3.org/2000/svg"

            >
                <g stroke="none" strokeWidth={6} fill="none" fillRule="evenodd">
                    <path
                        d="M353 9l273.664 161v317L353 642 79.336 487V170L353 9z"
                        stroke="#007FB2"
                    />
                    <path
                        d="M78.5 529l68.5 40.186v79.125L78.5 687 10 648.311v-79.125L78.5 529z"
                        stroke="#EF4A5B"
                    />
                    <path
                        d="M773 186l54 31.539v62.098L773 310l-54-30.363v-62.098L773 186z"
                        stroke="#795D9C"
                    />
                    <path
                        d="M639 529l134 78.847v155.245L639 839l-134-75.908V607.847L639 529z"
                        stroke="#F2773F"
                    />
                    <path
                        d="M281 801l102 60.025v118.187L281 1037l-102-57.788V861.025L281 801z"
                        stroke="#36B455"
                    />
                </g>
            </svg>
            <div className="message-box">
                <h1>404</h1>
                <p>Page not found</p>
                <div className="buttons-con">
                    <div className="action-link-wrap">
                        <a onclick="history.back(-1)" className="link-button link-back-button">
                            Go Back
                        </a>
                        <a href="" className="link-button">
                            Go to Home Page
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NotFound