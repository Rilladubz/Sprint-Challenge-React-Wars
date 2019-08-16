import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`

`;

const Wrapper = styled.div`
    border: 1px solid green;
    background-color: white;
    // opacity: 0.6;
    width: 25%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 1rem auto;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem;
    -webkit-box-shadow: 1px 10px 164px 16px rgba(105,98,5,1);
    -moz-box-shadow: 1px 10px 164px 16px rgba(105,98,5,1);
    box-shadow: 1px 10px 164px 16px rgba(105,98,5,1);
    background: rgba(224,195,158,1);
    background: -moz-radial-gradient(center, ellipse cover, rgba(224,195,158,1) 0%, rgba(206,158,100,0.42) 100%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(224,195,158,1)), color-stop(100%, rgba(206,158,100,0.42)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(224,195,158,1) 0%, rgba(206,158,100,0.42) 100%);
    background: -o-radial-gradient(center, ellipse cover, rgba(224,195,158,1) 0%, rgba(206,158,100,0.42) 100%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(224,195,158,1) 0%, rgba(206,158,100,0.42) 100%);
    background: radial-gradient(ellipse at center, rgba(224,195,158,1) 0%, rgba(206,158,100,0.42) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0c39e', endColorstr='#ce9e64', GradientType=1 );
    border: 1px solid #a8ad07;
    border-radius: 25px;
`;

const Data = styled.p`
    font-size: 16px;
    color: white;
`;

export default function Card(props){
    return(
        <Wrapper>
            <Data>Name: {props.value.name}</Data>
            <Data>Birth Year: {props.value.birth_year}</Data>
            <Data>Eye Color: {props.value.eye_color}</Data>
            <Data>Gender: {props.value.gender}</Data>
            <Data>Skin Color: {props.value.skin_color}</Data>
        </Wrapper>
    )
}