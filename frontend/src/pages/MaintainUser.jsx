import React from 'react'
// import '../css/maintainUser.css'
import { useNavigate } from 'react-router-dom';

function MaintainUser() {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate('/')
    }
    const handleLogout = () => {
        navigate('/')
    }
    return (
      <>
        <div
          className="relative flex size-full min-h-screen flex-col bg-slate-50 justify-between group/design-root overflow-x-hidden w-100"
          style={{
            "--select-button-svg": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='rgb(78,115,151)' viewBox='0 0 256 256'%3e%3cpath d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'%3e%3c/path%3e%3c/svg%3e")`,
            fontFamily: `Inter, "Noto Sans", sans-serif`,
          }}
        >
          <div>
            <div className="flex items-center bg-slate-50 p-4 pb-2 justify-between">
              <div
                className="text-[#0e141b] flex size-12 shrink-0 items-center"
                data-icon="ArrowLeft"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
              <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                Admin Dashboard
              </h2>
            </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Membership Management
            </h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Username</p>
                <input
                  placeholder="Enter Username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-[40px] flex-1">
              <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Membership Duration</p>
              <select 
              className="form-input w-full flex-1 rounded-xl border border-[#d0dbe7] bg-slate-50 h-14 text-[#0e141b] focus:outline-none focus:ring-0 focus:border-[#d0dbe7] p-[15px] text-base font-normal leading-normal"
              defaultValue="" 
                >
                <option value="" disabled>Select duration</option>
                <option value="6 Months">6 Months Default</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                </select>
                </label>
              </div>
              <div className="w-full flex justify-center mt-4">
              <button 
                className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-[#0e141b] text-white text-sm font-medium leading-normal"
               >Confirm</button>
              </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              User Management
            </h2>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
              <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">Add User</p>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Add</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
              <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">Delete User</p>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Delete</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 border-t border-[#e7edf3] bg-slate-50 px-4 pb-3 pt-2">
              <a
                className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0e141b]"
                href="#"
              >
                <div
                  className="text-[#0e141b] flex h-8 items-center justify-center"
                  data-icon="House"
                  data-size="24px"
                  data-weight="fill"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                  </svg>
                </div>
                <p className="text-[#0e141b] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
              </a>
              <a
                className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#4e7397]"
                href="#"
              >
                <div
                  className="text-[#4e7397] flex h-8 items-center justify-center"
                  data-icon="SignOut"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path>
                  </svg>
                </div>
                <p className="text-[#4e7397] text-xs font-medium leading-normal tracking-[0.015em]">Logout</p>
              </a>
            </div>
            <div className="h-5 bg-slate-50"></div>
          </div>
        </div>
    </>
      ); 
}

export default MaintainUser
