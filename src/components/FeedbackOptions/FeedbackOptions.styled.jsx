import styled from 'styled-components';

export const Button = styled.button`
    box-shadow:inset 0px 1px 0px 0px #bbdaf7;
    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    background-color:#79bbff;
    border-radius:6px;
    border:1px solid #84bbf3;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:15px;
    font-weight:500;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #528ecc;
    margin-bottom: 20px;

&:hover {
    background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
	background-color:#378de5;
}

&:active {
    position:relative;
	top:1px; 
}

&:not(:last-child) {
    margin-right: 20px;    
}
`;