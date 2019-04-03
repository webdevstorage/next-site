export default () => (
  <>
    <svg
      width="1440"
      height="277"
      viewBox="0 0 1440 277"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1733 252.5L1367.26 37.8371C1329.58 15.7178 1282.08 19.5161 1248.39 47.3437L1067.63 196.638C1028.57 228.906 971.928 228.321 933.534 195.253L775.871 59.4574C736.861 25.8582 679.139 25.8581 640.129 59.4574L482.63 195.112C444.164 228.243 387.399 228.76 348.335 196.336L169.051 47.5243C135.4 19.5931 87.8711 15.6975 50.1215 37.7767L-317 252.5"
        stroke="white"
        stroke-dasharray="3 3"
      />
      <path
        opacity="0.3"
        d="M1733 276.5L1362.43 59.0035C1327.65 38.5857 1283.81 42.0918 1252.71 67.7788L1067.63 220.638C1028.57 252.906 971.928 252.321 933.534 219.253L770.65 78.9607C734.641 47.946 681.359 47.946 645.35 78.9607L482.63 219.112C444.164 252.243 387.399 252.76 348.335 220.336L164.739 67.9455C133.677 42.1628 89.8041 38.567 54.9583 58.9477L-317 276.5"
        stroke="white"
        stroke-dasharray="3 3"
      />
      <path
        opacity="0.3"
        d="M1733 228.5L1372.09 16.6707C1331.5 -7.15002 1280.36 -3.05962 1244.07 26.9086L1062.43 176.935C1026.37 206.721 974.087 206.181 938.647 175.657L781.092 39.9542C739.081 3.77034 676.919 3.77031 634.908 39.9541L477.504 175.526C441.997 206.109 389.599 206.586 353.54 176.656L173.363 27.103C137.123 -2.9767 85.9381 -7.17189 45.2847 16.6056L-317 228.5"
        stroke="white"
        stroke-dasharray="3 3"
      />
    </svg>
    <svg
      width="480"
      height="84"
      viewBox="0 0 480 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M598.379 75.2456L503.945 19.8193C471.99 1.06429 431.72 4.28482 403.153 27.88L396.462 33.406C367.2 57.5744 324.749 57.1099 295.993 32.3422V32.3422C266.811 7.20752 223.599 7.1806 194.417 32.3152V32.3152C165.642 57.0994 123.178 57.4865 93.9555 33.231L87.4699 27.8478C59.0714 4.27607 18.9604 0.988495 -12.8972 19.6215L-108 75.2456"
        stroke="white"
        stroke-dasharray="3 3"
      />
      <path
        opacity="0.3"
        d="M598.379 83.5154L501.627 26.7284C471.064 8.79043 432.548 11.8707 405.225 34.4379L398.51 39.9839C368.066 65.1297 323.898 64.6464 293.979 38.8771V38.8771C265.954 14.739 224.455 14.7131 196.43 38.8513V38.8513C166.493 64.6363 122.314 65.0391 91.9114 39.8041L85.4079 34.406C58.2473 11.8618 19.8849 8.71759 -10.5841 26.5384L-108 83.5154"
        stroke="white"
        stroke-dasharray="3 3"
      />
      <path
        opacity="0.3"
        d="M598.379 66.9756L508.452 14.1946C473.791 -6.14881 430.11 -2.65552 399.123 22.938L392.528 28.3854C365.539 50.6769 326.385 50.2486 299.862 27.4044V27.4044C268.457 0.355559 221.955 0.326811 190.55 27.3757V27.3757C164.007 50.2371 124.838 50.5942 97.8824 28.2204L91.4791 22.9055C60.6736 -2.66404 17.163 -6.23025 -17.3948 13.982L-108 66.9756"
        stroke="white"
        stroke-dasharray="3 3"
      />
    </svg>
    <style jsx>
      {`
        svg:last-child {
          display: none;
        }
        @media screen and (max-width: 640px) {
          svg:first-child {
            display: none;
          }
          svg:last-child {
            display: block;
          }
        }
      `}
    </style>
  </>
);
