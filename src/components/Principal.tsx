export function Principal() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="w-28 h-28 flex items-center justify-center border-blue-500 border-4 rounded-full">
                <img
                    className="w-34 rounded-full"
                    src="https://github.com/PedroZef.png"
                    alt="Image do Pedro Zeferino da Silva"
                />
            </div>
            <h1 className="text-3xl font-bold">Pedro Zeferino da Silva </h1>
            <p className="opacity-100 font-bold text-lg">@zefpedro</p>

            <ul className="flex flex-col gap-2 mt-5 text-gray-50 text-sm">
                <li className="font-bold bg-green-900 rounded px-20 py-4 hover:bg-blue-600 transition-colors cursor-pointer">
                    <a
                        href="https://linkedin.com/in/pedro-zeferino-da-silva-30654a121/"
                        target="_blank">💼 Linkedin
                    </a>
                </li>
                <li className="font-bold bg-blue-700 rounded px-20 py-4 hover:bg-red-700 transition-colors cursor-pointer">
                    <a
                        href="https://instagram.com/zefpedro"
                        target="_blank">📷 Instagram
                    </a>
                </li>
                <li className="font-bold bg-violet-700 rounded px-20 py-4 hover:bg-orange-600 transition-colors cursor-pointer">
                    <a
                        href="https://twitter.com/zefpedro"
                        target="_blank">🐦Twitter
                    </a>
                </li>
                <li className="font-bold bg-blue-900 rounded px-20 py-4 hover:bg-green-800 transition-colors cursor-pointer">
                    <a
                        href="https://github.com/PedroZef"
                        target="_blank">🐱 Github
                    </a>
                </li>
            </ul>
        </div>
    )
}