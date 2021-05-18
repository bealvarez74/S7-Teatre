import styled from 'styled-components';


export const Stylediv = styled.div`
width:50%;
margin:auto;
padding: 10px 20px;
font-size: 1.2rem;
font-family: Arial, Helvetica, sans-serif;
`;

export const Stylep = styled.div`
color: grey;
    & :hover{
        background-color:pink;
    }
`;

export const Stylebutton = styled.button`
    width:150px;
    display:inline-block;
    margin:20px 20px 50px 0px;
    padding: 10px 20px;
    border-radius:3px;
    border:none;
    color: white;
    background-color:#000;
     &:hover{background-color:pink}
`;
