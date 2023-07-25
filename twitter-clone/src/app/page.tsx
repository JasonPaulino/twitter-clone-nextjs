// Importing all the icons from the react-icons for our home, explore, notifcations, messages, bookmark, and profile for the left side bar
import Link from 'next/link'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'

// The navigation items where each value is an object that has a title and icon property corresponding to the import react icons
const NAVIGATION_ITEMS = [
    {
        title: 'Twitter',
        icon: BsTwitter
    },
    {
        title: 'Home',
        icon: BiHomeCircle

    },
    {
        title: 'Explore',
        icon: HiOutlineHashtag
    },
    {
        title: 'Notfications',
        icon: BsBell,
    },
    {
        title: 'Messages',
        icon: BsEnvelope
    },
    {
        title: 'Bookmark',
        icon: BsBookmark
    },
    {
        title: 'Profile',
        icon: BiUser
    }
]

export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
        <div className="max-w-screen-xl w-full h-full flex relative">
            {/* This is the left side bar for navigation */}
            <section className="fixed w-{275px} flex flex-col h-screen">
                {/* Iterates over the the array of icons and renders them as a link with their path (the title) */}
                <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
                    {NAVIGATION_ITEMS.map((item) => {
                        return (
                            <Link 
                                className="hover:bg-white/10 tranisition text-2xl duration-200 flex items-center w-fit justify-start space-x-4 rounded-3xl py-2 px-6" 
                                href={`/${item.title.toLocaleLowerCase()}`} 
                                key={item.title}
                            >
                                <div>
                                    <item.icon />
                                </div>

                                {/* Render all titles and icons except for the twitter (only renders the twitter logo and not the title "Twitter") */}
                                {item.title !== "Twitter" && <div>{item.title}</div>}
                            </Link>
                        )
                    })}

                    {/* Tweet button */}
                    <button className="w-full rounded-full m-4 bg-primary font-bold p-4 text-xl text-center hover:bg-opacity-70 transition duration-200">
                        Tweet
                    </button>
                </div>

                {/* The profiile button on the bottom left */}
                <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-slate-400 w-10 h-10"></div>
                        <div className="text-left text-sm">
                            <div className="font-semibold">Jason Paulino</div>
                            <div>@jasonpaulino</div>
                        </div>
                    </div>
                    <div>
                        <BsThreeDots />
                    </div>
                </button>

            </section>

            {/* <main>Home timeline</main>
            <section>right section</section> */} 
        </div>
    </div>
  )
}

export default Home
