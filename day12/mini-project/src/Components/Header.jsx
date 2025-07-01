const Header = () => {
    return (
        <header className="flex bg-cyan-100 p-4 justify-between">
            <div>
                <p className="text-amber-800">Shopping App</p>
            </div>
            <div>
                <input className="border-1 border-amber-900 p-1 text-cyan-300"/>
                <button className="border-1 border-amber-900 p-1 text-blue-400">Search</button>
            </div>
            <div>
                <div className="h-8 w-8 rounded-full bg-purple-700"></div>
            </div>
        </header>
    )
};

export {Header};