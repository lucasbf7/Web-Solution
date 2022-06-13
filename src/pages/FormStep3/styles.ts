import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border 0;
        background-color: #00dbb5;
        margin: 30px 0;
    }

    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 80%;
            padding: 20px 10px;
            margin: 10px 0;
            border: 2px solid #00dbb5;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #101010;
        }

        select {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 80%;
            padding: 20px 10px;
            margin: 10px 0;
            border: 2px solid #00dbb5;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #101010;
        }
    }

    button {
        background-color: #00df72;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        border: 0;
        border-radius: 30px;
        padding: 20px 40px;
        margin: 20px 0;
        cursor: pointer;
    }

    .backbtn {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #00df72;
    }
`;