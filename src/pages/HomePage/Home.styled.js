import styled from 'styled-components';

export const HomeStyled = styled.div`
    width: 69%;
    
    
    //display: flex;
    //flex-direction: column;
    //gap: 15px;
    background-color: bisque;
    //padding: 5px;
    //color: #fff;

    .header,
    .data {
        display: flex
    }

    .header {
        margin-bottom: 20px;
    }

    .header li,
    .data p {
        display: block;
        width: 15%;
        height: 30px;
    }

    .transaction {
        margin-bottom: 20px;
    }
`;