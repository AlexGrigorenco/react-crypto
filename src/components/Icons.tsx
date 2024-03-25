export enum IconNameList {
  Home = "home",
  Chart = "chart",
  Load = "load",
  Exchanges = "exchanges",
  Calculator = "calculator",
}

const Icons = ( { iconName }: { iconName: IconNameList }) => {
  if (iconName === "home") {
    return (
      <svg
        fill="none"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
          fill="var(--color)"
        />
      </svg>
    );
  } else if (iconName === "chart") {
    return (
      <svg
        fill="none"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface / Chart_Line">
          <path
            id="Vector"
            d="M3 15.0002V16.8C3 17.9201 3 18.4798 3.21799 18.9076C3.40973 19.2839 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H21.0002M3 15.0002V5M3 15.0002L6.8534 11.7891L6.85658 11.7865C7.55366 11.2056 7.90288 10.9146 8.28154 10.7964C8.72887 10.6567 9.21071 10.6788 9.64355 10.8584C10.0105 11.0106 10.3323 11.3324 10.9758 11.9759L10.9822 11.9823C11.6357 12.6358 11.9633 12.9635 12.3362 13.1153C12.7774 13.2951 13.2685 13.3106 13.7207 13.1606C14.1041 13.0334 14.4542 12.7275 15.1543 12.115L21 7"
            stroke="var(--color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  } else if (iconName === "load") {
    return (
      <svg
        fill="var(--color)"
        width="26px"
        height="26px"
        viewBox="-7 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>loading</title>
        <path d="M2.080 14.040l4-1.040c0.44-0.12 0.72-0.56 0.6-1.040-0.12-0.44-0.56-0.72-1.040-0.6l-2.080 0.56c0.68-0.88 1.56-1.6 2.64-2.080 1.64-0.72 3.44-0.76 5.12-0.12 1.64 0.64 2.96 1.92 3.68 3.52 0.2 0.44 0.68 0.6 1.12 0.44 0.44-0.2 0.6-0.68 0.44-1.12-0.88-2.040-2.52-3.6-4.6-4.44-2.080-0.8-4.36-0.76-6.4 0.12-1.36 0.6-2.48 1.52-3.36 2.68l-0.52-1.96c-0.12-0.44-0.56-0.72-1.040-0.6-0.44 0.12-0.72 0.56-0.6 1.040l1.040 4c0.12 0.56 0.4 0.8 1 0.64zM17.72 22.52l-1.040-3.96c0 0-0.16-0.8-0.96-0.6v0l-4 1.040c-0.44 0.12-0.72 0.56-0.6 1.040 0.12 0.44 0.56 0.72 1.040 0.6l2.080-0.56c-1.76 2.32-4.88 3.28-7.72 2.16-1.64-0.64-2.96-1.92-3.68-3.52-0.2-0.44-0.68-0.6-1.12-0.44-0.44 0.2-0.6 0.68-0.44 1.12 0.88 2.040 2.52 3.6 4.6 4.44 1 0.4 2 0.56 3.040 0.56 2.64 0 5.12-1.24 6.72-3.4l0.52 1.96c0.080 0.36 0.44 0.64 0.8 0.64 0.080 0 0.16 0 0.2-0.040 0.4-0.16 0.68-0.6 0.56-1.040z"></path>
      </svg>
    );
  } else if (iconName === "exchanges") {
    return (
      <svg
        fill="var(--color)"
        height="20px"
        width="20px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 481.601 481.601"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M347.801,146.701v36.6c0,7,7.5,11.3,13.6,7.8l115.7-66.8c6-3.5,6-12.2,0-15.7l-115.7-66.7c-6-3.5-13.6,0.9-13.6,7.8v36.6
			h-97.5c2.1,9.6,3.2,19.5,3.2,29.7c0,10.6-1.1,20.8-3.2,30.8h97.5V146.701z"
            />
            <path
              d="M133.801,335.701v-36.6c0-7-7.5-11.3-13.6-7.8l-115.7,66.8c-6,3.5-6,12.2,0,15.7l115.7,66.8c6,3.5,13.6-0.9,13.6-7.8
			v-36.6h98.1c-2.1-9.7-3.3-19.8-3.3-30.2c0-10.4,1.1-20.5,3.3-30.2h-98.1V335.701z"
            />
            <path
              d="M111.101,227.601c61.1-0.2,110.5-50.1,110.3-111.5s-50-110.9-111.1-110.6c-61.2,0.2-110.5,50.1-110.3,111.4
			C0.201,178.301,50.001,227.801,111.101,227.601z M49.401,98.401h12.7c0.9-3.1,1.7-6.3,3-9.3c6.4-15.6,17.1-26.7,33.3-32
			c13.4-4.4,26.9-4.3,40.4-0.6c3.5,1,7,2.2,10.3,3.7c3.2,1.5,4.1,4,2.8,7.1c-1.4,3.5-2.8,6.9-4.4,10.3c-1.4,3-3.1,3.9-6.4,3.2
			c-4.2-0.9-8.3-2.2-12.5-3.1c-8.1-1.7-16.2-1.8-24.2,0.8c-10,3.2-15.3,10.5-18.5,19.9l27.2-0.1c2.1,0,3.9,1.7,3.9,3.8v8.6
			c0,2.1-1.7,3.9-3.8,3.9l-29.8,0.1c0,2.4,0,4.7,0,7l29.7-0.1c2.1,0,3.9,1.7,3.9,3.8v8.6c0,2.1-1.7,3.9-3.8,3.9l-26,0.1
			c0,0.1,0,0.2,0,0.3c3.1,7.1,7.7,12.8,15.2,15.7c8.7,3.4,17.6,3.3,26.5,1.4c4.2-0.9,8.4-2.2,12.6-3.2c3.1-0.7,4.9,0.2,6.2,3.1
			c1.5,3.3,3,6.7,4.4,10.1c1.3,3.2,0.6,5.5-2.4,7.3c-0.7,0.4-1.5,0.8-2.3,1.1c-12.5,4.9-25.4,6.8-38.8,4.7
			c-9.4-1.5-18.2-4.7-25.7-10.5c-9.6-7.4-15.8-17.1-19.4-28.6l-0.5-1.3l-13.4,0.1c-2.1,0-3.9-1.7-3.9-3.8v-8.6
			c0-2.1,1.7-3.9,3.8-3.9h10.5c0-2.4,0-4.6,0-7h-10.5c-2.1,0-3.9-1.7-3.9-3.8v-8.6C45.601,100.201,47.301,98.401,49.401,98.401z"
            />
            <path
              d="M370.901,255.701c-60.9,0-110.2,49.3-110.2,110.2s49.3,110.2,110.2,110.2s110.2-49.3,110.2-110.2
			C481.101,305.101,431.801,255.701,370.901,255.701z M402.601,409.401c-4.8,5.8-11.1,9.8-18.4,11.8c-3.2,0.9-4.6,2.5-4.5,5.9
			c0.1,3.2,0,6.5,0,9.8c0,2.9-1.5,4.5-4.3,4.5c-3.5,0.1-7,0.1-10.5,0c-3.1-0.1-4.5-1.8-4.6-4.8c0-2.4,0-4.8-0.1-7.1
			c-0.1-5.2-0.2-5.5-5.3-6.3c-6.5-1-12.8-2.5-18.7-5.4c-4.6-2.3-5.1-3.4-3.8-8.3c1-3.6,2-7.2,3.1-10.8c1.3-4.2,2.4-4.7,6.3-2.7
			c6.5,3.4,13.5,5.3,20.7,6.2c4.7,0.6,9.3,0.1,13.6-1.8c8.1-3.5,9.4-12.9,2.5-18.6c-2.3-1.9-5-3.3-7.7-4.5
			c-7.1-3.1-14.5-5.5-21.2-9.5c-10.9-6.5-17.8-15.5-17-28.7c0.9-15,9.4-24.3,23.1-29.3c5.7-2.1,5.7-2,5.7-7.9c0-2,0-4,0-6
			c0.1-4.5,0.9-5.2,5.3-5.4c1.4,0,2.8,0,4.1,0c9.5,0,9.5,0,9.5,9.5c0,6.7,0,6.7,6.7,7.8c5.1,0.8,10,2.3,14.7,4.4
			c2.6,1.1,3.6,3,2.8,5.7c-1.2,4.1-2.3,8.2-3.6,12.2c-1.2,3.8-2.5,4.4-6.1,2.6c-7.4-3.6-15.1-5.1-23.3-4.6c-2.1,0.1-4.2,0.4-6.2,1.3
			c-7.1,3.1-8.2,10.9-2.2,15.7c3,2.4,6.5,4.2,10.1,5.7c6.2,2.6,12.5,5.1,18.5,8.3C410.801,369.501,415.901,393.201,402.601,409.401z
			"
            />
          </g>
        </g>
      </svg>
    );
  } else if (iconName === "calculator") {
    return (
      <svg
        fill="#000000"
        height="16px"
        width="16px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 477.427 477.427"
        xmlSpace="preserve"
      >
        <g>
          <polygon points="143.372,1.213 113.372,1.213 113.372,391.327 41.958,391.095 128.289,477.427 214.06,391.655 143.372,391.425 	" />
          <polygon points="435.469,86.332 349.138,0 263.367,85.772 334.3,86.003 334.3,476.213 364.3,476.213 364.3,86.1 	" />
        </g>
      </svg>
    );
  }
};

export default Icons;
