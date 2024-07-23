import styled from 'styled-components'

export const LoginContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 50px;
  background-size: cover;
`

export const LoginContainerDark = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  padding-bottom: 50px;
  background-size: cover;
`

export const LoginContainerLight1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 50px;
  width: 450px;
  border-radius: 5px;
`

export const LoginContainerDark1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 100px;
  background-color: #0f0f0f;
  padding: 50px;
  width: 450px;
  border-radius: 5px;
`

export const LoginImage = styled.img`
  width: 220px;
  height: 60px;
  align-self: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`

export const LabelLight = styled.label`
  font-size: 13px;
  color: #475569;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 6px;
`

export const InputLight = styled.input`
  font-size: 14px;
  height: 35px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  color: black;
`

export const LabelDark = styled.label`
  font-size: 13px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 6px;
`

export const InputDark = styled.input`
  font-size: 14px;
  height: 35px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #94a3b8;
  background-color: transparent;
  color: #ffffff;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 30px;
`

export const Check = styled.input`
  width: 16px;
  height: 16px;
`

export const LoginButton = styled.button`
  height: 35px;
  border-radius: 7px;
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`

export const ShowPasswordLight = styled.label`
  font-size: 15px;
  margin-left: 8px;
  margin-top: 2px;
  color: black;
  font-weight: 500;
`

export const ShowPasswordDark = styled.label`
  font-size: 15px;
  margin-left: 8px;
  margin-top: 2px;
  color: #ffffff;
  font-weight: 500;
`

export const Error = styled.p`
  color: #ff0000;
  font-size: 16px;
`
