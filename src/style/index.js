import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    :root {
        font-size: 62,5%;

        --colorBackgroundDark: #2b2f36;
        --colorFontPrimaryDark: #e3e3e4;
        --colorFontSecundaryDark: #cfd3d8aa;
        --colorBackgroundClipboardDark: #29292D;
        --colorBorderClipboardDark: #3F3F41;
        --colorBackgroundExempleDark: #7cb342;
        --colorCssAttribute: #5A7BFF;
        --colorCssAttributeValue: #B50DF7;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root, .App {
        position: relative;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        overflow-x: hidden;
        text-rendering: optimizelegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    body, h1, p, span, input, button {
        font-family: 'Oswald', 'Poppins', 'Roboto Condensed', Arial, Helvetica, sans-serif;
    }

    h1, p, span {
        margin: 0;
        padding: 0;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--colorBackgroundDark);
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 3.5rem;
        color: var(--colorFontPrimaryDark);
        font-weight: 300;
        cursor: default;

        @media (max-width: 768px) {
            font-size: 1.9rem;
            font-weight: 200;
        }
    }

    p {
        font-size: 1.5rem;
        color: var(--colorFontSecundaryDark);
        font-weight: 200;
        text-align: center;
        cursor: default;
    }

    span {
        font-size: 1.1rem;
        color: var(--colorFontSecundaryDark);
        font-weight: 300;
        text-align: center;
        cursor: default;
    }
`;

export const ObjectExemple = styled.div`
    border-radius: ${props => props.radius};
`;

export const ContainerExemple = styled.div`
    width: 161px;
    height: 160px;
    margin: 5px 0;
    border: 2px solid var(--colorBorderClipboardDark);
    display: flex;
    justify-content: center;
    align-items: center;

    ${ObjectExemple} {
        width: 141px;
        height: 140px;
        background-color: var(--colorBackgroundExempleDark);
    }

    @media (max-width: 768px) {
        width: 141px;
        height: 140px;

        ${ObjectExemple} {
            width: 121px;
            height: 120px;
        }
    }
`;

export const Clipboard = styled.div`
    width: 100%;
    max-width: 385px;
    padding: 10px;
    margin: 5px 0;
    border: 1.3px solid var(--colorBorderClipboardDark);
    background-color: var(--colorBackgroundClipboardDark);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: text;

    span {
        font-size: 1rem;
        font-weight: 200;
        color: var(--colorCssAttribute);
        cursor: text;

        label {
            font-size: 1rem;
            font-weight: 200;
            color: var(--colorCssAttributeValue);
            text-align: center;
        }

        @media (max-width: 768px) {
            font-size: 0.8rem;

            label {
                font-size: 0.7rem;
            }
        }
    }
`;

export const Switch = styled.label`
    width: 50px;
    height: 24px;
    margin: 0 10px;
    display: inline-block;
`;

export const AreaSwitch = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    span {
        font-size: ${props => props.fontSize};
        margin-right: ${props => props.marginRightText};
        color: var(--colorFontPrimaryDark);
        cursor: default;
    }

    ${Switch} {
        position: relative;

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--colorFontSecundaryDark);
            -webkit-transition: .4s;
            transition: .4s;

            &:before {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                left: 4px;
                bottom: 4px;
                background-color: var(--colorBackgroundClipboardDark);
                -webkit-transition: .4s;
                transition: .4s;
            }
        }

        input:checked + .slider {
            background-color: var(--colorBackgroundExempleDark);
        }

        input:focus + .slider {
            box-shadow: 0 0 2px var(--colorBackgroundExempleDark);
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(25px);
            -ms-transform: translateX(25px);
            transform: translateX(25px);
        }

        .round {
            border-radius: 10px;

            &:before {
                border-radius: 50%;
            }
        }
    }
`;

export const AreaInputValues = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 10px 0;
    padding: 5px;
    border: 2px solid var(--colorBorderClipboardDark);
`;

export const ContainerInputValues = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`;