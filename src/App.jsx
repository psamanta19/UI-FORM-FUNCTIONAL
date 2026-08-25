import sidebarBg from "./assets/images/bg-sidebar-desktop.svg";

function App() {
  return (
    <main className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <div className="w-full max-w-235 bg-white rounded-2xl p-3 flex">
        <aside className="relative w-68.75 min-h-142.5 rounded-xl overflow-hidden">
          <img
            src={sidebarBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 p-8 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 cursor-pointer">
                1
              </div>
              <div>
                <p className="text-white text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">YOUR INFO</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 cursor-pointer">
                2
              </div>
              <div>
                <p className="text-white text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">SELECT PLAN</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 cursor-pointer">
                3
              </div>
              <div>
                <p className="text-white text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">ADD-ONS</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-blue-900 cursor-pointer">
                4
              </div>
              <div>
                <p className="text-white text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </aside>
        <section className="flex-1"></section>
      </div>
    </main>
  );
}

export default App;