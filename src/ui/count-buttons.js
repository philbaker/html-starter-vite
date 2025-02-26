import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";

export const countButtons  = `
  <div class="p-4 space-y-2">
    <div class="flex space-x-2">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <h1>Hello from Vite!</h1>
    <button
      id="counter"
      type="button"
      class="p-1.5 bg-blue-100 rounded cursor-pointer mr-2"
    ></button>

    <button
      x-data="{
        count: 0
      }"
      x-on:click="count += 1"
      type="button" 
      class="p-1.5 bg-green-100 rounded cursor-pointer"
      x-text="'count is ' + count"
    ></button>
  </div>
`;
