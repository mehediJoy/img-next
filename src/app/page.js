import Image from 'next/image'

export default function Home() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 m-auto shadow-md">
            <a href="#">
                <Image className="rounded-t-lg" src="https://dummyimage.com/600x400/ded7de/a7aad1&text=Joy" alt="" height={600} width={400}/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </div>
        </div>
    )
}
