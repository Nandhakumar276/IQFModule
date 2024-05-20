import React from "react";
import  '../Loader/Loader.css';

export default function Loader() {
  return (
    <div id="preLoader" class="pre-loader">
    <div id="loading" class="text-center app-loading">
      <div class="mx-auto">
          <div class="loader">
              <div class="fruit"></div>
              <div class="fruit"></div>
              <div class="fruit"></div>
          </div>
      </div>
      <p>Please wait while we make everything perfect for you...</p>
 </div>
    </div>  
    );
}