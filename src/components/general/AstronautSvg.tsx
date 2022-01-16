import React from "react";
import styled, { keyframes } from "styled-components";
import { space, SpaceProps } from "styled-system";

const AstronautAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(-360deg);
}
`;
/*
import { ReactComponent as AstronautSvg} from './assets/svg/astronaut.svg';

const Astronaut = styled(AstronautSvg)`
  width: 12rem;
  height: 12rem;
  animation: ${AstronautAnimation} 20s linear infinite;
  ${space}
`;

*/

const Astronaut = styled.svg<SpaceProps>`
  width: 12rem;
  height: 12rem;
  animation: ${AstronautAnimation} 20s linear infinite;
  ${space}
`;

function AstronautSvg() {
  return (
    <Astronaut
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 459.793 459.793"
      m="4rem"
    >
      <path
        d="M446.198,320.375l-77.179-77.179l16.624-16.624c6.708-6.709,6.708-17.625,0-24.333l-62.22-62.221l10.632-1.85
c16.236-3.129,26.91-18.843,23.791-35.045c-0.004-0.02-0.008-0.04-0.013-0.062c-0.001-0.007-0.003-0.014-0.004-0.021
l-13.443-69.183c-1.516-7.87-5.984-14.677-12.582-19.168c-6.61-4.5-14.583-6.144-22.446-4.628
c-16.289,3.138-26.997,18.901-23.869,35.147l7.719,39.722l-21.139,3.734l-49.036-49.036c-5.718-5.717-14.483-6.543-21.104-2.516
c-1.004-1.084-2.026-2.159-3.079-3.212C176.988,12.04,147.922,0,117.005,0C86.088,0,57.022,12.04,35.16,33.901
C13.299,55.762,1.26,84.829,1.26,115.746c0,30.917,12.04,59.983,33.901,81.845c1.1,1.1,2.223,2.169,3.359,3.218
c-3.601,6.588-2.533,14.972,2.914,20.419l47.555,47.555l-4.37,24.737l-39.729-7.72c-7.864-1.514-15.858,0.143-22.504,4.667
c-6.633,4.516-11.12,11.335-12.635,19.202c-1.515,7.864,0.129,15.836,4.628,22.447c4.491,6.598,11.298,11.066,19.16,12.58
l69.19,13.445c0.013,0.003,0.027,0.005,0.04,0.008c0.021,0.004,0.04,0.008,0.059,0.012c1.896,0.365,3.783,0.541,5.647,0.541
c14.045-0.001,26.619-10,29.381-24.335c0.008-0.041,0.015-0.082,0.022-0.124l2.314-14.257l63.852,63.851
c3.249,3.25,7.57,5.04,12.166,5.04c4.596,0,8.917-1.79,12.166-5.039l13.559-13.559l77.179,77.179
c8.224,8.224,19.026,12.335,29.829,12.335c10.803-0.001,21.608-4.113,29.832-12.337c16.447-16.447,16.447-43.21,0-59.659
l-64.541-64.54l7.762-7.763l64.54,64.54c16.448,16.448,43.212,16.448,59.66-0.001C462.646,363.586,462.646,336.823,446.198,320.375
z M379.632,208.25c3.395,3.394,3.395,8.917,0,12.312l-16.624,16.623l-88.631-88.631l38.806-6.753L379.632,208.25z M210.867,43.09
c2.325,0,4.512,0.905,6.156,2.55l44.83,44.83l-30.856,5.45c-3.217-18.653-11.016-36.659-23.387-52.199
C208.631,43.309,209.732,43.09,210.867,43.09z M192.839,191.58c-20.256,20.256-47.188,31.412-75.834,31.412
c-3.972,0-7.909-0.222-11.802-0.646l19.087-36.411c2.202,0.397,4.473,0.598,6.791,0.598c12.546,0,26.411-5.773,37.426-16.788
c13.001-13.001,18.698-29.968,16.222-44.056l38.903-20.948C226.804,135.745,216.543,167.875,192.839,191.58z M48.157,83
c1.887-0.636,3.019-2.469,2.865-4.368l0.012-0.014c-0.595-7.093,0.734-11.558,4.587-15.412c1.298-1.299,4.249-3.523,5.957-4.492
c0.04-0.022,0.081-0.046,0.12-0.07c0.226-0.138,22.901-13.834,51.29-18.663c35.924-6.108,64.306,4.106,84.423,30.364
c-5.577,5.199-17.795,17.327-25.758,30.672c-1.284-5.634-3.4-11.129-6.362-16.303c4.244-2.96,8.309-6.208,12.103-9.808
c1.703-1.616,1.773-4.306,0.158-6.008c-1.615-1.703-4.306-1.772-6.008-0.158c-42.116,39.962-122.075,35.817-122.881,35.772
c-2.33-0.135-4.353,1.652-4.489,3.996c-0.136,2.343,1.651,4.353,3.994,4.49c0.452,0.026,2.259,0.123,5.151,0.173
c-0.362,16.33,5.888,32.063,17.53,43.705c7.99,7.99,17.841,13.433,28.572,15.954c-11.784,7.114-22.288,17.557-26.906,22.457
c-41.569-27.67-36.346-94.82-36.287-95.508c0.01-0.111,0.015-0.223,0.016-0.334c0.036-4.622,1.866-8.978,5.154-12.265
C43.296,85.279,45.571,83.873,48.157,83z M113.243,165.938c-13.745,0-26.667-5.353-36.386-15.072
c-10.04-10.04-15.411-23.626-15.043-37.716c21.252-0.437,63.075-4.043,96.327-23.816c11.141,19.871,7.819,45.201-8.512,61.532
C139.91,160.585,126.988,165.938,113.243,165.938z M118.57,174.194c14.004-1.226,27.011-7.258,37.07-17.317
c10.001-10.001,15.815-22.9,17.198-36.251c0.023-0.101,0.059-0.197,0.074-0.302c0.081-0.53,0.189-1.067,0.306-1.605
c7.49,11.94,3.276,31.019-10.721,45.015c-14.038,14.039-33.186,18.238-45.121,10.657
C117.777,174.316,118.176,174.246,118.57,174.194z M9.76,115.746c0-28.646,11.155-55.578,31.412-75.834
C61.427,19.655,88.359,8.5,117.005,8.5c28.646,0,55.578,11.155,75.834,31.412c15.854,15.853,25.69,35.476,29.523,56.011
c-0.323,0.084-0.642,0.195-0.949,0.36l-39.268,21.144c-1.366-2.934-3.184-5.633-5.465-8.017
c8.784-17.409,28.969-35.069,29.215-35.283c1.652-1.434,1.947-3.888,0.681-5.671c-22.014-31.013-54.953-43.739-95.261-36.811
c-29.487,5.07-52.372,18.727-53.992,19.712c-2.126,1.217-5.706,3.833-7.713,5.84c-6.154,6.154-7.323,13.084-7.21,18.996
c-2.603,1.254-4.955,2.917-7.015,4.977c-4.837,4.836-7.547,11.239-7.642,18.045c-0.162,2.039-1.402,19.862,2.858,41.165
c5.954,29.773,19.957,51.921,40.494,64.049c0.674,0.398,1.419,0.59,2.159,0.59c1.194,0,2.371-0.502,3.203-1.454
c5.11-5.849,18.621-19.249,31.556-25.796c2.387,2.319,5.099,4.167,8.048,5.557l-19.752,37.678
c-20.76-4.037-39.851-14.137-55.138-29.424C20.915,171.324,9.76,144.392,9.76,115.746z M47.445,215.217
c-2.306-2.306-3.067-5.653-2.188-8.636c14.835,11.765,32.148,19.606,50.657,22.996l-5.121,28.988L47.445,215.217z M222.366,377.828
c-1.644,1.644-3.83,2.549-6.155,2.549c-2.326,0-4.512-0.905-6.156-2.55l-68.184-68.184l5.506-33.925l88.548,88.549L222.366,377.828
z M372.765,441.445c-13.134,13.135-34.506,13.136-47.64,0.002l-3.251-3.251l24.904-27.668c1.611-1.706,1.534-4.396-0.173-6.008
c-1.707-1.611-4.396-1.534-6.008,0.173l-24.74,27.486l-5.693-5.693c0.175-0.128,0.35-0.257,0.508-0.415l47.178-47.178
l14.915,14.915C385.899,406.942,385.899,428.313,372.765,441.445z M298.944,92.549c1.123-0.198,2.118-0.839,2.764-1.778
c0.645-0.939,0.886-2.099,0.669-3.217l-8.542-43.959c-2.241-11.636,5.444-22.935,17.131-25.186
c5.626-1.083,11.329,0.091,16.056,3.308c4.727,3.218,7.93,8.101,9.019,13.755l1.569,8.077l-32.75,3.639
c-2.333,0.259-4.014,2.361-3.755,4.693c0.242,2.174,2.082,3.781,4.219,3.781c0.157,0,0.315-0.009,0.475-0.026l33.439-3.715
l10.21,52.544c0.011,0.08,0.025,0.159,0.042,0.239c0.01,0.048,0.022,0.104,0.036,0.16c2.155,11.542-5.483,22.722-17.003,24.943
l-67.667,11.775c-2.313,0.402-3.861,2.603-3.458,4.915c0.156,0.897,0.593,1.668,1.192,2.266l-0.011,0.011l81.967,81.967
l-39.883,39.883c-1.66,1.66-1.66,4.351,0,6.011c0.83,0.83,1.918,1.245,3.005,1.245c1.088,0,2.175-0.415,3.005-1.245l39.883-39.883
l26.049,26.05l-22.367,23.692c-1.611,1.707-1.534,4.397,0.173,6.008c0.821,0.775,1.87,1.16,2.917,1.16
c1.129,0,2.255-0.447,3.091-1.333l22.199-23.514l38.875,38.875c-0.121,0.097-0.248,0.182-0.36,0.293l-47.312,47.312l-48.818-48.817
c-0.797-0.797-1.878-1.245-3.005-1.245c-1.127,0-2.208,0.448-3.005,1.245l-13.772,13.773c-1.66,1.66-1.66,4.351,0,6.011
l46.62,46.62l-47.178,47.178c-0.158,0.158-0.287,0.333-0.415,0.508l-79.008-79.008l33.425-33.425c1.66-1.66,1.66-4.351,0-6.011
c-1.66-1.66-4.351-1.66-6.011,0l-33.425,33.424l-71.711-71.711l-0.007,0.007c-0.609-0.61-1.401-1.048-2.317-1.197
c-2.312-0.374-4.5,1.197-4.876,3.515l-10.818,66.654c-2.256,11.542-13.387,19.144-24.944,17.02
c-0.034-0.008-0.066-0.016-0.095-0.022c-0.104-0.023-0.208-0.042-0.313-0.057l-55.405-10.766l2.815-28.156
c0.233-2.335-1.471-4.418-3.806-4.652c-2.346-0.232-4.418,1.471-4.652,3.806l-2.737,27.374l-5.209-1.012
c-5.648-1.087-10.53-4.29-13.748-9.017c-3.217-4.727-4.392-10.429-3.308-16.056c1.087-5.646,4.309-10.542,9.071-13.784
c4.763-3.242,10.485-4.431,16.107-3.349l43.966,8.543c1.12,0.217,2.278-0.023,3.217-0.669c0.939-0.646,1.58-1.641,1.778-2.764
l12.091-68.455c4.182,0.453,8.411,0.691,12.677,0.691c30.916,0,59.983-12.04,81.845-33.901
c25.46-25.461,36.554-59.929,33.286-93.241L298.944,92.549z M440.187,374.024c-13.134,13.134-34.505,13.135-47.639,0
l-12.717-12.717l47.312-47.312c0.112-0.112,0.197-0.239,0.294-0.36l12.75,12.75C453.321,339.52,453.321,360.89,440.187,374.024z"
      />
      <path
        d="M260.062,192.313c-3.151-3.15-7.34-4.886-11.796-4.886c-4.456,0-8.645,1.735-11.795,4.886l-45.416,45.416
c-3.151,3.151-4.886,7.34-4.886,11.796c0,4.456,1.735,8.645,4.886,11.795l19.778,19.778c3.151,3.15,7.34,4.886,11.795,4.886
s8.645-1.735,11.796-4.886l45.416-45.417c3.151-3.15,4.886-7.34,4.886-11.795c0-4.456-1.735-8.645-4.886-11.795L260.062,192.313z
 M273.829,229.672l-45.416,45.417c-1.545,1.546-3.6,2.397-5.786,2.397c-2.185,0-4.24-0.851-5.785-2.397l-19.778-19.778
c-1.545-1.545-2.396-3.6-2.396-5.785c0-2.186,0.851-4.24,2.396-5.785l45.416-45.416c1.545-1.545,3.6-2.397,5.785-2.397
c2.186,0,4.24,0.851,5.785,2.397l3.518,3.518l-22.331,23.653c-1.611,1.706-1.534,4.396,0.173,6.008
c0.821,0.775,1.87,1.16,2.917,1.16c1.129,0,2.255-0.447,3.091-1.333l22.163-23.475l10.248,10.248
c1.545,1.545,2.396,3.6,2.396,5.785C276.225,226.072,275.374,228.127,273.829,229.672z"
      />
    </Astronaut>
  );
}

export default AstronautSvg;
