import styled from 'styled-components'
import Typography from '@mui/material/Typography';

const BoxStyle = styled('div')`
    flexGrow: 1;
    overflow: 'hidden';
    margin-top:50px;
    padding-right: 11px;
    padding-left: 11px; 
    input,p{
        font-family: 'Comfortaa', cursive;

    }
    .iconAdd{
         margin-top: 5px;
         padding-left: 10px;
         color: blueviolet;
    }
    .items{
        margin-top: 40px;
        width: 100%;
        padding-bottom:25px;

      }
      .item{
        display: flex;
         justify-content: spacebetween;
      }
      .task{
        text-align: left;
         padding-left: 24px;
         overflow: hidden;
      }
      #edit{
        border: 1px solid #dfdcdc;
        text-align: left;
        padding-left: 24px;
        overflow: hidden;
      }
      .w100{
        width:100%;
      }
    }
`
export { BoxStyle }
const NeonStyle = styled('div')`
    background-color: blueviolet;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 18px;
    height: 113px;
h6{
    animation: neon 3s infinite;
    font-family: 'Comfortaa', cursive;
    padding-top: 34px;
}
@keyframes neon{
    0%, 39%, 41%, 59%, 61%, 100%{
        text-shadow:
        white 0 0 12px,
        #b3d414 0 0 24px,
        #b3d414 0 0 36px;
    }
    40%,60%{
        text-shadow:none;
    }
}
`
export { NeonStyle }

const LogoStyle = styled(Typography)`
	font-family: 'Iranian Sans', sans-serif !important;
	padding-left: 13px;
	padding-top: 10px;

    a{
        color:white;
    }
`
export { LogoStyle }
