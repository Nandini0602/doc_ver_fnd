import React, {Component} from 'react';
import styled from "styled-components";
import QrReader from 'react-qr-scanner';
export default function Dashboard() {

  return(
    
    
    <FormContainer> 
    <form action=''>
      <div className="brand">
        <h1>Welcome to SCOE Portal</h1>
      </div>
        <h2>Fill Following Details and Verify Profile or verify QR Code</h2>
      <input type="text" placeholder="Student Name"
        name="Name" />
      <input type="text"
        placeholder="PRN no" name="PRN" />
      <input type="text"
        placeholder="Certificate ID" name="CertiID" />
      <button type="submit">Verify</button>
    </form>
    </FormContainer> 

  );

}
const FormContainer = styled.div`
height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  h2 {
    color: white;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }

`;