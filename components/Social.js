import React from "react";

//import SocialLink from '../components/SocialLink.js'

function Social(props) {
  return (
    <ul className="flex gap-10 space-y-0 list-none">
      <li>
        <a
          className="relative flex items-center justify-center w-10 h-10 rounded cursor-pointer focus-base group"
          href="http://www.dribbble.com/iansteele"
          aria-label="Dribbble"
        >
          <svg
            className="w-6 transition-all duration-500 transform fill-brand-secondary group-hover:fill-brand-tertiary group-hover:-translate-y-1 group-hover:scale-105 group-focus:scale-101 group-focus:fill-brand-tertiary group-focus:-translate-y-1 group-active:translate-y-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 900"
          >
            <path
              id="ball"
              d="M450.094,833.732c-211.729,0-383.982-172.253-383.982-383.982S238.365,65.768,450.094,65.768,834.076,238.021,834.076,449.75,661.822,833.732,450.094,833.732Zm323.832-331.42c-11.221-3.542-105.518-30.473-204.3-14.021,42.9,117.883,60.355,213.9,63.716,233.846C706.927,672.384,759.307,593.571,773.926,502.312ZM578.209,752.164c-4.878-28.775-23.921-129.061-69.967-248.719-0.722.246-1.442,0.48-2.164,0.731-184.992,64.462-251.4,192.752-257.3,204.818A327.516,327.516,0,0,0,578.209,752.164ZM206.43,669.548c7.429-12.718,97.442-161.757,266.594-216.433q6.412-2.073,12.924-3.9c-8.233-18.631-17.2-37.284-26.59-55.659-163.79,49.018-322.727,46.97-337.077,46.675-0.1,3.33-.167,6.668-0.167,10.022A326.674,326.674,0,0,0,206.43,669.548ZM129.042,383.076c14.669,0.193,149.8.78,303.213-39.961-54.344-96.6-112.954-177.824-121.6-189.682C218.9,196.713,150.309,281.3,129.042,383.076ZM373.235,131.388c9.066,12.138,68.634,93.258,122.379,192,116.625-43.713,166-110.073,171.9-118.475A327.584,327.584,0,0,0,373.235,131.388ZM703.971,242.843C697.057,252.2,642.1,322.652,520.83,372.162c7.632,15.623,14.948,31.512,21.76,47.506q3.621,8.5,7.065,16.926c109.132-13.722,217.566,8.27,228.379,10.557A326.422,326.422,0,0,0,703.971,242.843Z"
            />
          </svg>
          <span className="absolute rounded-full left-0 w-full h-0 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:h-1 opacity-0 group-hover:opacity-100 group-active:h-0.5"></span>
        </a>
      </li>
      <li>
        <a
          className="relative flex items-center justify-center w-10 h-10 rounded cursor-pointer focus-base group"
          href="http://www.instagram.com/steeledesign.co"
          aria-label="Instagram"
        >
          <svg
            className="w-6 transition-all duration-500 transform fill-brand-secondary group-hover:scale-101 group-hover:fill-brand-tertiary group-hover:-translate-y-1 group-focus:scale-101 group-focus:fill-brand-tertiary group-focus:-translate-y-1 group-active:translate-y-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 900"
          >
            <path d="M450,135.13c102.55,0,114.7.39,155.2,2.24,37.45,1.71,57.78,8,71.32,13.22,17.93,7,30.72,15.29,44.16,28.73s21.76,26.23,28.73,44.16c5.26,13.53,11.52,33.87,13.22,71.32,1.85,40.5,2.24,52.65,2.24,155.2s-.39,114.7-2.24,155.2c-1.71,37.45-8,57.78-13.22,71.32-7,17.93-15.29,30.72-28.73,44.16s-26.23,21.76-44.16,28.73c-13.53,5.26-33.87,11.52-71.32,13.22-40.49,1.85-52.64,2.24-155.2,2.24s-114.71-.39-155.2-2.24c-37.45-1.71-57.78-8-71.32-13.22-17.93-7-30.72-15.29-44.16-28.73s-21.76-26.23-28.73-44.16c-5.26-13.53-11.52-33.87-13.22-71.32-1.85-40.5-2.24-52.65-2.24-155.2s.39-114.7,2.24-155.2c1.71-37.45,8-57.78,13.22-71.32,7-17.93,15.29-30.72,28.73-44.16s26.23-21.76,44.16-28.73c13.53-5.26,33.87-11.52,71.32-13.22,40.5-1.85,52.65-2.24,155.2-2.24m0-69.2c-104.31,0-117.39.44-158.35,2.31s-68.8,8.36-93.23,17.85c-25.26,9.82-46.68,22.95-68,44.3s-34.48,42.77-44.3,68c-9.49,24.43-16,52.35-17.85,93.23s-2.31,54-2.31,158.35.44,117.39,2.31,158.35,8.36,68.8,17.85,93.23c9.82,25.26,22.95,46.68,44.3,68s42.77,34.48,68,44.3c24.43,9.49,52.35,16,93.23,17.85s54,2.31,158.35,2.31,117.39-.44,158.35-2.31,68.8-8.36,93.23-17.85c25.26-9.82,46.68-22.95,68-44.3s34.48-42.77,44.3-68c9.49-24.43,16-52.35,17.85-93.23s2.31-54,2.31-158.35-.44-117.39-2.31-158.35-8.36-68.8-17.85-93.23c-9.82-25.26-22.95-46.68-44.3-68s-42.77-34.48-68-44.3c-24.43-9.49-52.35-16-93.23-17.85s-54-2.31-158.35-2.31Z" />
            <path d="M450,252.77c-108.93,0-197.23,88.3-197.23,197.23S341.07,647.23,450,647.23,647.23,558.93,647.23,450,558.93,252.77,450,252.77ZM450,578A128,128,0,1,1,578,450,128,128,0,0,1,450,578Z" />
            <circle cx="655.02" cy="244.98" r="46.09" />
          </svg>
          <span className="absolute rounded-full left-0 w-full h-0 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:h-1 opacity-0 group-hover:opacity-100 group-active:h-0.5"></span>
        </a>
      </li>
      <li>
        <a
          className="relative flex items-center justify-center w-10 h-10 rounded cursor-pointer focus-base group"
          href="http://www.github.com/iansteele"
          aria-label="Github"
        >
          <svg
            className="w-6 transition-all duration-500 transform group-hover:scale-105 fill-brand-secondary group-hover:fill-brand-tertiary group-hover:-translate-y-1 group-focus:scale-101 group-focus:fill-brand-tertiary group-focus:-translate-y-1 group-active:translate-y-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16 24c-0.6 0-1-0.4-1-1v-3.9c0.1-0.8-0.2-1.4-0.7-1.9 -0.3-0.3-0.4-0.7-0.2-1 0.1-0.4 0.5-0.6 0.8-0.7 2.9-0.3 5.6-1.3 5.6-6 0-1.1-0.4-2.2-1.2-3.1 -0.3-0.3-0.3-0.7-0.2-1 0.3-0.8 0.3-1.6 0.1-2.4 -0.5 0.1-1.3 0.4-2.6 1.3 -0.2 0.2-0.5 0.2-0.8 0.1 -2.1-0.6-4.4-0.6-6.5 0C9 4.5 8.7 4.5 8.4 4.3 7.2 3.4 6.3 3.1 5.8 3 5.6 3.8 5.6 4.6 5.9 5.4c0.1 0.4 0.1 0.8-0.2 1C4.9 7.3 4.5 8.4 4.5 9.5c0 4.7 2.7 5.7 5.6 6 0.4 0 0.7 0.3 0.8 0.7 0.1 0.4 0 0.8-0.2 1 -0.5 0.5-0.7 1.1-0.7 1.8l0 0.9c0 0 0 0.1 0 0.1l0 2.9c0 0.6-0.4 1-1 1s-1-0.4-1-1v-1.7c-3 0.5-4.3-1.2-5.2-2.3 -0.4-0.5-0.7-0.9-1.1-1 -0.5-0.1-0.9-0.7-0.7-1.2 0.1-0.5 0.7-0.9 1.2-0.7 1 0.3 1.6 1 2.2 1.7 0.8 1.1 1.5 1.9 3.6 1.5v-0.1c0-0.6 0.1-1.3 0.3-1.8 -2.8-0.6-5.8-2.4-5.8-7.7 0-1.5 0.5-2.9 1.4-4C3.5 4.2 3.6 2.9 4.2 1.6 4.3 1.3 4.5 1.1 4.8 1c0.4-0.1 1.7-0.3 4.4 1.4 2.2-0.5 4.5-0.5 6.6 0 2.6-1.7 4-1.5 4.4-1.4 0.3 0.1 0.5 0.3 0.6 0.6 0.5 1.3 0.6 2.6 0.3 3.9 0.9 1.1 1.4 2.5 1.4 4 0 5.7-3.4 7.2-5.8 7.8 0.2 0.6 0.3 1.3 0.3 1.9l0 3.8C17 23.6 16.6 24 16 24z" />
          </svg>
          <span className="absolute  rounded-full left-0 w-full h-0 transition-all duration-500 ease-in-out bg-brand-secondary -bottom-0.5 group-hover:h-1 opacity-0 group-hover:opacity-100 group-active:h-0.5"></span>
        </a>
      </li>
    </ul>
  );
}

export default Social;
