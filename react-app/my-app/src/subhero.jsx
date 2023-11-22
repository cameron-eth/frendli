import React from "react";

function SubHero() {
  return (
    <div className=" text-white text-8xl font-bold max-w-7xl mb-20 mx-auto">
      <p>Connect Virtually </p>
      <p className="text-4xl font-thin">
        <span className="hover:text-blue-300">With</span>{" "}
        <span className="hover:text-pink-200">Our</span>{" "}
        <span className="hover:text-green-200">Integrations </span>{" "}
      </p>
      <div className="bg-white/5 border-2 mt-5 rounded-lg shadow-lg p-3">
        <div id="hyperlink" className="mb-5 flex justify-around w-full m-2">
          {/* ... (rest of the code for categories) */}
        </div>

        <p className="text-2xl ml-3 font-medium text-blue-200"> With Our Integrated Services</p>

        <section className="mt-5">
          <ul className="space-y-4">
          

            <li  className="flex items-center justify-between bg-white/5 p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                <h3 className="text-lg text-green-500"> Moondrops Listening Party
                <br/>
                <h4 className="text-lg font-thin">music, shared experiences, indie, leisure</h4>
                </h3>
                <svg className="hover:fill-green-500" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/></svg>  
            </li>

            <li className="flex items-center justify-between bg-white/5 p-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                <h3 className="text-lg text-pink-500">
                  Entendre Finance Twitter Spaces
                  <br/>
                  <h4 className="text-lg font-thin">finance, crypto, start-ups, investing</h4>
                </h3>
                <svg className="hover:fill-blue-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg>            
            </li>

          </ul>
        </section>

      </div>
    </div>
  );
}

export default SubHero;

