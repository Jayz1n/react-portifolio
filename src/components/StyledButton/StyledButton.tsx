import { styled } from "@mui/material"
import { ReactNode, useState } from "react"

interface StyledButtonProps {
    children: ReactNode
    //onClick: ()=> void
    link:string
}

const StyledButton: React.FC<StyledButtonProps> = ({children, /*onClick*/ link}) => {
  const handleRedirect = () => {
    window.location.href = link;
  };
    const StyledButton = styled("button")(({theme})=> ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",

        '&:houver': {
            backgroundColor: theme.palette.secondary.main
        }
        
     }))


    return (
    
      <>
      <StyledButton onClick={handleRedirect}>
        {children} 
        </StyledButton>
      </>
    )
  
  }
  export default StyledButton



  //https://github.com/Jayz1n