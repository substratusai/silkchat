import type { MetaFunction } from "@remix-run/node";
import React from 'react';

export const meta: MetaFunction = () => [{ title: "SilkChat - Chat with any OpenAI model" }];

export default function Index() {
  const messages = React.useState([]);

  return (
    <div className="container">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center overflow-auto">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <div className="container flex flex-col h-screen lg:max-w-screen-md">
            <div className="flex-1">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="chat-header">
                  You
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="chat-header">
                  Obi-Wan Kenobi
                </div>
                <div className="chat-bubble">I loved you.</div>
              </div>
            </div>
            <div className="sticky bottom-0">
              <form className="flex items-end">
                <textarea placeholder="Bio" className="flex-1 textarea textarea-bordered textarea-lg w-full" ></textarea>
                <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">Send</button>
              </form>
            </div>
          </div>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>

        </div>
      </div>
    </div>
  );
}
