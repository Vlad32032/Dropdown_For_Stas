import React, {useRef, useState} from "react";
import "./styles/App.css";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {

  const languageList = [
    {
      id: "russian",
      value: "Русский",
      flag: function() {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="#F5F5F5"/>
            <mask id="mask0_1744_158" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
              <rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"/>
            </mask>
            <g mask="url(#mask0_1744_158)">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.5H22.5V9.5H1.5V14.5Z" fill="#0C47B7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V14.5H1.5V19.5Z" fill="#E53B35"/>
            </g>
          </svg>
        )
      }
    },
    {
      id: "english",
      value: "Английский",
      flag: function() {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            <mask id="mask0_1744_267" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
              <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            </mask>
            <g mask="url(#mask0_1744_267)">
              <rect x="1.5" y="4.5" width="21" height="15" fill="#0A17A7"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.50535 14.5L-0.580192 19.2793L0.538193 20.9373L9.50004 14.8925V20.5H14.5V14.8925L23.4619 20.9373L24.5803 19.2793L17.4947 14.5H22.5V9.5H17.4947L24.5803 4.72074L23.4619 3.06267L14.5 9.10752V3.5H9.50004V9.10752L0.538185 3.06267L-0.5802 4.72075L6.50534 9.5H1.50004V14.5H6.50535Z" fill="white"/>
              <path d="M15.501 9.24915L25 3" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
              <path d="M16.5096 14.7731L25.025 20.5128" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
              <path d="M7.50415 9.23285L-1.37811 3.24677" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
              <path d="M8.46753 14.7037L-1.37811 21.2328" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 13.5H10.5V19.5H13.5V13.5H22.5V10.5H13.5V4.5H10.5V10.5H1.5V13.5Z" fill="#E6273E"/>
            </g>
          </svg>
        )
      }
    },
    {
      id: "spanish",
      value: "Испанский",
      flag: function() {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            <mask id="mask0_1744_182" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
              <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            </mask>
            <g mask="url(#mask0_1744_182)">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 8.5H22.5V4.5H1.5V8.5Z" fill="#DD172C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V15.5H1.5V19.5Z" fill="#DD172C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 15.5H22.5V8.5H1.5V15.5Z" fill="#FFD133"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7 11.5H8V12H7V11.5Z" fill="#FFEDB1"/>
              <path d="M6.14235 11.6943C6.12616 11.5 6.27952 11.3333 6.47453 11.3333H7.52547C7.72048 11.3333 7.87384 11.5 7.85765 11.6943L7.75086 12.9758C7.71832 13.3663 7.39187 13.6667 7 13.6667C6.60813 13.6667 6.28168 13.3663 6.24914 12.9758L6.14235 11.6943Z" stroke="#A41517" strokeWidth="0.666667"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M6 12H8V12.5H7.5L7 13.5L6.5 12.5H6V12Z" fill="#A41517"/>
              <rect x="4.5" y="10.5" width="1" height="3.5" rx="0.5" fill="#A41517"/>
              <rect x="8.5" y="10.5" width="1" height="3.5" rx="0.5" fill="#A41517"/>
              <path d="M6 10.3C6 9.85817 6.35817 9.5 6.8 9.5H7.2C7.64183 9.5 8 9.85817 8 10.3C8 10.4105 7.91046 10.5 7.8 10.5H6.2C6.08954 10.5 6 10.4105 6 10.3Z" fill="#A41517"/>
            </g>
          </svg>
        )
      }
    },
    {
      id: "german",
      value: "Немецкий",
      flag: function() {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            <mask id="mask0_1744_225" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
              <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="white"/>
            </mask>
            <g mask="url(#mask0_1744_225)">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 9.5H22.5V4.5H1.5V9.5Z" fill="#262626"/>
              <g filter="url(#filter0_d_1744_225)">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.5H22.5V9.5H1.5V14.5Z" fill="#F01515"/>
              </g>
              <g filter="url(#filter1_d_1744_225)">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V14.5H1.5V19.5Z" fill="#FFD521"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_1744_225" x="1.5" y="9.5" width="21" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1744_225"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1744_225" result="shape"/>
              </filter>
              <filter id="filter1_d_1744_225" x="1.5" y="14.5" width="21" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1744_225"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1744_225" result="shape"/>
              </filter>
            </defs>
          </svg>
        )
      }
    },
    {
      id: "italian",
      value: "Итальянский",
      flag: function() {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="#F5F5F5" strokeWidth="0.5"/>
            <mask id="mask0_1744_170" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
              <rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"/>
            </mask>
            <g mask="url(#mask0_1744_170)">
              <rect x="15.5" y="4.5" width="7.00001" height="15" fill="#E43D4C"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H8.5V4.5H1.5V19.5Z" fill="#1BB65D"/>
            </g>
          </svg>
        )
      }
    },
    {
      id: "polish",
      value: "Польский",
      flag: function() {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="4.5" width="21" height="15" rx="2" fill="#F5F5F5"/>
            <mask id="mask0_1744_201" fontStyle="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="4" width="22" height="16">
              <rect x="1.75" y="4.75" width="20.5" height="14.5" rx="1.75" fill="white" stroke="white" strokeWidth="0.5"/>
            </mask>
            <g mask="url(#mask0_1744_201)">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 19.5H22.5V11.5H1.5V19.5Z" fill="#EB2A50"/>
            </g>
          </svg>
        )
      }
    }
  ];

  return (
    <div className="App">
      <DropdownS placeHolder="Выбрать язык" languages={languageList} />
    </div>

  );
};

export default App;